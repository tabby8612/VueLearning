Vue.createApp({
  data: () => {
    return {
      taskName: "",
      tasks: [],
      isVisible: true,
    };
  },

  computed: {
    toggle() {
      return this.isVisible ? "block" : "none";
    },
  },

  methods: {
    addTask() {
      console.log(this.taskName);
      this.tasks.push(this.taskName);
      console.log(this.tasks);
      this.taskName = "";
    },

    toggleDisplay() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount("#assignment");
