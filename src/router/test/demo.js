/**
 * Created by chenqing on 2018/3/27.
 */
/* 测试 */
const demo = resolve => require(['./comments.vue'], resolve) // 测试demo


export default [
  {
    path: '/comments',
    name: 'comments',
    component: demo,
    meta: {
      title : '测试页面' ,
    }
  }
]
