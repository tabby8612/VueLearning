<script lang="ts">
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'

export default {
  components: {
    Card,
    Button,
  },

  data() {
    return {
      name: '',
      description: '',
      rate: 0,
      services: [],
    }
  },

  emits: ['addNewCoach'],

  methods: {
    formHandler() {
      const newCoach = {
        id: Math.round(Math.random() * 10).toString(),
        name: this.name,
        description: this.description,
        rate: this.rate.toString(),
        services: this.services,
      }

      this.$emit('addNewCoach', newCoach)
    },
  },
}
</script>

<template>
  <form class="mt-5" @submit.prevent="formHandler">
    <div class="mt-3">
      <label for="name" class="block text-lg font-bold">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        class="border w-full mt-1 rounded px-2 py-1.5"
        v-model.trim="name"
      />
    </div>
    <div class="mt-3">
      <label for="description" class="block text-lg font-bold">Description</label>
      <textarea
        name="description"
        id="description"
        rows="5"
        class="border w-full mt-1 rounded px-2 py-1.5"
        v-model.trim="description"
      ></textarea>
    </div>
    <div class="mt-3">
      <label for="rate" class="block text-lg font-bold">Rate</label>
      <input
        type="number"
        id="rate"
        name="rate"
        class="border w-full mt-1 rounded px-2 py-1.5"
        v-model.number="rate"
      />
    </div>
    <div class="mt-5">
      <label for="rate" class="mt-2 block text-lg font-bold">Area of Expertise</label>
      <div class="flex gap-3 items-center">
        <input
          type="checkbox"
          id="frontend"
          name="frontend"
          value="frontend"
          class="size-4"
          v-model="services"
        />
        <label for="frontend" class="font-bold">Frontend</label>
      </div>
      <div class="mt-2 flex gap-3 items-center">
        <input
          type="checkbox"
          id="backend"
          name="backend"
          value="backend"
          class="size-4"
          v-model="services"
        />
        <label for="backend" class="font-bold">Backend</label>
      </div>
      <div class="mt-2 flex gap-3 items-center">
        <input
          type="checkbox"
          id="career"
          name="career"
          value="career"
          class="size-4"
          v-model="services"
        />
        <label for="career" class="font-bold">Career Advisor</label>
      </div>
    </div>
    <div class="mt-5 flex justify-end">
      <Button mode="flat">Submit</Button>
    </div>
  </form>
</template>
