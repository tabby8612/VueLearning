Vue.createApp({
  data: () => {
    return {
      count: 0,
      result: "Not There Yet",
    };
  },

  watch: {
    count(value) {
      if (value < 37) {
        this.result = "Not There Yet";
      } else if (value === 37) {
        this.result = "Almost There";
      } else {
        this.result = "Too Much";
      }

      const timer = setTimeout(() => {
        this.result = "";
      }, 2000);

      //   return clearTimeout(timer);
    },
  },

  methods: {
    increase(num) {
      this.count += num;
      console.log(this.count);
    },
  },
}).mount("#assignment");
