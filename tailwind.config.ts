import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      red: '#F82C2C',
      caterpillar: '#4D5254',
      lightgray: '#d3d3d3',
      acquamarina: '#5BB59A',
      'mainly-blue': '#2C7EF8',
      'kodama-white': '#EDF3FD',
      'white-gray': '#FAFAFA',
      'american-silver': '#CFCFCF',
      'ford-gray': '#969696',
      'sargasso-sea': '#37465A',
      'caput-mortuum': '#59AE43',
      valhalla: '#252F3D'
    }
  },
  plugins: []
}
export default config
