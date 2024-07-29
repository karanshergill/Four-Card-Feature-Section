/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        'Primary-Red': 'hsl(0, 78%, 62%)',
        'Primary-Cyan': 'hsl(180, 62%, 55%)',
        'Primary-Orange': 'hsl(34, 97%, 64%)',
        'Primary-Blue': 'hsl(212, 86%, 64%)',
        'Neutral-Very-Dark-Blue': 'hsl(234, 12%, 34%)',
        'Neutral-Grayish-Blue': 'hsl(229, 6%, 66%)',
        'Neutral-Very-Light-Gray':'hsl(0, 0%, 98%)'
      },
      fontFamily: {
        'Poppins' : ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

