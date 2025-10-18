import { ref } from 'vue'
import { Dark } from 'quasar'

const isDark = ref(Dark.isActive)

export function useTheme() {
  const toggleTheme = () => {
    Dark.toggle()
    isDark.value = Dark.isActive
  }

  return {
    isDark,
    toggleTheme
  }
}
