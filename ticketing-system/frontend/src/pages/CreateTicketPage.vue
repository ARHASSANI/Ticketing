<template>
  <q-page class="q-pa-md">
    <h3>Create Ticket</h3>
    <q-card class="q-mt-md" style="max-width: 600px">
      <q-card-section>
        <TicketForm @submit="handleSubmit" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
import TicketForm from '@/components/tickets/TicketForm.vue'

const router = useRouter()

const handleSubmit = async (formData) => {
  console.log('Create ticket:', formData)
  router.push('/tickets')
}
</script>
