/**
 * Created by hejiahui on 2018/3/27.
 */
/* 测试 */
const Demo = resolve => require(['@/components/demo'], resolve) // 测试demo


export default [
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
    meta: {
      title : '测试页面' ,
      // 是否显示 底部栏 会展 logo
      isShowBottomSign : true
    }
  }
]
