/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{html,}", "./layout/**/*.{ejs,}"],
  theme: {
    container:{ 
      center: true,
      padding:"12px"
    },
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '992px', // 修改這裡的值
        'xl': '1200px', // 修改這裡的值
        '2xl': '1320px', // 修改這裡的值
      },
      spacing: {
        '15': '60px',
      },
      colors: {
        body: '#f3f1e5', // 自訂預設背景顏色
        "body": {
          DEFAULT:"#f3f1e5",
        },
        "primary": {
          DEFAULT:"#030303",
        },
        "secondary": {
          DEFAULT:"#FBFF22"
        },
        "important": {
          DEFAULT:"#73451D"
        },
        "danger": {
          DEFAULT:"#C96464"
        },
        "white": {
          DEFAULT:"#ffffff"
        },
        "hover": {
          DEFAULT:"#9C9E18"
        }
      },
      fontFamily: {
        'yeseva': ['Yeseva One',],
        'sans': ['Noto Sans TC',],
        'serif': ['Noto Serif TC',],
      },
      lineHeight: {
        '15': '3.75rem',
        'small-tight': '1.15',
      },
      fontSize: {
        64: ['64px', '74px'],
        32: ['32px', '46px'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      rotate: {
        '4': '4deg',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
