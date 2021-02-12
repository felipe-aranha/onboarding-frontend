import { TOGGLE_MENU } from "./types";

const state = {
  collapse: true
};

const mutations = {
  [TOGGLE_MENU](state) {
    state.collapse = !state.collapse;
  }
};

const getters = {};

const actions = {
  toggleMenu({ commit }) {
    commit({
      type: TOGGLE_MENU
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
