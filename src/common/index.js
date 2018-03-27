/**
 * Created by hejiahui on 2018/3/27.
 */
// 开关
import Switch from './base/switch/switch.vue'
// 底部 会展logo--应用商店
import bottomLogoSign from './base/bottomLogoSign'

const install = Vue => {
  // 开关
  Vue.component(Switch.name, Switch) // 页面结构的占位组件
  // 底部 会展 logo -- 应用商店
  Vue.component(bottomLogoSign.name, bottomLogoSign)

}

export default install
