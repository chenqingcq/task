// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import store from './store'

// 项目组件
import '../src/common/base/dialog'
import Load from '@/common/base/loading'
import AppCom from '../src/common/index.js'

Vue.use(AppCom);
Vue.use(Load)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
