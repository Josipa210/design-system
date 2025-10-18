import { boot } from 'quasar/wrappers'
import { Dark } from 'quasar'

export default boot(() => {
  // Initialize the theme
  Dark.set(false) // default light theme
})