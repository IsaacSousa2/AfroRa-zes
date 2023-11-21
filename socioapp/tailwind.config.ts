import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {

        'white-facebook': "#F0F2F5",
        'gray-text': '#CCCCCC',
        'gray-button' : '#0f172a',
        'green-mark': "#93E850",
        'black-bg': "#1F1F1F",
        'black-text': "#777777",
        'black-2': "#252525",
      },
      screens: {
        "2xl": { "max" : "1536px" },
        "xl": { "max" : "1290px" },
        "md": { "max" : "1100px" },
        "lg": { "max" : "1024px" },
        "sm": { "max" : "670px"},
      },
    },
  },
  plugins: [],
}
export default config
