/**
 * Created by hejiahui on 2018/3/27.
 */
import Vue from 'vue'
// loading
import Load from '@/common/base/loading'
// 开关
import Switch from './base/switch/switch.vue'
// 底部 会展logo--应用商店
import bottomLogoSign from './base/bottomLogoSign'

// 日历
import calendar from './base/calendar'

// 时间选择器
import dateTimer from './base/vux-datetime/index.vue'

// 自定义弹层
import pop from './base/pop/index.vue' //
// 左滑删除
import swipeout from './base/swipeout/swipeout.vue'
// 滑动按钮
import swipeBtn from './base/swipeout/swipe-btn.vue'

// 项目组件 vue.prototype 扩展
import '@/common/base/dialog'
import '@/common/base/toast/extend.js'

Vue.use(Load)

const install = Vue => {
  // 开关
  Vue.component(Switch.name, Switch) // 页面结构的占位组件
  // 底部 会展 logo -- 应用商店
  Vue.component(bottomLogoSign.name, bottomLogoSign)
  // 日历
  Vue.component(calendar.name, calendar)
  // 日期选择器
  Vue.component(dateTimer.name, dateTimer)
  //
  Vue.component( pop.name, pop )
  //
  Vue.component( swipeout.name, swipeout )
  // swipeBtn
  Vue.component( swipeBtn.name, swipeBtn )
}


export default install
