<template>
  <q-page padding>
    <div class="column q-gutter-md">
      <h4 class="q-mb-none">Color Tokens</h4>
      <p>Visual representation of your color palette:</p>

      <div class="row q-gutter-md q-mt-md flex-wrap">
        <div v-for="(hex, name) in colors" :key="name" class="color-card column items-center justify-center"
          :style="{ backgroundColor: hex, color: getTextColor(hex) }">
          <div class="text-bold">{{ name }}</div>
          <div>{{ hex }}</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const colors = {
  primary: '#4c7f7a',
  secondary: '#5a7e96',
  accent: '#a837a3',
  dark: '#202c2b',
  positive: '#3bad4a',
  negative: '#ad313b',
  info: '#5a5f96',
  warning: '#cf971d'
}

// Automatically choose black or white text based on background brightness
function getTextColor(hex) {
  if (!hex) return '#000'
  const c = hex.substring(1, 7) // strip #
  const rgb = parseInt(c, 16) // convert to integer
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = rgb & 0xff
  // luminance formula
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b
  return luminance > 186 ? '#000' : '#fff'
}
</script>

<style scoped>
.color-card {
  width: 120px;
  height: 80px;
  border-radius: 8px;
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.color-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.text-bold {
  font-weight: 600;
}
</style>
