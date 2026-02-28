<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>Ticketing System</q-toolbar-title>
        <q-btn flat round dense icon="account_circle" @click="goToProfile" />
        <q-btn flat round dense icon="logout" @click="logout" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" bordered>
      <q-list>
        <q-item clickable v-ripple to="/dashboard">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/tickets">
          <q-item-section avatar>
            <q-icon name="confirmation_number" />
          </q-item-section>
          <q-item-section>Tickets</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/users">
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>Users</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/roles">
          <q-item-section avatar>
            <q-icon name="security" />
          </q-item-section>
          <q-item-section>Roles</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/reports">
          <q-item-section avatar>
            <q-icon name="assessment" />
          </q-item-section>
          <q-item-section>Reports</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const left = ref(false)

const logout = () => {
  authStore.logout()
  router.push('/login')
}

const goToProfile = () => {
  router.push('/profile')
}
</script>
