/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4F7F4',
          100: '#E5EDE5',
          200: '#CDDCCD',
          300: '#AFC6AF',
          400: '#8FAA8F',
          500: '#6C8C6C',
          600: '#547154',
          700: '#425842',
          800: '#2F402F',
          900: '#233023',
          950: '#141D14',
        },
        olive: {
          50: '#F7F8F4',
          100: '#EDF0E7',
          200: '#DCE2D1',
          300: '#C4CFB3',
          400: '#A4B48E',
          500: '#859A6D',
          600: '#667852',
          700: '#4E5C3E',
          800: '#3D4732',
          900: '#2B3324',
        },
        cream: {
          50: '#FDFCF9',
          100: '#FAF8F2',
          200: '#F5F1E6',
          300: '#EDE5D2',
          400: '#DFD2B5',
        },
        brand: {
          dark: '#1E352A',
          forest: '#264436',
          leaf: '#4A7C59',
          mint: '#EBF4EC',
          warm: '#FBF9F4',
          card: '#F2F6F1',
          border: '#DDE7DC',
          tomato: '#E75A47',
          sun: '#F5A623',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(38, 68, 54, 0.06), 0 2px 6px -1px rgba(38, 68, 54, 0.04)',
        'card': '0 8px 30px -4px rgba(38, 68, 54, 0.08), 0 4px 10px -2px rgba(38, 68, 54, 0.03)',
        'float': '0 20px 40px -8px rgba(30, 53, 42, 0.12)',
      }
    },
  },
  plugins: [],
}

