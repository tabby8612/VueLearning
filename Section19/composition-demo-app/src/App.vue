<script setup lang="ts">
import { computed, provide, reactive, ref, watch } from "vue";
import Card from "./components/Card.vue";

const userName = ref("Tabish");
const user = reactive({
  education: "BSCS",
  cgpa: 3.96,
  age: 35,
});
const address = ref("");

setTimeout(() => {
  userName.value = "Tabish Sajwani";
  user.cgpa = 4;
}, 2000);

function changeAge() {
  user.age += 1;
}

const fullName = computed(() => "Engr. " + userName.value);

watch(userName, (newVal, oldVal) => console.log("new value: " + newVal, "old value: " + oldVal));
watch([address, fullName], (newVals, oldVals) => console.log("new vals", newVals, "old vals", oldVals));

const moodInput = ref<HTMLInputElement | null>(null);

function setMood() {
  console.log(moodInput.value?.value);
}

provide("providedValue", user.age);
</script>

<template>
  <h1 class="text-2xl">{{ userName }}</h1>
  <h1 class="text-2xl text-red-500 font-bold">{{ fullName }}</h1>
  <h1>{{ user.education }} with {{ user.cgpa }}</h1>
  <h1>Age is: {{ user.age }}</h1>
  <button @click="changeAge">Change Age</button>
  <h1>{{ address }}</h1>
  <input type="text" name="address" id="address" v-model="address" class="border" />
  <input type="text" name="mood" id="mood" ref="moodInput" class="border" />
  <button @click="setMood">Set Mood</button>
  <Card :title="fullName" @on-click="setMood" />
</template>

<style scoped></style>
