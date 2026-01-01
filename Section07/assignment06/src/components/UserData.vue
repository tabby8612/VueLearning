<template>
  <h2>UserData Form</h2>
  <form @submit.prevent="formHandler">
    <div>
      <label for="username">Username:</label>
      <input type="text" name="username" id="username" v-model="enteredName" />
    </div>
    <div>
      <label for="age">Age:</label>
      <input type="text" name="age" id="age" v-model="enteredAge" />
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["handleForm"],
  data: () => {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },

  methods: {
    formHandler() {
      console.log(this.enteredName, this.enteredAge);
      this.$emit("handleForm", this.enteredName, this.enteredAge);
    },
  },
};
</script>
