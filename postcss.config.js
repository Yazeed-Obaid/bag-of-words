const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

// PugreCSS extract for TailwindCSS un-used classes
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

/*
 * PostCSS plugins:
 * The current pipeline contains the following steps:
 * - First we require TailWindCSS.
 * - Next PurgeCSS is used to get rid of un-used TailWindCSS 
 *   classes by using an extractor with .vue files.
 * - Next cssnano is used to minify the resulting css.
 * - Finally the auto-prefixer plugin is use for browser 
 *   compatapility.
 */
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
