<script>
import TheHeader from "./components/nav/TheHeader.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TheHeader,
  },
  computed: {
    ...mapGetters({
      products: "getStoreProducts",
      isLoggedIn: "getLoggedIn",
      cart: "getCart",
    }),
  },
};
</script>

<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

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
