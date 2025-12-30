Vue.createApp({
  data: () => {
    return {
      name: "Tabish Sajwani",
      age: 35,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    };
  },

  methods: {
    generateRandom() {
      return (Math.random() * 10).toFixed(2);
    },
  },
}).mount("#assignment");
