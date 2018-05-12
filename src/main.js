import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './main.css'

Vue.config.productionTip = false

Vue.mixin({
  data: () => ({
    i: 0
  }),
  mounted() {
    if (this.$options.order) {
      const {end, secs = 1.5} = this.$options.order
      const timer = setInterval(() => {
        this.i += 1
        if (this.i == end) clearInterval(timer)
      },secs * 1000)
    }
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
