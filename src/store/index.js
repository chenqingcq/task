import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'


const store = new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations',
  ], () => {


    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations'),
      modules:{
      }
    })
  })
}

export default store
