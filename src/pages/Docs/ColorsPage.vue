<template>
    <q-page padding>
  <div class="column q-gutter-md">
    <h4>Color Tokens</h4>
    <div v-for="color in colors" :key="color" 
         :style="{ backgroundColor: color, padding: '1rem', margin: '0.5rem', color: '#fff', borderRadius: '4px' }">
      {{ color }}
    </div>
  </div>
  </q-page>
</template>

<script setup>
const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)', 'var(--surface)', 'var(--background)'];
</script>
