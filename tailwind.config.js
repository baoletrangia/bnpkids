const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#ffafcc',
        'light-pink': '#ffc8dd',
        'blue': '#a2d2ff',
        'light-blue': '#bde0fe',
        'purple': 'cdb4db'
      }
    },
  },
  plugins: [],
};
