import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        button: '0 2px 4px rgba(0, 0, 0, 0.25)',
        linkStar: '0 4px 4px rgba(0, 0, 0, 0.15)',
      },
      fontSize: {
        heading: '2.625rem',
        subheading: '1.625rem',
      },
      borderRadius: {
        '4xl': '32px',
      },
      colors: {
        blackish: '#0f0f0f',
        primary: '#98d183',
        disabledFg: '#666666',
        disabledBg: '#d9d9d9',
      },
    },
  },
  plugins: [],
};
export default config;
