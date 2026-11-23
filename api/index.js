import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Menampilkan website dari folder public
app.use(express.static(path.join(__dirname, "../public")));

// Gemini AI
const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY
    })
  : null;

// Endpoint rekomendasi resep
app.post("/api/recommend", async (req, res) => {
  try {
    const ingredients = String(req.body.ingredients || "").trim();
    const servings = req.body.servings || "2-3 porsi";
    const difficulty = req.body.difficulty || "Semua Tingkat";
    const maxTime = req.body.maxTime || "Fleksibel";
    const dietary = req.body.dietary || "Umum";

    if (!ingredients) {
      return res.status(400).json({
        error: "Masukkan bahan terlebih dahulu."
      });
    }

    if (!ai) {
      return res.status(503).json({
        error: "GEMINI_API_KEY belum diatur di environment. Silakan tambahkan GEMINI_API_KEY di file .env atau Vercel Environment Variables.",
        fallbackAvailable: true
      });
    }

    const prompt = `
Kamu adalah AI Master Chef & Asisten Kuliner cerdas untuk website MasakYuk.

Bahan utama yang dimiliki pengguna di rumah/kulkas:
${ingredients}

Preferensi memasak:
- Porsi yang diinginkan: ${servings}
- Tingkat kesulitan: ${difficulty}
- Estimasi waktu: ${maxTime}
- Preferensi diet/selera: ${dietary}

Tugas:
Berikan 3 rekomendasi masakan lezat dan praktis yang dapat dibuat dari bahan tersebut. Format jawaban Anda dalam struktur JSON murni tanpa markdown wrapper agar mudah diproses, dengan struktur:
[
  {
    "id": "1",
    "nama": "Nama Masakan",
    "deskripsi": "Deskripsi singkat menggugah selera",
    "waktu": "25 menit",
    "porsi": "${servings}",
    "kesulitan": "Mudah",
    "kalori": "320 kkal",
    "bahanUtama": ["bahan 1", "bahan 2"],
    "bahanTambahan": ["bumbu dapur dasar", "garam", "minyak"],
    "langkah": [
      "Langkah 1...",
      "Langkah 2...",
      "Langkah 3..."
    ],
    "tipsChef": "Tips rahasia agar masakan makin gurih dan harum"
  }
]
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt
    });

    const textOutput = response.text || "";
    
    // Coba parse JSON dari respon model jika ada
    let parsedData = null;
    try {
      const cleanJson = textOutput.replace(/```json/g, "").replace(/```/g, "").trim();
      parsedData = JSON.parse(cleanJson);
    } catch {
      // Jika format raw text
      parsedData = null;
    }

    res.json({
      success: true,
      result: textOutput,
      recipes: parsedData
    });

  } catch (error) {
    console.error("Gemini API error:", error);

    res.status(500).json({
      error: "Terjadi kendala saat menghubungi AI. Silakan coba kembali sesaat lagi.",
      details: error.message
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "MasakYuk API",
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY)
  });
});

// Fallback untuk SPA (Single Page Application)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Jalankan server jika dipanggil langsung
const PORT = process.env.PORT || 3000;
const isDirectRun = process.argv[1] && (process.argv[1].endsWith('api\\index.js') || process.argv[1].endsWith('api/index.js') || process.argv[1].endsWith('index.js'));
if (isDirectRun && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🍳 Server MasakYuk siap di http://localhost:${PORT}`);
  });
}

export default app;