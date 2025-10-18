<template>
    <q-page padding>
  <div class="column q-gutter-md">
    <h4>Inputs</h4>
    <p>Reusable input components:</p>
    <div class="column q-gutter-md" style="max-width: 400px;">
      <ds-input label="Name" placeholder="Enter your name" />
      <ds-input label="Email" placeholder="Enter your email" />
      <ds-input label="Password" type="password" placeholder="Enter password" />
    </div>
  </div>
  </q-page>
</template>

<script setup>
import DsInput from 'src/components/DsInput.vue';
</script>
