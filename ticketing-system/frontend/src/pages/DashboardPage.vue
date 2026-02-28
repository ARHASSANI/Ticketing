<template>
  <q-page class="q-pa-md">
    <h3>Dashboard</h3>
    <div class="row q-col-gutter-md">
      <StatsCards />
      <TicketChart />
      <RecentTickets />
    </div>
  </q-page>
</template>

<script setup>
import StatsCards from '@/components/dashboard/StatsCards.vue'
import TicketChart from '@/components/dashboard/TicketChart.vue'
import RecentTickets from '@/components/dashboard/RecentTickets.vue'
</script>
