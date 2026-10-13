/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#19B5A5',
          dark: '#138E82',
          light: '#35C2B4',
          subtle: '#D7F5F0',
        },
        yellow: {
          DEFAULT: '#FFD23F',
          warm: '#F4C425',
          light: '#FFF0B3',
        },
        navy: {
          DEFAULT: '#1F2A44',
          light: '#2C3A5E',
          soft: '#3B4E7D',
          muted: '#637299',
        },
        mint: {
          DEFAULT: '#E6FAF5',
          light: '#F2FCFA',
          border: '#C3F1E7',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        '2xl': '16px',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(31, 42, 68, 0.06), 0 2px 6px -1px rgba(31, 42, 68, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(31, 42, 68, 0.08), 0 4px 12px -2px rgba(31, 42, 68, 0.04)',
        'soft-xl': '0 20px 40px -6px rgba(31, 42, 68, 0.12), 0 8px 16px -4px rgba(31, 42, 68, 0.06)',
      },
    },
  },
  plugins: [],
};
