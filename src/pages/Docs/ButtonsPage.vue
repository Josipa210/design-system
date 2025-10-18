<template>
  <q-page padding>
    <div class="column q-gutter-md">
      <h4>Buttons</h4>
      <p>All button variants:</p>

      <!-- Standard Buttons -->
      <div class="row q-gutter-md">
        <ds-button label="Primary Action" color="primary" />
        <ds-button label="Secondary Action" color="secondary" />
        <ds-button label="Error" color="negative" />
      </div>

      <!-- Outline Buttons -->
      <p>Outline buttons:</p>
      <div class="row q-gutter-md">
        <ds-button label="Primary Outline" color="primary" outline />
        <ds-button label="Secondary Outline" color="secondary" outline />
        <ds-button label="Error Outline" color="negative" outline />
      </div>

      <!-- Disabled Buttons -->
      <p>Disabled buttons:</p>
      <div class="row q-gutter-md">
        <ds-button label="Primary Disabled" color="primary" :disabled="true" />
        <ds-button label="Secondary Disabled" color="secondary" :disabled="true" />
        <ds-button label="Error Disabled" color="negative" :disabled="true" />
      </div>

      <!-- Rounded Buttons -->
      <p>Rounded buttons:</p>
      <div class="row q-gutter-md">
        <ds-button label="Primary Rounded" color="primary" rounded />
        <ds-button label="Secondary Rounded" color="secondary" rounded />
        <ds-button label="Error Rounded" color="negative" rounded />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import DsButton from 'src/components/DsButton.vue'
</script>
