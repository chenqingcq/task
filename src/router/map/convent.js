/**
 * Created by hejiahui on 2018/3/28.
 */
/*
* 项目 相关
* */
const Entry = resolve => require(['@/views/conventEntry/conventEntry'], resolve) // 项目-首页- 入口

const help = resolve => require(['@/views/help/help'], resolve) // 项目- 使用帮助

const msgTips = resolve => require(['@/views/msgTips/msgTips'], resolve) // 项目- 成功或者错误 或者404 信息

const section = resolve => require(['@/views/section/section'], resolve) // 项目- 节点查看或者添加

export default [
  {
    path: '/conventEntry',
    name: 'convententry',
    component: Entry,
    meta: {
      title : '任务约定' ,
      // 是否显示 底部栏 会展 logo
      isShowBottomSign : true
    }
  },
  {
    path: '/help',
    name: 'help',
    component: help,
    meta: {
      title : '使用帮助' ,
      // 是否显示 底部栏 会展 logo
      isShowBottomSign : false
    }
  },
  {
    path: '/msgTips',
    name: 'msgTips',
    component: msgTips,
    meta: {
      // 是否显示 底部栏 会展 logo
      isShowBottomSign : false,
      isWhiteBg: true
    }
  },{
    path: '/section',
    name: 'section',
    component: section,
    meta: {
      title : '节点信息' ,
      // 是否显示 底部栏 会展 logo
      isShowBottomSign : false
    }
  }
]
