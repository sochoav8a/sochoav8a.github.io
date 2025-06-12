/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brutal: {
          yellow: '#ffff00',
          red: '#ff0000',
          blue: '#0000ff',
          green: '#00ff00',
          orange: '#ff6600',
          purple: '#6600ff',
        },
        mono: {
          0: '#ffffff',
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e0e0e0',
          800: '#202020',
          900: '#101010',
          1000: '#000000',
        },
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
      fontSize: {
        'mega': ['8rem', { lineHeight: '0.8' }],
        'ultra': ['6rem', { lineHeight: '0.85' }],
        'huge': ['4rem', { lineHeight: '0.9' }],
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #000000',
        'brutal-lg': '12px 12px 0px 0px #000000',
        'brutal-color': '8px 8px 0px 0px #ffff00',
        'brutal-hover': '4px 4px 0px 0px #000000',
      },
      animation: {
        'shake': 'shake 0.5s ease-in-out',
        'slide-brutal': 'slideBrutal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'blink': 'blink 1s infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-2deg)' },
          '75%': { transform: 'rotate(2deg)' },
        },
        slideBrutal: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
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
        '3': '3px',
        '4': '4px',
        '6': '6px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 