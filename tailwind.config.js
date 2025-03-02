/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,php}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          green:{
            50:'#f4f8eb',
            75:'#d0e3af',
            100:'#d0e3af',
            200:'#a0c75c',
            300:'#8cbb3b',
            400:'#628329',
            500:'#557224',
            600:'#113528',
          },      
          yellow:{
            50:'#fef9ed',
            75:'#f3d2af',
            200:'#f9bf4b',
            300:'#e1913b',
          },
          neutral:{
            0:'#ffffff',
            10:'#fafbfb',
            20:'#f6f7f6',
            30:'#edeeee',
            40:'#e1e4e3',
            50:'#c6cac9',
            60:'#b9bebc',
            70:'#adb3b1',
            80:'#a0a6a4',
            90:'#929a97',
            100:'#848d8a',
            200:'#77807d',
            300:'#697470',
            400:'#5e6965',
            500:'#505d58',
            600:'#45524d',
            700:'#35433e',
            800:'#273731',
            900:'#1c2c26' 
          }
        },
        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          xxl: '1400px',
          '3xl': '1600px',
          '4xl': '1800px'
        },
        animation: {
          'zoomRotateGlow': 'zoomRotateGlow 5s ease-in-out infinite',
        },
        keyframes: {
          zoomRotateGlow: {
            '0%, 100%': { transform: 'scale(1) rotate(0deg)', filter: 'brightness(100%)' },
            '50%': { transform: 'scale(1.2) rotate(5deg)', filter: 'brightness(120%)' }
          }
        }
      }
    }
  }
  