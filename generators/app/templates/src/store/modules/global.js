// initial state
const state = {
  loading: {},
  redirectToHome: true
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  SET_LOADING(state, { type, loading }) {
    state.loading = {
      ...state.loading,
      [type]: loading
    };
  },
  SET_CUR_SIDEBAR: (state, sidebar) => {
    state.curSidebar = sidebar;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
