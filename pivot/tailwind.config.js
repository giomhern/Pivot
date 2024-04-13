/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
            primary: "#21d760",
            "primary-content": "#000000",
            "primary-dark": "#1aab4c",
            "primary-light": "#48e37e",

            secondary: "#213dd7",
            "secondary-content": "#f9fafe",
            "secondary-dark": "#1a30ab",
            "secondary-light": "#4860e3",

            background: "#1a1a1a",
            foreground: "#262626",
            border: "#404040",

            copy: "#fbfbfb",
            "copy-light": "#d9d9d9",
            "copy-lighter": "#a6a6a6",

            success: "#21d721",
            warning: "#d7d721",
            error: "#d72121",

            "success-content": "#000000",
            "warning-content": "#000000",
            "error-content": "#fef9f9"
        },
    },
  },
  plugins: [],
}

