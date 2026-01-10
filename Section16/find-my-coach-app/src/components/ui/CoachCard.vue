<template>
  <section id="CoachCard" class="border px-3 py-3 mt-3 rounded-2xl">
    <h1 class="text-2xl font-bold">{{ fullName }}</h1>
    <p class="font-bold mt-2">${{ ratePerHr }}/hr</p>
    <ul class="flex gap-3 items-center list-none mt-3">
      <Tag v-for="service in services" :type="service" />
    </ul>
    <div class="flex justify-end items-center gap-5">
      <RouterLink :to="contactCoach"><Button mode="ghost">Contact</Button></RouterLink>

      <RouterLink :to="CoachDetail">
        <Button mode="flat" :id="id">View Details</Button>
      </RouterLink>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import Tag from './Tag.vue'
import Button from './Button.vue'

export default defineComponent({
  components: {
    Tag,
    Button,
  },

  computed: {
    contactCoach() {
      return '/coach/' + this.id + '/contact'
    },

    CoachDetail() {
      return '/coach/' + this.id
    },
  },
  props: {
    id: { type: String, required: true },
    fullName: { type: String, required: true },
    ratePerHr: { type: String, required: true },
    services: { type: Array as PropType<string[]>, required: true },
  },
})
</script>
