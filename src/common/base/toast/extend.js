/**
 * Created by hejiahui on 2018/4/16.
 */
import Vue from 'vue'
import Toast from './toast'
// 显示的时间
const showTime = 1000
Vue.prototype.$toast = {
  show (message, duration = showTime, position = 'middle') {
    Toast({
      message,
      position,
      duration,
    })
  },
  close(){
    Toast.close()
  }
}


