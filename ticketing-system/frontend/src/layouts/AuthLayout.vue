<template>
  <q-layout view="hHh lpR fFf" class="auth-layout">
    <q-page-container>
      <div class="auth-container">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.auth-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.auth-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}
</style>
