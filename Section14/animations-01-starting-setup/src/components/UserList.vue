<template>
  <section>
    <TransitionGroup tag="ul" name="user-list">
      <li v-for="user in this.users" :key="user" @click="removeUser(user)">
        {{ user }}
      </li>
    </TransitionGroup>
    <form @submit.prevent="addUser">
      <input type="text" name="userName" id="userName" ref="userName" />
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
import { TransitionGroup } from 'vue';

export default {
  components: {
    TransitionGroup,
  },
  data() {
    return {
      users: ['Ahmed', 'Abdul', 'Ali', 'Tabish', 'Danish'],
    };
  },

  methods: {
    removeUser(selectedUser) {
      this.users = this.users.filter((user) => user !== selectedUser);
    },

    addUser() {
      const enteredUser = this.$refs.userName.value;
      this.users.unshift(enteredUser);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  padding: 10px 20px;
  border: 2px solid gray;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: beige;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-to {
  opacity: 1;
  transform: translateX(0px);
}

.user-list-enter-active {
  transition: all 1s ease-out;
  position: absolute;
}

.user-list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-leave-active {
  transition: all 1s ease-in;
}

.user-list-move {
  transition: transform 1s ease-out;
}
</style>
