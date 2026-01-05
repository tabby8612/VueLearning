import products from "@/data/products";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      products: products,
      isLoggedIn: false,
      cart: { items: [], total: 0, qty: 0 },
    };
  },

  getters: {
    getStoreProducts(state) {
      return state.products;
    },

    getLoggedIn(state) {
      return state.isLoggedIn;
    },

    getCart(state) {
      return state.cart;
    },
  },

  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },

    logout(state) {
      state.isLoggedIn = false;
    },

    removeProductFromCart(state, payload) {
      const productInCartIndex = state.cart.items.findIndex((item) => item.productId === payload.prodId);
      const prodData = state.cart.items[productInCartIndex];
      state.cart.items.splice(productInCartIndex, 1);

      state.cart.qty -= prodData.qty;

      state.cart.total -= prodData.price * prodData.qty;
    },

    addProductsToCart(state, payload) {
      const productInCartIndex = state.cart.items.findIndex((item) => item.productId === payload.productData.id);

      if (productInCartIndex >= 0) {
        state.cart.items[productInCartIndex].qty++;
        state.cart.items[productInCartIndex].total = 159;
      } else {
        const newItem = {
          productId: payload.productData.id,
          title: payload.productData.title,
          image: payload.productData.image,
          price: payload.productData.price,
          qty: 1,
        };

        state.cart.items.push(newItem);
      }

      state.cart.qty++;
      state.cart.total += payload.productData.price;
    },
  },

  actions: {
    login(context) {
      context.commit("login");
    },

    logout(context) {
      context.commit("logout");
    },

    addProductsToCart(context, payload) {
      context.commit("addProductsToCart", payload);
    },

    removeProductFromCart(context, payload) {
      context.commit("removeProductFromCart", payload);
    },
  },
});

export default store;
