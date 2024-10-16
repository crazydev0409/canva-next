import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'rotate-along-line': 'rotateAlongLine 3s linear infinite', // custom animation
      },
      backgroundImage: {
        'left-gradient': 'linear-gradient(to left, hsla(0,0%,100%,0), #fff)',
        'right-gradient': 'linear-gradient(to right, hsla(0,0%,100%,0), #fff)',
        'top-gradient': 'linear-gradient(to bottom, hsla(0, 0%, 100%, 0), #fff), linear-gradient(to left, #ebe0fc 45%, #ddeaf9)'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        even: '0 0 10px rgba(0, 0, 0, 0.12)',
        'right-lg': '10px 0px 15px -3px rgba(0, 0, 0, 0.1)',
        'bottom-lg': '0px 10px 10px -3px rgba(0, 0, 0, 0.1)',
      },
      minHeight: {
        mobile: 'calc(-56px + 100dvh)',
        tablet: 'calc(-72px + 100dvh)'
      },
      height: {
        custom: 'calc(-100px + 100dvh)'
      },
      keyframes: {
        rotateAlongLine: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      screens: {
        ssm: "600px",
        mmd: "900px",
      },
      // Optionally extend transform-origin presets for more granular control
      transformOrigin: {
        'top-center': '50% 0%',  // this will rotate the icon along the top of its Y-axis
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
