<template>
  <Card class="w-full">
    <p class="my-1">
      <a
        href="mailto:abc@abc.com"
        class="font-bold text-fuchsia-700 underline underline-offset-4"
        >{{ email }}</a
      >
    </p>
    <p>{{ message }}</p>
  </Card>
</template>

<script lang="ts">
import Card from './Card.vue'

export default {
  components: {
    Card,
  },
  props: {
    email: {
      type: String,
      required: true,
      validator: (value: string) => value.includes('@'),
    },

    message: {
      type: String,
      required: true,
    },
  },
}
</script>
