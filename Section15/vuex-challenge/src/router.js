// const { createRouter, createWebHistory } = require("vue-router");
// const { default: ProductsList } = require("./pages/ProductsList.vue");
// const { default: UserCart } = require("./pages/UserCart.vue");
// const { default: ShopAdmin } = require("./pages/ShopAdmin.vue");

import { createRouter, createWebHistory } from "vue-router";
import ProductsList from "./pages/ProductsList.vue";
import UserCart from "./pages/UserCart.vue";
import ShopAdmin from "./pages/ShopAdmin.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductsList },
    { path: "/cart", component: UserCart },
    { path: "/admin", component: ShopAdmin },
  ],
});

export default router;
