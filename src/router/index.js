import Vue from 'vue'
import Router from 'vue-router'
//import Task from '@/components/Task.vue'

import demo from './map/demo'
import _demo from './test/demo'

Vue.use(Router)

export default new Router({
  routes: [
    ...demo,
    ..._demo
  ]
})
