import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import Hello2 from '@/components/hello2'
import Hello3 from '@/components/hello3'
import Header from'@/components/header/header'
import VueRouter from 'vue-router';

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component:  Hello 
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/hello2',
      name: 'hello2',
      component: Hello2
    },
    {
      path: '/hello3',
      name: 'hello3',
      component: Hello3
    },
  ]
})
