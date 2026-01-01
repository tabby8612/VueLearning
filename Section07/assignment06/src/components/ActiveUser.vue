<template>
  <h2>From ActiveUser</h2>
  <h2>Username: {{ userName }}</h2>
  <h3>age: {{ age }}</h3>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
      default: "Enter Name",
    },
    age: {
      type: String,
      required: true,
      default: "Enter Your Age",
    },
  },
};
</script>
