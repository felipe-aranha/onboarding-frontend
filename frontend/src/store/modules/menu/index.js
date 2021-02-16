import { TOGGLE_MENU, SET_MENU, SET_SUB_MENU } from "./types";

const state = {
  collapse: false,
  menuSelected: "dashboard",
  subMenuSelected: ""
};

const mutations = {
  [TOGGLE_MENU](state) {
    state.collapse = !state.collapse;
  },

  [SET_MENU](state, { payload }) {
    state.menuSelected = payload.menu;
  },

  [SET_SUB_MENU](state, { payload }) {
    state.subMenuSelected = payload.subMenu;
  }
};

const getters = {};

const actions = {
  toggleMenu({ commit }) {
    commit({
      type: TOGGLE_MENU
    });
  },
  setMenu({ commit }, { payload }) {
    commit({
      type: SET_MENU,
      payload
    });
  },
  setSubMenu({ commit }, { payload }) {
    commit({
      type: SET_SUB_MENU,
      payload
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
