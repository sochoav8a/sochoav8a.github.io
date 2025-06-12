/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        terminal: {
          bg: '#0a0a0a',
          fg: '#ffffff',
          gray: '#808080',
          accent: '#ffffff',
          border: '#333333',
          hover: '#1a1a1a',
        },
        cyber: {
          blue: '#00d4ff',
          cyan: '#00ffff',
          dark: '#0a0a0a',
          gray: '#2a2a2a',
          light: '#f8f8f8',
        }
      },
      animation: {
        'blink': 'blink 1s infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00d4ff' },
          '100%': { boxShadow: '0 0 20px #00d4ff, 0 0 30px #00d4ff' },
        },
      },
      borderRadius: {
        'hypr': '6px',
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 