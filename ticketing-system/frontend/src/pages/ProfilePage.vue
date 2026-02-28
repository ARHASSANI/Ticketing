<template>
  <q-page class="q-pa-md">
    <h3>User Profile</h3>
    <q-card class="q-mt-md" style="max-width: 600px">
      <q-card-section>
        <q-form @submit.prevent="handleSubmit">
          <q-input
            v-model="user.username"
            label="Username"
            outlined
            class="q-mb-md"
          />
          <q-input
            v-model="user.email"
            type="email"
            label="Email"
            outlined
            class="q-mb-md"
          />
          <q-input
            v-model="user.fullName"
            label="Full Name"
            outlined
            class="q-mb-md"
          />
          <q-btn type="submit" color="primary" label="Update Profile" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const user = ref({
  username: '',
  email: '',
  fullName: ''
})

const handleSubmit = async () => {
  console.log('Update profile:', user.value)
}
</script>
