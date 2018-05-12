import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

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

router.afterEach((from) => {
  const maps = {
    home: 0,
    result: '-70%',
    feifan: '-140%',
    join: '-210%'
  }
  store.commit('setBgLeft', maps[from.name])
})

export default router
