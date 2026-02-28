<template>
  <q-card>
    <q-card-section>
      <h5 class="q-ma-none q-mb-md">Filters</h5>
      <q-select
        v-model="filters.status"
        label="Status"
        :options="['open', 'in_progress', 'resolved', 'closed']"
        outlined
        class="q-mb-md"
      />
      <q-select
        v-model="filters.priority"
        label="Priority"
        :options="['low', 'medium', 'high', 'critical']"
        outlined
        class="q-mb-md"
      />
      <q-input
        v-model="filters.search"
        label="Search"
        outlined
        class="q-mb-md"
      />
      <q-btn color="primary" label="Apply Filters" class="full-width" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'

const filters = ref({
  status: null,
  priority: null,
  search: ''
})
</script>
