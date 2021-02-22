import { SET_MENU_TIME } from "./types";

const state = {
  data: [
    {
      name: "Semana",
      selected: true
    },
    {
      name: "Mês",
      selected: false
    },
    {
      name: "Ano",
      selected: false
    }
  ]
};

const mutations = {
  [SET_MENU_TIME](state, { payload }) {
    state.data = payload.data;
  }
};

const getters = {};

const actions = {
  setMenuTime({ commit }, { payload }) {
    const newData = state.data.map(item => {
      if (item.name === payload.name)
        return {
          name: item.name,
          selected: true
        };

      return {
        name: item.name,
        selected: false
      };
    });

    commit({
      type: SET_MENU_TIME,
      payload: { data: newData }
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
