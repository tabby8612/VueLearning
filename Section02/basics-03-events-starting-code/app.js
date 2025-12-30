const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },

  computed: {
    fullName() {
      console.log(`Running Again`);

      if (this.name === "") return "";

      return this.name + " " + "Sajwani";
    },
  },

  watch: {
    counter(value) {
      if (value > 50) this.counter = 0;
    },
  },

  methods: {
    increaseCount(num = 1) {
      this.counter = this.counter + num;
    },

    decreaseCount(num = 1) {
      this.counter = this.counter - num;
    },

    setName(event, lastName) {
      this.name = event.target.value;
    },

    submitForm() {},

    resetField() {
      this.name = "";
    },
  },
});

app.mount("#events");
