<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        v-model="enteredName"
      />
    </div>
    <div>
      <label for="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        v-model="enteredPhoneNumber"
      />
    </div>
    <div>
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        v-model="enteredEmail"
      />
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      enteredName: '',
      enteredPhoneNumber: '',
      enteredEmail: '',
    }
  },

  methods: {
    submitData() {
      this.$emit('addContact', this.enteredName, this.enteredPhoneNumber, this.enteredEmail)
    },
  },
}
</script>
