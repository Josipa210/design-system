<template>
  <q-page padding>
 

    <!-- Tabs -->
    <q-tabs v-model="tab" dense align="left" indicator-color="primary" class="q-mb-md"  @update:model-value="onTabChange">
      <q-tab name="docs-buttons" label="Buttons" :to="{ name: 'docs-buttons' }" />
      <q-tab name="docs-cards" label="Cards" :to="{ name: 'docs-cards' }" />
      <q-tab name="docs-inputs" label="Inputs" :to="{ name: 'docs-inputs' }" />
      <q-tab name="docs-badges" label="Badges" :to="{ name: 'docs-badges' }" />
    <q-toggle v-model="isDark" label="Dark Mode" @update:model-value="toggleTheme" dense />
    </q-tabs>

    <!-- Child content -->
    <router-view />
  </q-page>
</template>

<script setup>
import { ref, watch } from 'vue'

import { Dark } from 'quasar'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const tab = ref(route.name)

watch(() => route.name, val => { tab.value = val })

const isDark = ref(Dark.isActive)
const toggleTheme = val => Dark.set(val)
watch(isDark, val => Dark.set(val))

function onTabChange(name) {
  tab.value = name
  router.push({ name }) // navigate to route by name
}
</script>
