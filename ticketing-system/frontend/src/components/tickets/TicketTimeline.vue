<template>
  <q-card class="q-mb-md">
    <q-card-section>
      <h5 class="q-ma-none">Timeline</h5>
      <q-timeline layout="dense">
        <q-timeline-entry
          title="Ticket Created"
          subtitle="Created by John Doe"
          icon="add"
          color="blue"
        />
        <q-timeline-entry
          title="Status Changed"
          subtitle="Changed to In Progress"
          icon="edit"
          color="orange"
        />
      </q-timeline>
    </q-card-section>
  </q-card>
</template>

<script setup>
</script>
