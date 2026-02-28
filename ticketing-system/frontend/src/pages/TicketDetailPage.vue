<template>
  <q-page class="q-pa-md">
    <q-btn flat icon="arrow_back" to="/tickets" label="Back" />
    <h3>Ticket Details</h3>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-8">
        <TicketTimeline />
        <TicketComments />
      </div>
      <div class="col-12 col-md-4">
        <q-card>
          <q-card-section>
            <h5>Details</h5>
            <p><strong>Status:</strong> Open</p>
            <p><strong>Priority:</strong> Medium</p>
            <p><strong>Assigned to:</strong> John Doe</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import TicketTimeline from '@/components/tickets/TicketTimeline.vue'
import TicketComments from '@/components/tickets/TicketComments.vue'
</script>
