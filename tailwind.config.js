/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": {
          "50": "#434343",
          "100": "#393939",
          "200": "#2f2f2f",
          "300": "#252525",
          "400": "#1b1b1b",
          "500": "#111111",
          "600": "#070707",
          "700": "#000000",
          "800": "#000000",
          "900": "#000000"
        },
        primary: {
          "50":"#eff6ff",
          "100":"#dbeafe",
          "200":"#bfdbfe",
          "300":"#93c5fd",
          "400":"#60a5fa",
          "500":"#3b82f6",
          "600":"#2563eb",
          "700":"#1d4ed8",
          "800":"#1e40af",
          "900":"#1e3a8a",
          "950":"#172554"
        },
        'boxColor': 'rgba(255, 255, 255, 0.85)'
      },
      width: {
        '128' : '32rem'
      },
      maxWidth: {
        '1/2': '50%',
      },
      height: {
        '104' : '26rem',
        '112' : '28rem',
        '120' : "30rem"
      }
    },
    keyframes: {
      pulse: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.5' },
      },
    },
    animation: {
      pulse: 'pulse 3s infinite',
    },
  },
  plugins: [],
}