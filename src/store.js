import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgLeft: 0
  },
  mutations: {
    setBgLeft(state, value) {
      state.bgLeft = value
    }
  }
})
