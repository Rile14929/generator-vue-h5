import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';
import Home from '@/views/Home/index.vue';
import Statistic from '@/views/Home/Statistic/index.vue';
import History from '@/views/Home/History/index.vue';
import HistoryDetail from '@/views/Home/History/detail.vue';
import Bespeak from '@/views/Home/Bespeak/index.vue';
import Login from '@/views/Login/index.vue';

Vue.use(VueMeta, {
  keyName: 'page'
});
Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ]
});

export default router;
