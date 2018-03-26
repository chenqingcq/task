import Vue from 'vue'
import Router from 'vue-router'
import Task from '@/components/Task.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
