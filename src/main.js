// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import wx from '@/utils/wx'
import router from './router'
import '@/filters' // 过滤器
import 'lib-flexible/flexible.js'
import store from './store'
import VueLazyLoad from 'vue-lazyload'//图片懒加载

// 通用组件
import AppCom from '../src/common/index.js'

//services
import '@/services/ajax/netaxios.js'
import axios from 'axios'

wx.install()

Vue.use(VueLazyLoad,{
  // error:'./static/error.png',
  loading:'@/assets/img/icon-nominee.png'
})
Vue.use(AppCom);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


/**
 * 输入框自动获得焦点事件
 * */
Vue.directive('autofocus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()


  },
  update(){

    function isIOS (){
      var u = navigator.userAgent
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
      return isiOS
    }
    Vue.prototype.$stv = setInterval(function(){
      console.log(1)
      el.scrollIntoView(isIOS())
    },1000)
  }
  //也可以用update,update就是当页面有操作的时候就触发，比如点击按钮，输入框输入都算。
  //有一个要注意的就是，就是你页面有几个input,比如一个input绑定了v-focus,一个没有绑定。你在没绑定v-focus的input输入时，绑定了v-focus的input就是自动获取焦点，这是个bug.
  //update: function (el) {
  //el.focus()
  //}
});
