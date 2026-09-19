/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Stitch named tokens
        "surface": "#10141a",
        "surface-bright": "#353940",
        "surface-dim": "#10141a",
        "surface-variant": "#31353c",
        "surface-container-lowest": "#0a0e14",
        "surface-container-low": "#181c22",
        "surface-container": "#1c2026",
        "surface-container-high": "#262a31",
        "surface-container-highest": "#31353c",
        "on-surface": "#dfe2eb",
        "on-surface-variant": "#c4c5d8",
        "outline": "#8e8fa2",
        "outline-variant": "#444656",
        "primary": "#bac3ff",
        "primary-container": "#3456f6",
        "inverse-primary": "#254aeb",
        "on-primary": "#00208f",
        "on-primary-container": "#e7e8ff",
        "secondary": "#c9c6c1",
        "secondary-container": "#474743",
        "on-secondary": "#31312d",
        "tertiary": "#bac3ff",
        "tertiary-container": "#425cde",
        "on-tertiary": "#00208e",
        "background": "#10141a",
        "on-background": "#dfe2eb",
        
        // Home Slate Palette
        slate: {
          950: '#0c1220',
          900: '#131b2e',
          850: '#182239',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50: '#f8fafc',
        },
        
        // Periwinkle Accent Palette
        periwinkle: {
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          accent: '#4f70f8',
          glow: '#6380ec',
          muted: '#3b52b5',
        },
        
        // Warm Paper Palette
        paper: {
          DEFAULT: '#f6f5f0',
          light: '#f8f7f4',
          card: '#ffffff',
          subtle: '#ebe8df',
          border: '#dfdcce',
          text: '#191f2d',
          muted: '#525b6e',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        editorial: ['Newsreader', 'Georgia', 'serif'],
      },
      spacing: {
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        'gutter': '1.5rem',
        'gutter-desktop': '2rem',
        'margin': '1.25rem',
        'margin-tablet': '2rem',
        'margin-desktop': '4rem',
      },
      borderRadius: {
        'xs': '0.125rem',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
