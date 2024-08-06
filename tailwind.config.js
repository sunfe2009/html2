/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "dark-grey-60": "#73808d",
        "dark-grey-80": "#101214",
        lightgray: "#cbd7e4",
        gainsboro: "#e6e6e6",
        dimgray: "#6a6a6a",
        lavender: "#dbecff",
        papayawhip: "#ffefd7",
        lightcyan: "#d6f3f3",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "11xs-6": "1.6px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "8xs": "5px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
