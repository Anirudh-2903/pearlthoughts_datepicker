/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C3D5A',  // Navy Blue
        accent: '#38B2AC',   // Cool Teal
        background: '#F3F4F6', // Light Gray
        text: '#1F2937',     // Dark Gray
        hoverAccent: '#81E6D9', // Light Teal for hover
      },
    },
  },
  plugins: [],
};
