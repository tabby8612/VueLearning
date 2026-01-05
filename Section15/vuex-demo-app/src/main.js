import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const app = createApp(App);

const authModule = {
  namespaced: true,
  state() {},
  getters: {},
  mutations: {},
  actions: {},
};

const store = createStore({
  modules: {
    emptyModule: authModule,
  },

  state() {
    return {
      counter: 0,
    };
  },

  mutations: {
    increament(state) {
      return state.counter++;
    },

    increamentByParameter(state, payload) {
      return (state.counter += payload.value);
    },
  },

  actions: {
    increament(context) {
      setTimeout(function () {
        context.commit("increament");
      }, 2000);
    },
  },

  getters: {
    counter3x(state) {
      return state.counter * 3;
    },

    normalizedCounter(state, getters) {
      const finalCounter = getters.counter3x;

      if (finalCounter < 0) return 0;

      if (finalCounter > 100) return 100;

      return finalCounter;
    },
  },
});

app.use(store);

app.mount("#app");
