<template>
  <section class="bg-amber-400 w-1/2 mx-auto mt-5 rounded px-3 py-2">
    <h1 class="text-3xl font-bold">{{ title }}</h1>
    <h2 class="text-3xl font-bold">{{ description }}</h2>
    <button @click="formHandler">Click Me</button>
    <h1>{{ userAge }}</h1>
  </section>
</template>

<script setup lang="ts">
import { inject } from "vue";

type PropType = {
  title: string;
  description?: string;
};

const { title, description = "Welcome" } = defineProps<PropType>();
const emit = defineEmits(["onClick"]);
const userAge = inject("providedValue");

console.log(title, description);

function formHandler() {
  emit("onClick");
}
</script>
