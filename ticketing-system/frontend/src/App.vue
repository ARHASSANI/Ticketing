<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

// Check if user is logged in on app mount
if (!authStore.isAuthenticated) {
  router.push('/login');
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
