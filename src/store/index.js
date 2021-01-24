import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      searchResults: [],
    };
  },
  mutations: {
    setSearchResults(state, payload) {
      state.searchResults = payload;
    },
  },
});
export default store;
