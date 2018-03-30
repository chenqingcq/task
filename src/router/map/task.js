/**
 * Created by hejiahui on 2018/3/28.
 */

/*
 * 任务 相关
 * */
const addTaskSetting = resolve => require(['@/views/task/addTaskSetting/addTaskSetting'], resolve) // 任务- 新建时的设置

const appointMessager = resolve => require(['@/views/task/appointMessager/appointMessager'], resolve) // 任务- 指定管理员列表

const taskDetail = resolve => require(['@/views/task/taskDetail/taskDetail'], resolve) // 任务- 详情或者任务提交

const taskHistoryOrUpdate = resolve => require(['@/views/task/taskHistoryOrUpdate/taskHistoryOrUpdate'], resolve) // 任务- 上传历史或者任务提交

export default [
  {
    path: '/addTaskSetting',
    name: 'addTaskSetting',
    component: addTaskSetting,
    meta: {
      title : '添加任务' ,
      // 是否显示 底部栏 会展 logo
      isShowBottomSign : false
    }
  },
  {
    path: '/appointMessager',
    name: 'appointMessager',
    component: appointMessager,
    meta: {
      title : '指定负责人' ,
      // 是否显示 底部栏 会展 logo
      isShowBottomSign : false
    }
  },
  {
    path: '/taskDetail',
    name: 'taskDetail',
    component: taskDetail,
    meta: {
      title : '任务详情' ,
      // 是否显示 底部栏 会展 logo
      isShowBottomSign : true
    }
  },
  {
    path: '/taskHistoryOrUpdate',
    name: 'taskHistoryOrUpdate',
    component: taskHistoryOrUpdate,
    meta: {
      title : '上传历史' ,
      // 是否显示 底部栏 会展 logo
      isShowBottomSign : false,
      isWhiteBg: true
    }
  }
]
