import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Result from './components/Result'
import FeiFan from './components/FeiFan'
import Join from './components/Join'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'result',
      path: '/result/:role',
      component: Result
    },
    {
      name: 'feifan',
      path: '/feifan',
      component: FeiFan
    },
    {
      name: 'join',
      path: '/join',
      component: Join
    },
  ]
})

export default router
