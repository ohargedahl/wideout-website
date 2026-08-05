/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "!./node_modules/**"],
  theme: {
    extend: {
      colors: {
        // Each page sets --accent / --accent-dark on :root, so one built stylesheet
        // serves every app's colour. Space-separated RGB channels rather than hex, so
        // the `<alpha-value>` slot works and utilities like `bg-accent/5` still resolve.
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-dark": "rgb(var(--accent-dark) / <alpha-value>)",

        // Fixed, app-specific colours that were declared in the old per-page configs.
        // Unlike the accents these belong to exactly one app each, so they stay literal
        // rather than becoming variables. `sage` is currently unused but is kept so the
        // shared config is a faithful union of what the pages used to declare.
        bg: "#0a0a0a", // oskchat's dark page background
        sage: "#7a9471", // grunda
      },
    },
  },
  plugins: [],
};
