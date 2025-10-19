<template>
  <div>
    <!-- Standard inputs: text, password, email, number, search -->
    <q-input
      v-if="!isPicker && type !== 'textarea' && type !== 'select'"
      v-model="modelValue"
      :label="label"
      :type="currentType"
      outlined
      dense
      clearable
      class="ds-input premium"
      :rules="rules"
      :class="typeClass"
    >
      <template v-if="prependIcon" v-slot:prepend>
        <q-icon :name="prependIcon" class="icon-prepend" />
      </template>

      <template v-if="appendIcon || type === 'password'" v-slot:append>
        <q-icon
          v-if="type === 'password'"
          :name="showPassword ? 'visibility_off' : 'visibility'"
          class="icon-append cursor-pointer"
          @click="togglePassword"
        />
        <q-icon
          v-else
          :name="appendIcon"
          class="icon-append cursor-pointer"
          @click="onAppendClick"
        />
      </template>
    </q-input>

    <!-- Textarea -->
    <q-input
      v-if="type === 'textarea'"
      v-model="modelValue"
      :label="label"
      outlined
      dense
      type="textarea"
      class="ds-input premium"
      :rules="rules"
      :autogrow="true"
    />

    <!-- Select -->
    <q-select
      v-if="type === 'select'"
      v-model="modelValue"
      :label="label"
      outlined
      dense
      class="ds-input premium"
      :options="options"
      :rules="rules"
      clearable
    />

    <!-- Date picker -->
    <q-input
      v-if="type === 'date'"
      v-model="modelValue"
      :label="label"
      outlined
      dense
 
      class="ds-input premium"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="modelValue">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <!-- Time picker -->
    <q-input
      v-if="type === 'time'"
      v-model="modelValue"
      :label="label"
      outlined
      dense
     
      class="ds-input premium"
    >
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time v-model="modelValue">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { QDate, QTime } from 'quasar'

const props = defineProps({
  label: String,
  type: { type: String, default: 'text' }, // text / password / email / number / search / textarea / select / date / time
  rules: { type: Array, default: () => [] },
  clearable: { type: Boolean, default: true },
  prependIcon: { type: String, default: '' },
  appendIcon: { type: String, default: '' },
  options: { type: Array, default: () => [] } // for select
})

const modelValue = defineModel()

// Determine if the input is a date/time picker
const isPicker = computed(() => props.type === 'date' || props.type === 'time')

// Password toggle
const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}
const currentType = computed(() => {
  return props.type === 'password' ? (showPassword.value ? 'text' : 'password') : props.type
})

// Type-specific CSS class
const typeClass = computed(() => {
  switch (props.type) {
    case 'email': return 'type-email'
    case 'number': return 'type-number'
    case 'search': return 'type-search'
    case 'password': return 'type-password'
    case 'date': return 'type-date'
    case 'time': return 'type-time'
    default: return 'type-text'
  }
})

// Optional append icon click
const onAppendClick = () => {
  console.log('Append icon clicked!')
}
</script>

<style lang="scss" scoped>
.ds-input.premium {
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1rem;

  .q-field__control {
    border-radius: 12px;
    transition: all 0.3s ease;
    background: #fff;
  }

  .q-field__label {
    color: #999;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  .q-field--focused .q-field__label,
  .q-field--dirty .q-field__label {
    transform: translateY(-8px) scale(0.85);
  }

  .q-field__control:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  .q-field--focused .q-field__control {
    box-shadow: 0 0 0 2px rgba(255, 64, 129, 0.15);
  }

  .icon-prepend,
  .icon-append {
    transition: all 0.3s ease;
  }
  .icon-append.cursor-pointer:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }

  .q-field__clear {
    transition: all 0.3s ease;
    &:hover { transform: scale(1.2); }
  }

  /* Type-specific styling */
  &.type-email { .q-field__control { border-color: #00b894; } }
  &.type-number { .q-field__control { border-color: #fdcb6e; } }
  &.type-password { .q-field__control { border-color: #d63031; } }
  &.type-search { .q-field__control { border-color: #0984e3; } }
  &.type-date { .q-field__control { border-color: #6c5ce7; } }
  &.type-time { .q-field__control { border-color: #00cec9; } }
}
</style>
