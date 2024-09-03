/** @type {import('tailwindcss').Config} */
export default {
  content: ["*", "index.html", "./src/**/*.{html,jsx,js}"],
  theme: {
    extend: { backgroundImage: { "bg-image": "url('to-do.jpeg')" } },
  },
  plugins: [],
};
