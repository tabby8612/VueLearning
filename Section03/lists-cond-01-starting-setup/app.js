const app = Vue.createApp({
  data() {
    return {
      goals: [],
      currentGoal: "",
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.currentGoal);
      this.currentGoal = "";
    },

    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
