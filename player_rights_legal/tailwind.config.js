module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Legal authority foundation
        primary: {
          DEFAULT: "#1E3A5F", // navy-900
          50: "#F0F4F8", // navy-50
          100: "#D9E2EC", // navy-100
          200: "#BCCCDC", // navy-200
          300: "#9FB3C8", // navy-300
          400: "#829AB1", // navy-400
          500: "#627D98", // navy-500
          600: "#486581", // navy-600
          700: "#334E68", // navy-700
          800: "#243B53", // navy-800
          900: "#1E3A5F", // navy-900
        },
        // Secondary Colors - Premium service indicator
        secondary: {
          DEFAULT: "#C9A961", // gold-500
          50: "#FEFCF7", // gold-50
          100: "#FDF8E8", // gold-100
          200: "#FBF0C9", // gold-200
          300: "#F8E6A0", // gold-300
          400: "#F4DC77", // gold-400
          500: "#C9A961", // gold-500
          600: "#B8954A", // gold-600
          700: "#A08139", // gold-700
          800: "#876D2E", // gold-800
          900: "#6E5A25", // gold-900
        },
        // Accent Colors - Justice and action
        accent: {
          DEFAULT: "#2563EB", // blue-600
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
        },
        // Background Colors
        background: "#FAFBFC", // slate-50
        surface: "#F1F5F9", // slate-100
        // Text Colors
        text: {
          primary: "#1F2937", // gray-800
          secondary: "#6B7280", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#059669", // emerald-600
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#D97706", // amber-600
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#DC2626", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(30, 58, 95, 0.1)',
        'card': '0 2px 8px rgba(30, 58, 95, 0.08)',
        'modal': '0 8px 32px rgba(30, 58, 95, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}