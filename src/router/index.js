import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import Header from'@/components/header/header'
// import VueRouter from 'vue-router';

import iView from 'iview';
import 'iview/dist/styles/iview.css';

// Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    }
  ]
})
