<template>
  <BaseContainer title="VUEX">
    {{ count }}
    <p>{{ normalizedCount }}</p>
    <!-- hi -->
    <button @click="increaseCount">Increase Counter</button>
    <button @click="increaseCountByTen(10)">Increase Counter by Ten</button>
  </BaseContainer>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BaseContainer,
  },

  computed: {
    // count() {
    //   return this.$store.state.counter;
    // },

    // normalizedCount() {
    //   return this.$store.getters.normalizedCounter;
    // },

    // ...mapGetters(["counter3x", "normalizedCounter"]),
    ...mapGetters({
      count: "counter3x",
      normalizedCount: "normalizedCounter",
    }),
  },

  methods: {
    increaseCount() {
      // return this.$store.commit("increament");   // commit is for mutators
      return this.$store.dispatch("increament");
    },

    increaseCountByTen(num) {
      this.$store.commit({
        type: "increamentByParameter",
        value: +num,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
