/** @type {import('tailwindcss').Config} */
const config: import("tailwindcss").Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        primary: {
          50: "#FFE6F2",
          100: "#FFCCE6",
          200: "#FF99CC",
          300: "#FF66B3",
          400: "#FF3399",
          500: "#FF1493",
          600: "#E6007A",
          700: "#CC0066",
          800: "#B30052",
          900: "#99003D",
          DEFAULT: "#FF1493",
        },

        secondary: {
          DEFAULT: "#1a1a1a",
          50: "#f5f5f5",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
        },
        accent: {
          DEFAULT: "#ffffff",
          muted: "#f8f8f8",
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero-gradient":
            "linear-gradient(135deg, #000000 0%, #1a0a1a 50%, #000000 100%)",
          "pink-gradient": "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
        },
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        parallax: "parallax 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        parallax: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
};

export default config;
