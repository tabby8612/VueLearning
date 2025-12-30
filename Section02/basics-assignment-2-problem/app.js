Vue.createApp({
  data: () => {
    return {
      outputText: "",
      confirmText: "",
    };
  },

  methods: {
    showAlert() {
      alert("This is assignment 2");
    },

    showOutput(event) {
      this.outputText = this.outputText + event.target.value;
    },

    confirmOutput() {
      this.confirmText += this.outputText;
    },
  },
}).mount("#assignment");
