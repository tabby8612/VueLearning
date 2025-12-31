<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
</script>

<template>
  <h1>You did it!</h1>
  <p>Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the documentation</p>
  <section style="display: flex">
    <div style="width: 100%; border-style: dashed; border-color: red; padding: 10px 10px; margin: 10px 10px">
      <UserData></UserData>
    </div>

    <div style="width: 100%; border-style: double; border-color: red; padding: 10px 10px; margin: 10px 10px">
      <ActiveUser></ActiveUser>
    </div>
  </section>
</template>

<style scoped></style>
