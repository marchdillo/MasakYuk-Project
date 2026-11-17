import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

    if (!ingredients) {
      return res.status(400).json({
        error: "Masukkan bahan terlebih dahulu."
      });
    }

    if (!ai) {
      return res.status(500).json({
        error: "GEMINI_API_KEY belum diatur di Vercel."
      });
    }

    const prompt = `
Kamu adalah AI asisten kuliner untuk website MasakYuk.

Bahan yang dimiliki pengguna:
${ingredients}

Berikan 3 rekomendasi masakan yang dapat dibuat dari bahan tersebut.

Untuk setiap rekomendasi berikan:
1. Nama masakan
2. Deskripsi singkat
3. Bahan-bahan
4. Bahan tambahan jika diperlukan
5. Cara memasak
6. Estimasi waktu
7. Tingkat kesulitan

Gunakan Bahasa Indonesia yang sederhana dan mudah dipahami.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt
    });

    res.json({
      result: response.text || "Tidak ada rekomendasi."
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Terjadi kesalahan saat menghubungi Gemini API."
    });
  }
});

// Halaman utama
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

export default app;