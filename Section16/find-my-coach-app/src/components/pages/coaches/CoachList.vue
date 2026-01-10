<template>
  <CoachSelector />

  <Card>
    <div class="flex justify-between">
      <Button mode="ghost" @on-click="refreshCoaches">Refresh</Button>
      <RouterLink to="/register">
        <Button mode="flat">+ Add New Coach</Button>
      </RouterLink>
    </div>

    <section v-if="isLoading">
      <h1 class="text-2xl font-bold mt-3 text-center">Loading...</h1>
    </section>

    <section v-if="!isLoading">
      <CoachCard
        v-for="coach in coaches"
        :id="coach.id"
        :full-name="coach.name"
        :rate-per-hr="coach.rate"
        :services="coach.services"
      />
    </section>
  </Card>
</template>

<script>
import CoachSelector from '@/components/CoachSelector.vue'
import AppLayout from '@/components/layouts/AppLayout.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import CoachCard from '@/components/ui/CoachCard.vue'

export default {
  components: {
    AppLayout,
    CoachSelector,
    Card,
    Button,
    CoachCard,
  },

  data() {
    return {
      isLoading: false,
    }
  },

  computed: {
    coaches() {
      return this.$store.getters['coaches']
    },
  },

  async created() {
    this.isLoading = true
    await this.$store.dispatch('loadCoachesFromDB')
    this.isLoading = false
  },

  methods: {
    async refreshCoaches() {
      this.isLoading = true
      await this.$store.dispatch('loadCoachesFromDB')
      this.isLoading = false
    },
  },
}
</script>
