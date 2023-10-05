/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.svelte", "./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "5rem",
        xl: "10rem",
        "2xl": "12rem",
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
