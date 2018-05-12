import Vue from 'vue'
import router from './router'
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
  router,
  render: h => h('router-view')
}).$mount('#app')
