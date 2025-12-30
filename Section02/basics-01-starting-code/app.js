const app = Vue.createApp({
  data: () => {
    return {
      courseGoalA: "Complete Vue Course",
      courseGoalB: "<i>Create Two Vue + Laravel Projects</i>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    createGoal() {
      if (Math.random() < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
