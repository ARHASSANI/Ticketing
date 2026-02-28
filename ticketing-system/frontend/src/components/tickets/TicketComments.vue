<template>
  <q-card>
    <q-card-section>
      <h5 class="q-ma-none q-mb-md">Comments</h5>
      <div class="q-mb-md">
        <q-item v-for="comment in comments" :key="comment.id" bordered>
          <q-item-section avatar top>
            <q-avatar icon="account_circle" />
          </q-item-section>
          <q-item-section top class="col">
            <q-item-label lines="1"><strong>{{ comment.author }}</strong></q-item-label>
            <q-item-label caption lines="2">{{ comment.text }}</q-item-label>
            <q-item-label caption>{{ comment.date }}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <q-input
        v-model="newComment"
        label="Add a comment..."
        outlined
        type="textarea"
        rows="3"
        class="q-mb-md"
      />
      <q-btn color="primary" label="Post Comment" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'

const comments = ref([])
const newComment = ref('')
</script>
