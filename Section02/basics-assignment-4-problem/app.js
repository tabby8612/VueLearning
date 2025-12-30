Vue.createApp({
  data: () => {
    return {
      userClasses: "",
      isDisplay: true,
      bgColor: "white",
    };
  },

  computed: {
    toggle() {
      return this.isDisplay ? "visible" : "hidden";
    },
  },

  methods: {
    updateClasses(event) {
      this.userClasses = event.target.value;
    },

    togglePara() {
      this.isDisplay = !this.isDisplay;
    },

    changeBgColor(event) {
      this.bgColor = event.target.value;
    },
  },
}).mount("#assignment");
