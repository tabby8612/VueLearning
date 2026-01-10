<script lang="ts">
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import { type ContactRequest } from '@/types/Request'

export default {
  components: {
    Button,
    Card,
  },
  data() {
    return {
      email: '',
      message: '',
    }
  },

  methods: {
    formHandler() {
      const coachID = this.$route.params.id

      const request: ContactRequest = {
        id: Math.round(Math.random() * 10).toString(),
        coachID: coachID as string,
        email: this.email,
        message: this.message,
      }

      this.$store.dispatch('requests/addRequestAction', request)

      this.$router.replace('/requests')
    },
  },
}
</script>

<template>
  <Card class="w-full">
    <form @submit.prevent="formHandler">
      <div class="mt-3">
        <label for="email" class="font-bold block">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          class="w-full mt-1 text-sm px-2 py-1.5 border rounded"
        />
      </div>
      <div class="mt-3">
        <label for="message" class="font-bold block">Your Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          v-model="message"
          class="w-full border rounded px-2 py-3"
        ></textarea>
      </div>
      <div class="mt-3 flex justify-end">
        <Button mode="flat">Submit</Button>
      </div>
    </form>
  </Card>
</template>
