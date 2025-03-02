/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,php}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          green:{
            50:'#EEEFEE',
            75:'#B8BFB7',
            100:'#9BA49A',
            200:'#6F7D6E',
            300:'#526250',
            400:'#394538',
            500:'#323C31',
            600:'#113528',
          },      
          yellow:{
            50:'#fef9ed',
            75:'#f3d2af',
            200:'#f9bf4b',
            300:'#FFC83B',
          },
          neutral:{
            0:'#FFFFFF',
            10:'#FAFAFA',
            20:'#F5F5F5',
            30:'#EBECEC',
            40:'#DFDFE0',
            50:'#C2C2C3',
            60:'#B3B4B5',
            70:'#A6A8A9',
            80:'#98999B',
            90:'#898A8C',
            100:'#7A7C7E',
            200:'#5D5F61',
            300:'#5D5F61',
            400:'#505255',
            500:'#424447',
            600:'#35383B',
            700:'#24272A',
            800:'#15181C',
            900:'#090C10' 
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
  