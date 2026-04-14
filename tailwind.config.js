/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fcf9f7",
        surface: "#fcf9f7",
        primary: "#3a000b",
        primary_container: "#5a0f1c",
        on_primary: "#ffffff",
        on_surface: "#1b1c1b",
        surface_container_low: "#f6f3f1",
        surface_container_lowest: "#ffffff",
        surface_container_high: "#eae8e6",
        surface_container_highest: "#e5e2e0",
        on_surface_variant: "#554243",
        outline_variant: "#dbc0c1",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        ambient: "0 20px 80px rgba(85, 66, 67, 0.08)",
      },
    },
  },
  plugins: [],
}
