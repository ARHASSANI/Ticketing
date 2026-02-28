<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h3 class="q-ma-none">Roles</h3>
      <q-space />
      <q-btn color="primary" label="Add Role" />
    </div>
    <q-table
      title="Roles"
      :rows="roles"
      :columns="columns"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const roles = ref([])
const columns = [
  { name: 'name', label: 'Name', field: 'name' },
  { name: 'description', label: 'Description', field: 'description' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]
</script>
