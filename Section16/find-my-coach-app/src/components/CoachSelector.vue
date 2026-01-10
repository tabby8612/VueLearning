<template>
  <Card>
    <h1 class="text-2xl font-bold">Find Your Coach</h1>
    <form class="flex gap-5 mt-3" @change="filter">
      <div class="flex gap-2 justify-center items-center text-lg font-semibold">
        <input
          type="checkbox"
          name="frontend"
          id="frontend"
          class="size-3.5"
          ref="frontendCkb"
          checked
        />
        <label for="frontend">Frontend</label>
      </div>
      <div class="flex gap-2 justify-center items-center text-lg font-semibold">
        <input
          type="checkbox"
          name="backend"
          id="backend"
          class="size-3.5"
          ref="backendCkb"
          checked
        />
        <label for="backend">Backend</label>
      </div>
      <div class="flex gap-2 justify-center items-center text-lg font-semibold">
        <input type="checkbox" name="career" id="career" class="size-3.5" ref="careerCkb" checked />
        <label for="career">Career</label>
      </div>
    </form>
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Card from './ui/Card.vue'

export default defineComponent({
  components: {
    Card,
  },

  methods: {
    filter() {
      const filters: string[] = []

      const frontendChk = (this.$refs.frontendCkb as HTMLInputElement).checked
      const backendCkb = (this.$refs.backendCkb as HTMLInputElement).checked
      const careerCkb = (this.$refs.careerCkb as HTMLInputElement).checked

      if (frontendChk) filters.push('frontend')
      if (backendCkb) filters.push('backend')
      if (careerCkb) filters.push('career')

      console.log(filters)

      this.$store.dispatch('filterCoaches', filters)
    },
  },
})
</script>
