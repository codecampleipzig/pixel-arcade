import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: parseInt(localStorage.getItem("score")) || 0,
  },
  mutations: {
    ADD_SCORE(state, amount) {
      state.score += amount;
      localStorage.setItem("score", state.score);
    },
  },
  actions: {
    gameWon({ commit }, result) {
      commit("ADD_SCORE", result.points);
    },
  },
  modules: {},
});
