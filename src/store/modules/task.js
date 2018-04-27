/**
 * Created by hejiahui on 2018/4/10.
 */
import * as types from "../mutation-types";

let state = {
  user: {
    username: "",
    nickname: "",
    token: "",
    type: "logout",
    headImage: '',
    userId: ''
  },
  taskTheme: '',
  taskExecutor: '',
  taskId :'',
  userId:'',
  taskExecutors: [],
  taskSetting: [{
    id: 0,
    taskTheme: '',
    taskName: '',
    taskDesc: '',
    startTime: '',
    endTime: '',
    standard: '',
    taskExecutor: "",
    allowedCreate: true,
    isPublic: false,
    membersCanSee: true,
    othersCanSee: []
  }],
}
const mutations = {
  [types.SET_USER_TYPE](state, type) {
    state.user.type = type;
  },
  bevip(state) {
    state.user.isvip = 1;
  },
  [types.SET_TASKID](state,taskId){
    state.taskId = taskId;
  },
  user(state, data) {
    state.user.headImage = data.headImage;
    state.user.username = data.username;
    state.user.token = data.token;
    state.user.userId = data.userId;
  },
  [types.SET_TASKTHEME](state, value) {
    state.taskTheme = value;
  },
  [types.SET_USER_ID](state, value) {
    state.userId = value;
  },
  [types.SET_TASK_EXECUTOR](state, taskExecutor) {
    state.taskExecutor = taskExecutor
  },
  [types.SORT_TASK_EXECUTOR](state, type) {
    state.taskExecutor.sort((a, b) => {
      return b[type] - a[type];
    });
  },
  [types.ADD_TASK_EXECUTOR](state, member) { //添加执行人成员
    let _member = {
      isSelected: false,
      nickname: member,
      updated: 0,
      comments: 0,
      progress: 0,
      userId: "212344",
      userIcon: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
    };
    state.taskExecutor.push(_member);
  },
  [types.DELETE_TASK_EXECUTOR](state, index) {
    state.taskExecutor.splice(index, 1);
  },
  [types.SET_TASK](state, val) {
    let {
      taskTheme,
      taskName,
      taskDesc,
      startTime,
      endTime,
      standard,
      taskExecutor,
      allowedCreate,
      isPublic,
    } = val;
    state.taskSetting.push({
      taskTheme,
      taskName,
      taskDesc,
      startTime,
      endTime,
      standard,
      taskExecutor,
      allowedCreate,
      isPublic
    });
  }
};

export default {
  state,
  mutations
}
