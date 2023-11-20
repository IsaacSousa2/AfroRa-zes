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
        'green-mark': "#93E850",
        'black-bg': "#1F1F1F",
        'black-text': "#777777",
        'black-2': "#252525",
      },
      screens: {

        '2xl': '1536px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '760px',
        'sm': '600px',
      },
    },
  },
  plugins: [],
}
export default config
