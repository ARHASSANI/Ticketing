<template>
  <q-form @submit="handleSubmit">
    <q-input
      v-model="form.username"
      label="Username"
      outlined
      class="q-mb-md"
      required
    />
    <q-input
      v-model="form.email"
      type="email"
      label="Email"
      outlined
      class="q-mb-md"
      required
    />
    <q-input
      v-model="form.fullName"
      label="Full Name"
      outlined
      class="q-mb-md"
      required
    />
    <q-select
      v-model="form.role"
      label="Role"
      :options="['Admin', 'Support', 'User']"
      outlined
      class="q-mb-md"
    />
    <q-btn type="submit" color="primary" label="Save User" />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  initialData: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['submit'])

const form = ref({
  username: '',
  email: '',
  fullName: '',
  role: null
})

const handleSubmit = () => {
  emit('submit', form.value)
}
</script>
