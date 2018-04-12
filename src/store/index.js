import Vue from 'vue'
import Vuex from 'vuex'
// 用于 解决页面刷新后的vuex 内存对象数据丢失的问题
import createPersist, { createStorage } from 'vuex-localstorage'

import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

// modules
import task from './modules/task'
import permission from './modules/permission'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {
    task ,
    permission
  },
  strict: debug,
  plugins: debug ?
    [createLogger(),createPersist({
      namespace: 'namespace-for-state',
      initialState: {},
      // ONE_WEEK
      expires: 7 * 24 * 60 * 60 * 1e3
    })]
    :
    [createPersist({
      namespace: 'namespace-for-state',
      initialState: {},
      // 一天后自动消失 one_Day
      expires:  24 * 60 * 60 * 1e3
    })]
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
