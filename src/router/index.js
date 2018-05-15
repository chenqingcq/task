import Vue from 'vue'
import Router from 'vue-router'
//import Task from '@/components/Task.vue'

// 测试
import demo from './map/demo'
import _demo from './test/demo'
// 会展项目相关
import conventProject from './map/convent'
// 会展项目下的任务相关
import task from './map/task'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)


export default new Router({
  routes: [
    ...demo,
    ..._demo,
    ...conventProject ,
    ...task ,
  ]
})
