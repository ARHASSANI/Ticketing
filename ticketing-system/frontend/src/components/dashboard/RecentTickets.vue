<template>
  <div class="col-12 col-md-6">
    <q-card>
      <q-card-section>
        <h5 class="q-ma-none q-mb-md">Recent Tickets</h5>
        <q-list bordered separator>
          <q-item v-for="ticket in tickets" :key="ticket.id">
            <q-item-section avatar>
              <q-icon name="confirmation_number" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ ticket.title }}</q-item-label>
              <q-item-label caption>{{ ticket.status }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-if="tickets.length === 0">
            <q-item-section>No tickets yet</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tickets = ref([])
</script>
