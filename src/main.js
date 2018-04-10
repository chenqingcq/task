// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import store from './store'

import VueLazyLoad from 'vue-lazyload'//图片懒加载
Vue.use(VueLazyLoad,{
    // error:'./static/error.png',
    loading:'@/assets/img/icon-nominee.png'
})

// 项目组件
import '../src/common/base/dialog'
import Load from '@/common/base/loading'
import AppCom from '../src/common/index.js'

import './assets/css/animate.less'

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
