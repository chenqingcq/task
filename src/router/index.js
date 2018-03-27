import Vue from 'vue'
import Router from 'vue-router'
import Task from '@/components/Task.vue'

import demo from './map/demo'

Vue.use(Router)

export default new Router({
  routes: [
    ...demo,
    {
      path: '/',
      redirect:'/task'
    },
    {
      path: '/task',
      name: 'task',
      component:Task
    }
  ]
})
