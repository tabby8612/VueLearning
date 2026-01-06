<script lang="ts">
import { defineComponent } from 'vue'
import AppLayout from './components/layouts/AppLayout.vue'
import CoachSelector from './components/CoachSelector.vue'
import Card from './components/ui/Card.vue'
import CoachCard from './components/ui/CoachCard.vue'
import Button from './components/ui/Button.vue'

export default defineComponent({
  components: {
    AppLayout,
    CoachSelector,
    Card,
    CoachCard,
    Button,
  },

  computed: {
    coaches() {
      return this.$store.getters.coaches
    },
  },
})
</script>

<template>
  <AppLayout>
    <CoachSelector />

    <Card>
      <Button mode="ghost">Refresh</Button>

      <CoachCard
        v-for="coach in coaches as Coach[]"
        :id="coach.id"
        :full-name="coach.name"
        :rate-per-hr="coach.rate"
        :services="coach.services"
      />
    </Card>
  </AppLayout>
</template>

<style>
body {
  margin: 0;
}
</style>
