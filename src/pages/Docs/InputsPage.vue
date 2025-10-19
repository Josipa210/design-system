<template>
  <q-page padding>
    <div class="column q-gutter-md">
      <h4 class="q-mb-none">Inputs</h4>
      <p>Reusable DsInput components with all types:</p>

      <div class="row " style="">
<div class="col-12 col-md-6">
        <!-- Text -->
        <ds-input label="Name" placeholder="Enter your name" type="text" prepend-icon="person" />
</div>
<div class="col-12 col-md-6">
        <!-- Email -->
        <ds-input label="Email" placeholder="Enter your email" type="email" prepend-icon="email" />
</div>
<div class="col-12 col-md-6">
        <!-- Password -->
        <ds-input label="Password" placeholder="Enter password" type="password" prepend-icon="lock" />
</div>
<div class="col-12 col-md-6">
        <!-- Number -->
        <ds-input label="Age" placeholder="Enter your age" type="number" prepend-icon="pin" />
</div>
<div class="col-12 col-md-6">
        <!-- Search -->
        <ds-input label="Search" placeholder="Search something..." type="search" prepend-icon="search" />
</div>
<div class="col-12 col-md-6">
        <!-- Textarea -->
        <ds-input label="Bio" placeholder="Tell us about yourself" type="textarea" />
</div>
<div class="col-12 col-md-6">
        <!-- Select -->
        <ds-input
          label="Favorite Fruit"
          type="select"
          :options="[
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' },
            { label: 'Cherry', value: 'cherry' }
          ]"
        />
</div>
<div class="col-12 col-md-6">
        <!-- Date -->
        <ds-input label="Birthday" type="date" placeholder="YYYY-MM-DD" />
</div>
<div class="col-12 col-md-6">
        <!-- Time -->
        <ds-input label="Meeting Time" type="time" placeholder="HH:MM" />
</div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import DsInput from 'src/components/DsInput.vue';
</script>

<style scoped>
h4 {
  margin-bottom: 0;
}
</style>
