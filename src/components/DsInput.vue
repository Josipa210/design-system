<template>
  <q-input
    v-model="modelValue"
    :label="label"
    :type="type"
    outlined
    dense
    class="ds-input"
  />
</template>

<script setup>
const modelValue = defineModel()
defineProps({
  label: String,
  type: {
    type: String,
    default: 'text'
  }
})
</script>

<style lang="scss" scoped>
.ds-input {
  font-family: $font-family-base;
  color: $on-surface;
  margin-bottom: $spacing-md;

  .q-field__control {
    border-radius: $radius-md;
  }
}
</style>
