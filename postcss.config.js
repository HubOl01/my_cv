const tailwindcss = require("tailwindcss");
module.exports = {
  // plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  tailwindcss: {},
  autoprefixer: {},
  safelist: [
    "text-[rgba(0,0,0,0.6)]",
    "dark:text-[rgba(255,255,255,0.6)]",
    "text-black/60",
    "dark:text-white/60",
  ],
};

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };
