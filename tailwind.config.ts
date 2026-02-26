import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(2, 6, 23, 0.08)",
        softer: "0 12px 30px rgba(2, 6, 23, 0.06)",
        ring: "0 0 0 6px rgba(16, 185, 129, 0.18)"
      }
    }
  },
  plugins: []
} satisfies Config;