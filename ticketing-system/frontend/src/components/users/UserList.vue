<template>
  <q-table
    title="Users"
    :rows="users"
    :columns="columns"
    row-key="id"
  />
</template>

<script setup>
import { ref } from 'vue'

const users = ref([])
const columns = [
  { name: 'id', label: 'ID', field: 'id' },
  { name: 'username', label: 'Username', field: 'username' },
  { name: 'email', label: 'Email', field: 'email' },
  { name: 'role', label: 'Role', field: 'role' },
]
</script>
