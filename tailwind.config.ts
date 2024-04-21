import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        heading: '2.625rem',
        subheading: '1.625rem',
      },
      borderRadius: {
        '4xl': '32px',
      },
    },
  },
  plugins: [],
};
export default config;
