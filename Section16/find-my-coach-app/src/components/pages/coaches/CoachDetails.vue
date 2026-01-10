<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Tag from '@/components/ui/Tag.vue'
</script>

<template>
  <Card>
    <h1 class="text-3xl font-bold my-5">{{ selectedCoach.name }}</h1>
    <p class="text-lg font-bold">${{ selectedCoach.rate }}/hour</p>
  </Card>
  <Card>
    <h1 class="text-2xl font-bold my-5">Interested? Reach Out Now</h1>
    <RouterLink :to="contactCoach"><Button mode="flat">Contact</Button></RouterLink>
    <RouterView></RouterView>
  </Card>
  <Card>
    <ul class="flex gap-5 my-5">
      <Tag v-for="service in selectedCoach.services" :type="service" />
    </ul>
    <p>{{ selectedCoach.description }}</p>
  </Card>
</template>

<script lang="ts">
export default {
  computed: {
    selectedCoach() {
      const coachID = this.$route.params.id
      const foundCoach: Coach = this.$store.getters['coaches'].find(
        (coach: Coach) => coach.id === coachID,
      )

      return foundCoach
    },

    contactCoach() {
      const coachID = this.$route.params.id
      return '/coach/' + coachID + '/contact'
    },
  },
}
</script>
