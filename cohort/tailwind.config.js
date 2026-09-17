/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Ground — the near-black the whole product sits on.
        ink: {
          900: '#0a0908', // page background
          800: '#12100f', // raised panels / avatar ring
          700: '#111010', // donut hole
        },
        // Type on the dark ground.
        bone: '#f3f2f2',
        // Accent ramp (Play-red).
        flame: {
          100: '#ffc4b8',
          200: '#ff8a75',
          300: '#ff7259',
          400: '#ff6247',
          500: '#ff563c',
          600: '#ec3013',
          700: '#dd2b0f',
          800: '#ae1800',
          900: '#7c1405',
        },
        // Semantic: a verified day, a late day, a missed day.
        mint: '#a8e6c4',
        peach: '#ffb4a3',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: {
        shell: '1240px', // every section shares one measure
      },
      borderRadius: {
        xl2: '14px',
        '2xl2': '18px',
        '3xl2': '22px',
        '4xl2': '26px',
      },
      boxShadow: {
        glass: '0 1px 0 rgba(255,255,255,.16) inset, 0 20px 44px rgba(0,0,0,.4)',
        'glass-lg': '0 1px 0 rgba(255,255,255,.2) inset, 0 30px 70px rgba(0,0,0,.55)',
        flame: '0 10px 34px rgba(236,48,19,.45), 0 1px 0 rgba(255,255,255,.3) inset',
        'flame-sm': '0 6px 22px rgba(236,48,19,.42), 0 1px 0 rgba(255,255,255,.32) inset',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sheen: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        page: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        sheen: 'sheen 6s ease-in-out infinite',
        page: 'page .2s ease both',
      },
    },
  },
  plugins: [],
}
