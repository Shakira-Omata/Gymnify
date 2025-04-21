/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#5E72E4',
          secondary: '#11CDEF',
          success: '#2DCE89',
          warning: '#FB6340',
          danger: '#F5365C',
          dark: {
            background: '#121212',
            card: '#1E1E1E',
            cardAlt: '#252525',
            text: '#FFFFFF',
            textSecondary: '#A0A0A0',
            border: '#333333',
          },
        },
      },
    },
    plugins: [],
    }