import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const loadingPlugin = store => {
  store.subscribeAction({
    before: ({ type }) => {
      store.commit('global/SET_LOADING', { type, loading: true });
    },
    after: ({ type }) => {
      store.commit('global/SET_LOADING', { type, loading: false });
    }
  });
};

export default new Vuex.Store({
  plugins: [loadingPlugin],
  modules
});
