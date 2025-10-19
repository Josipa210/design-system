<template>
  <q-badge
 
    :color="color"
    :size="sizeMap[size]"
    :rounded="rounded"
    :outline="variant === 'outlined'"
    class="ds-badge flex items-center gap-1"
  >
    <!-- Optional prepend icon -->
    <q-icon v-if="prependIcon" :name="prependIcon" size="xs" class="q-mx-sm" />
    
    <span class="q-mx-sm">{{ label }}</span>
    
    <!-- Optional append icon -->
    <q-icon v-if="appendIcon" :name="appendIcon" size="xs" class="q-mx-sm" />
  </q-badge>
</template>

<script setup>
const { label, color, size, variant, rounded, prependIcon, appendIcon } = defineProps({
  label: { type: String, required: true },
  color: { type: String, default: 'primary' },
  size: { type: String, default: 'medium' }, // small / medium / large
  variant: { type: String, default: 'filled' }, // filled / outlined / text
  rounded: { type: Boolean, default: true },
  prependIcon: { type: String, default: '' },
  appendIcon: { type: String, default: '' },
})

// Map friendly sizes to Quasar sizes
const sizeMap = {
  small: 'sm',
  medium: 'md',
  large: 'lg'
}
</script>


<style lang="scss" scoped>
.ds-badge {
  font-family: $font-family-base;
  font-weight: $font-weight-medium;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  }

  .q-icon {
    vertical-align: middle;
  }
}
</style>
