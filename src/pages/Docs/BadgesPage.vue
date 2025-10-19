<template>
  <q-page padding>
    <div class="column q-gutter-md">

      <h4 class="q-mb-none">Badges</h4>
      <p>Badge examples with different colors, sizes, and variants:</p>

      <!-- Colors -->
      <div class="row q-gutter-md flex-wrap">
        <ds-badge label="Primary" color="primary" />
        <ds-badge label="Secondary" color="secondary" />
        <ds-badge label="Positive" color="positive" />
        <ds-badge label="Negative" color="negative" />
        <ds-badge label="Info" color="info" />
        <ds-badge label="Warning" color="warning" />
      </div>

      <!-- Sizes -->
      <h6 class="q-mt-md">Sizes</h6>
      <div class="row q-gutter-md flex-wrap">
        <ds-badge label="Small" color="primary" size="small" />
        <ds-badge label="Medium" color="secondary" size="medium" />
        <ds-badge label="Large" color="positive" size="large" />
      </div>

      <!-- Variants -->
      <h6 class="q-mt-md">Variants</h6>
      <div class="row q-gutter-md flex-wrap">
        <ds-badge label="Filled" color="primary" variant="filled" />
        <ds-badge label="Outlined" color="secondary" variant="outlined" />
        <ds-badge label="Text" color="positive" variant="text" />
      </div>

      <!-- Icons -->
      <h6 class="q-mt-md">With Icons</h6>
      <div class="row q-gutter-md flex-wrap">
        <ds-badge label="New" color="primary" prepend-icon="star" />
        <ds-badge label="Featured" color="secondary" append-icon="check" />
        <ds-badge label="Hot" color="negative" prepend-icon="flash_on" append-icon="whatshot" />
      </div>

     

    </div>
  </q-page>
</template>

<script setup>
import DsBadge from 'src/components/DsBadge.vue';
</script>

<style scoped>
h6 {
  margin-bottom: 0.25rem;
}
</style>
