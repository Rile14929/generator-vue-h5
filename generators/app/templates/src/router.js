import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';
import Home from '@/views/Home/index.vue';

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
