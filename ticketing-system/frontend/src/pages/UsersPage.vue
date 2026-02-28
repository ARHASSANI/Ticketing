<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h3 class="q-ma-none">Users</h3>
      <q-space />
      <q-btn color="primary" label="Add User" />
    </div>
    <UserList />
  </q-page>
</template>

<script setup>
import UserList from '@/components/users/UserList.vue'
</script>
