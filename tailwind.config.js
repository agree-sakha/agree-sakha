/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        lg: '1.75rem',
        xl: '2rem',
      },
    },
    extend: {
      colors: {
        primary: {
          700: '#1F6A3A',
          500: '#2F8F4E',
          100: '#E6F4EA',
        },
        accent: {
          500: '#CFEBD8',
        },
        neutral: {
          900: '#1A1D1A',
          700: '#3D443F',
          100: '#F6F7F5',
        },
        info: {
          500: '#0F766E',
        },
        success: {
          500: '#1E7A3B',
        },
        error: {
          500: '#B42318',
        },
      },
      borderRadius: {
        button: '12px',
        card: '16px',
      },
      boxShadow: {
        card: '0 10px 30px -16px rgba(31, 106, 58, 0.30)',
        elevated: '0 18px 42px -24px rgba(26, 29, 26, 0.40)',
      },
      ringColor: {
        brand: '#2F8F4E',
      },
    },
  },
  plugins: [],
}
