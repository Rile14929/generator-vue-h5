import Vue from 'vue';
import vConsole from 'vconsole';
import './plugins/vant.js';
import App from './App.vue';
import router from './router';
import store from './store/index';

if (process.env.VUE_APP_ENV === 'development') {
  Vue.use(new vConsole());
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
