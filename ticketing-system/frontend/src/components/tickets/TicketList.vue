<template>
  <div>
    <q-table
      title="Tickets"
      :rows="tickets"
      :columns="columns"
      row-key="id"
      @row-click="openTicket"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const tickets = ref([])
const columns = [
  { name: 'id', label: 'ID', field: 'id' },
  { name: 'title', label: 'Title', field: 'title' },
  { name: 'status', label: 'Status', field: 'status' },
  { name: 'priority', label: 'Priority', field: 'priority' },
]

const openTicket = (row) => {
  router.push(`/tickets/${row.id}`)
}
</script>
