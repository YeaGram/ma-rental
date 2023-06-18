/** * @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      base: {
        100: "#cccdcf",
        200: "#9a9b9f",
        300: "#67686f",
        400: "#35363f",
        500: "#02040f",
        600: "#02030c",
        700: "#010209",
        800: "#010206",
        900: "#000103",
      },
      primary: {
        100: "#faeacc",
        200: "#f5d599",
        300: "#efbf66",
        400: "#eaaa33",
        500: "#e59500",
        600: "#b77700",
        700: "#895900",
        800: "#5c3c00",
        900: "#2e1e00",
      },
      secondary: {
        100: "#faf8f8",
        200: "#f5f0f0",
        300: "#efe9e9",
        400: "#eae1e1",
        500: "#e5dada",
        600: "#b7aeae",
        700: "#898383",
        800: "#5c5757",
        900: "#2e2c2c",
      },
    },
  },
  plugins: [],
};
