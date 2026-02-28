<template>
  <q-form @submit="handleSubmit">
    <q-input
      v-model="form.title"
      label="Title"
      outlined
      class="q-mb-md"
      required
    />
    <q-input
      v-model="form.description"
      label="Description"
      outlined
      type="textarea"
      class="q-mb-md"
      required
    />
    <q-select
      v-model="form.priority"
      label="Priority"
      :options="['low', 'medium', 'high', 'critical']"
      outlined
      class="q-mb-md"
    />
    <q-btn type="submit" color="primary" label="Create Ticket" />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['submit'])

const form = ref({
  title: '',
  description: '',
  priority: 'medium'
})

const handleSubmit = () => {
  emit('submit', form.value)
}

const emit = defineEmits()
</script>
