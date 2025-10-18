<template>
  <q-badge
    :label="label"
    :color="color"
    class="ds-badge"
  />
</template>

<script setup>
defineProps({
  label: String,
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<style lang="scss" scoped>
.ds-badge {
  font-family: $font-family-base;
  font-weight: $font-weight-medium;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: $radius-sm;
}
</style>
