<script lang="ts">
import Card from '@/components/ui/Card.vue'
import RequestCard from '@/components/ui/RequestCard.vue'
import type { ContactRequest } from '@/types/Request'

export default {
  components: {
    Card,
    RequestCard,
  },

  computed: {
    requests() {
      return this.$store.getters['requests/requests'] as ContactRequest[]
    },

    isRequestsAvailable() {
      return this.requests.length > 0
    },
  },
}
</script>

<template>
  <Card>
    <h1 class="text-2xl font-bold">Request Received</h1>
    <section class="mt-7" v-if="isRequestsAvailable">
      <RequestCard v-for="request in requests" :email="request.email" :message="request.message" />
    </section>
    <section v-else>
      <h1 class="text-2xl font-bold mt-10 text-center">😢 No Request Available</h1>
    </section>
  </Card>
</template>
