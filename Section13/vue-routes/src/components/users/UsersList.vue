<template>
  <button @click="forwardtoTeams">Takes me to teams page</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },

  methods: {
    forwardtoTeams() {
      this.$router.push("/teams");
    },
  },

  inject: ["users"],

  beforeRouteLeave(to, from, next) {
    console.log(`from before route leave`);
    console.log(to);
    console.log(from);
    const confirmAnswer = confirm("Are you sure you want to leave?");
    next(confirmAnswer);
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
