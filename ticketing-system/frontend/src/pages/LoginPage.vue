<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <h4 class="q-mt-none q-mb-md">Login</h4>
        <q-form @submit.prevent="handleLogin">
          <q-input
            v-model="email"
            type="email"
            label="Email"
            outlined
            class="q-mb-md"
          />
          <q-input
            v-model="password"
            type="password"
            label="Password"
            outlined
            class="q-mb-md"
          />
          <q-btn type="submit" color="primary" label="Login" class="full-width" />
        </q-form>
        <p class="q-mt-md text-center">
          Don't have an account? <router-link to="/register">Register here</router-link>
        </p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  // Implementation here
  console.log('Login:', { email: email.value, password: password.value })
  authStore.setToken('dummy-token')
  authStore.setUser({ email: email.value })
  router.push('/dashboard')
}
</script>
