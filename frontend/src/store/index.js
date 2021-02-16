import { createStore } from "vuex";

import menu from "./modules/menu";
import timeMenu from "./modules/timeMenu";

const modules = {
  menu,
  timeMenu
};

const state = {};

const mutations = {};

const getters = {};

const actions = {};

export default createStore({
  modules,
  state,
  mutations,
  getters,
  actions
});
