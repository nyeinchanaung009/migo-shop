/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        // accent : '#ff3131',
        accent : '#3582c2',
        accent2 : '#30343555',
        
        bg1 : '#e5e7eb',
        bg2 : '#b4b8bf75',

        tpri : '#334155',
        tsec : '#5b636f',

        bpri : '#1e293b33',
      }
    },
  },
  plugins: [],
}