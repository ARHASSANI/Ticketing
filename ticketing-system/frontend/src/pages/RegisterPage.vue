<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <h4 class="q-mt-none q-mb-md">Register</h4>
        <q-form @submit.prevent="handleRegister">
          <q-input
            v-model="username"
            label="Username"
            outlined
            class="q-mb-md"
          />
          <q-input
            v-model="email"
            type="email"
            label="Email"
            outlined
            class="q-mb-md"
          />
          <q-input
            v-model="fullName"
            label="Full Name"
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
          <q-input
            v-model="confirmPassword"
            type="password"
            label="Confirm Password"
            outlined
            class="q-mb-md"
          />
          <q-btn type="submit" color="primary" label="Register" class="full-width" />
        </q-form>
        <p class="q-mt-md text-center">
          Already have an account? <router-link to="/login">Login here</router-link>
        </p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const email = ref('')
const fullName = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleRegister = async () => {
  // Implementation here
  console.log('Register:', { username: username.value, email: email.value })
  router.push('/login')
}
</script>
