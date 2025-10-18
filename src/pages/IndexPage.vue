<template>
  <q-page padding>
    <div class="column items-center q-gutter-md">
      <h4>🎨 Quasar Design System</h4>
      <p>Reusable components, tokens, and theming.</p>

      <ds-button label="Primary Action" color="primary" />
      <ds-button label="Secondary Action" color="secondary" />
      <ds-button label="Error" color="negative" />

      <q-toggle
        v-model="isDark"
        label="Dark mode"
        color="primary"
        @update:model-value="toggleTheme"
      />
    </div>
  </q-page>
</template>

<script setup>
import { useTheme } from 'src/plugins/theme'
const { isDark, toggleTheme } = useTheme()
</script>
