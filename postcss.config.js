const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

module.exports = {
  plugins: [
    require('tailwindcss')(tailwindJS),
    purgecss({
      content: [
        './pages/**/*.vue',
        './layouts/**/*.vue',
        './components/**/*.vue'
      ],
      whitelist: ['html', 'body'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['vue']
        }
      ]
    }),
    cssnano({
      preset: 'default'
    }),
    require('autoprefixer')
  ]
}
