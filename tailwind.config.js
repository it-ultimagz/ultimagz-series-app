/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.svelte", "./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "5rem",
        xl: "8rem",
        "2xl": "10rem",
      },
    },
    extend: {
      fontFamily: {
        mona: ["Mona Sans", "sans"],
      },
    },
  },
  plugins: [],
};
