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
  taskRole: '',
  taskId: '',
  userId: '',
  taskSettings:'',
  taskExecutors: [],
}
const mutations = {
  [types.SET_USER_TYPE](state, type) {
    state.user.type = type;
  },
  bevip(state) {
    state.user.isvip = 1;
  },
  [types.SET_TASKID](state, taskId) {
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
  [types.SET_USER_ROLE](state, role) {
    state.role = role;
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
  [types.SET_TASK_SETTINGS](state, val) {
    state.taskSettings = val;
  } 
};

export default {
  state,
  mutations
}
