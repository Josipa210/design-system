<template>
  <q-btn
    :label="label"
    :color="color"
    :unelevated="unelevated"
    :rounded="rounded"
    class="ds-btn"
  />
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'primary'
  },
  unelevated: {
    type: Boolean,
    default: true
  },
  rounded: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss" scoped>
.ds-btn {
  font-family: $font-family-base;
  font-weight: $font-weight-medium;
  text-transform: none;
  letter-spacing: 0.25px;
  box-shadow: $elevation-1;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: $elevation-2;
  }
}
</style>
