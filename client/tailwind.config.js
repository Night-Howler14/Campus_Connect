/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-background": "url('/public/Images/bg_login.png')",
      },
      backgroundSize: {
        cover: "cover",
      },
      backgroundRepeat: {
        "no-repeat": "no-repeat",
      },
      colors: {
        primary: "#EFF0EC",
        b: "#3f4726",
        c: "#d4ddb7",
        d: "#888f70",
        h: "#464d2e",
        e: "#89e200",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
