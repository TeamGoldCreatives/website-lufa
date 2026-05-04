import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // DM Sans: clean, rounded, modern — matches the Framer original
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Exact palette from screenshots
        text: {
          primary: '#111111',
          secondary: '#6B7280',
          muted: '#9CA3AF',
          label: '#AAAAAA',
        },
        border: {
          DEFAULT: '#E8E8E8',
          light: '#F0F0F0',
        },
        pill: {
          bg: '#FFFFFF',
          border: '#D9D9D9',
        },
        accent: {
          blue: '#3B82F6',
          star: '#F59E0B',
        },
      },
      borderRadius: {
        card: '12px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.04), 0 1px 8px rgba(0,0,0,0.03)',
        'card-hover': '0 2px 4px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)',
        dock: '0 2px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
      },
      fontSize: {
        label: ['10.5px', { letterSpacing: '0.08em', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}

export default config
