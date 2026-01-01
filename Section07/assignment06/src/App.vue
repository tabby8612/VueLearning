<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

export default {
  data: () => {
    return {
      user_name: "",
      user_age: "",
    };
  },

  methods: {
    handleForm(name, age) {
      console.log(`from app`);
      console.log(name, age);
      this.user_name = name;
      this.user_age = age;
    },
  },
};
</script>

<template>
  <h1>You did it!</h1>
  <p>Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the documentation</p>
  <section style="display: flex">
    <div style="width: 100%; border-style: dashed; border-color: red; padding: 10px 10px; margin: 10px 10px">
      <UserData @handleForm="handleForm"></UserData>
    </div>

    <div style="width: 100%; border-style: double; border-color: red; padding: 10px 10px; margin: 10px 10px">
      <ActiveUser :userName="user_name" :age="user_age"></ActiveUser>
    </div>
  </section>
</template>

<style scoped></style>
