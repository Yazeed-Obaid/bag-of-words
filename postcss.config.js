const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('tailwindcss')(tailwindJS),
    cssnano({
      preset: 'default',
    }),
    purgecss({
      content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue'],
      whitelist: ['html', 'body']
    }),
    require('autoprefixer')
  ]
}
