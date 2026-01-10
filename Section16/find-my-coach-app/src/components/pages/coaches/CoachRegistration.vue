<script lang="ts">
import NewCoachForm from '@/components/NewCoachForm.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'

export default {
  components: {
    Card,
    Button,
    NewCoachForm,
  },

  data() {
    return {
      name: '',
      description: '',
      rate: 0,
      services: [],
    }
  },

  methods: {
    async addNewCoach(coach: Coach) {
      this.$store.dispatch('addNewCoach', coach)

      await fetch(`https://coach-demo-ea0fe-default-rtdb.firebaseio.com/coaches.json`, {
        method: 'POST',
        body: JSON.stringify(coach),
      })

      this.$router.replace('/')
    },
  },
}
</script>

<template>
  <Card>
    <h1 class="text-2xl font-bold">Register As New Coach!!!</h1>
    <NewCoachForm v-on:add-new-coach="addNewCoach" />
  </Card>
</template>
