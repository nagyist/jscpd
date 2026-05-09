import markup from './languages/markup.js'
import css from './languages/css.js'
import clike from './languages/clike.js'
import javascript from './languages/javascript.js'

import Core, { highlight, loadLanguages } from './core.js'

loadLanguages([markup, css, clike, javascript])

export default Core
export { highlight, loadLanguages }
