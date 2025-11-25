import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      num: 0,
    };
  },
  getters: {},
  mutations: {
    addNum(state, value) {
      state.num += value;
    },
  },
  actions: {
    asynAdd(context, value) {
      setTimeout(() => {
        context.commit("addNum", value);
      }, 2000);
    },
  },
});
export default store;
