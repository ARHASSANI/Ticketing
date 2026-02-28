<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h3 class="q-ma-none">Tickets</h3>
      <q-space />
      <router-link to="/tickets/create">
        <q-btn color="primary" label="Create Ticket" />
      </router-link>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-3">
        <TicketFilters />
      </div>
      <div class="col-12 col-md-9">
        <TicketList />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import TicketList from '@/components/tickets/TicketList.vue'
import TicketFilters from '@/components/tickets/TicketFilters.vue'
</script>
