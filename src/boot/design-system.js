import { boot } from 'quasar/wrappers'
import DesignSystem from 'src/plugins/design-system.js'

export default boot(({ app }) => {
  app.use(DesignSystem)
})
