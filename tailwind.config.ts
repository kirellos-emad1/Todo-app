import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme:{
    extend:{
      fontFamily:{
        'montserrat': ['Montserrat'],
      }
    }
  },
  plugins:[]
}
export default config