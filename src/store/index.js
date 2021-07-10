import Vue from 'vue';
import Vuex from 'vuex';
import productClass from '@/data/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    page: 1,
  },
  getters: {
    products(state) {
      return state.products;
    },
    page(state) {
      return state.page;
    },
    productDetails: (state) => (id) => state.products.find((item) => item.id === id),
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    addProducts(state, payload) {
      state.products = [...state.products, ...payload];
    },
    setPage(state, newPage) {
      state.page = newPage;
    },
    resetProducts(state) {
      state.products = [];
      state.page = 1;
    },
  },
  actions: {
    async fetchProductList({ commit }, options) {
      const { initial = true, size = 10, page = 1 } = options;
      const mutation = initial ? 'setProducts' : 'addProducts';
      const result = await productClass.productList(size);

      commit(mutation, result);
      commit('setPage', page);
    },
  },
  modules: {
  },
});
