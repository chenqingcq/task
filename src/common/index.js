/**
 * Created by hejiahui on 2018/3/27.
 */
// 开关
import Switch from './base/switch/switch.vue'
// 底部 会展logo--应用商店
import bottomLogoSign from './base/bottomLogoSign'

// 日历
import calendar from './base/calendar'

// 时间选择器
import dateTimer from './base/vux-datetime/index.vue' // 时间选择器


const install = Vue => {
  // 开关
  Vue.component(Switch.name, Switch) // 页面结构的占位组件
  // 底部 会展 logo -- 应用商店
  Vue.component(bottomLogoSign.name, bottomLogoSign)
  // 日历
  Vue.component(calendar.name, calendar)
  // 日期选择器
  Vue.component(dateTimer.name, dateTimer)


}

export default install
