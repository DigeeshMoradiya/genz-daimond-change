/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1460px',
      '2xl': '1536px',
      '3xl': '1836px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'login': 'rgba(0, 0, 0, 0.16) 0px 24px 48px'
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/bg-banner.jpg')",
        "latest-1": "url('/assets/latest/image.png')",
        "latest-2": "url('/assets/latest/image-1.png')",
        "latest-3": "url('/assets/latest/image-2.png')"
      }
    },
  },
  plugins: [
  ],
};
