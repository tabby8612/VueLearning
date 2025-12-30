Vue.createApp({
  data: () => {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },

  methods: {
    boxSelected(selector) {
      if (selector === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (selector === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
}).mount("#styling");
