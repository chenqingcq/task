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
  taskExecutors: [
    [{
        isSelected: false,
        executor: '李秋',
        startTime: '2018/4/10',
        endTime: '2018/4/30',
        updated: 15,
        comments: 10,
        progress: .5,
        taskname: '展台基础工作',
        id: '0',
        userId: '001',
        endDate: '2018/4/26',
        userIcon: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
      },
      {
        isSelected: false,
        executor: '李秋',
        startTime: '2018/4/12',
        endTime: '2018/4/30',
        updated: 15,
        comments: 10,
        taskname: '车展基础工作',
        id: '1',
        userId: '002',
        endDate: '2018/4/26',
        userIcon: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
      }
    ],
    [{
      isSelected: false,
      executor: '吉姆',
      startTime: '2018/4/11',
      endTime: '2018/4/30',
      updated: 15,
      comments: 10,
      taskname: '舞台基础工作',
      id: '0',
      userId: '003',
      endDate: '2018/4/26',
      userIcon: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
    }],
    [{
        isSelected: false,
        executor: '山姆',
        startTime: '2018/4/11',
        endTime: '2018/4/30',
        updated: 15,
        taskname: '车展基础工作',
        comments: 10,
        id: '0',
        userId: '004',
        endDate: '2018/4/26',
        userIcon: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
      },
      {
        isSelected: false,
        executor: '山姆',
        startTime: '2018/4/11',
        endTime: '2018/4/30',
        updated: 15,
        comments: 10,
        taskname: '车展基础工作',
        id: '1',
        userId: '005',
        endDate: '2018/4/26',
        userIcon: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"

      }
    ],
    [{
      isSelected: false,
      executor: '安迪',
      startTime: '2018/4/11',
      endTime: '2018/4/30',
      updated: 15,
      comments: 10,
      taskname: '车展基础工作',
      id: '0',
      userId: '006',
      endDate: '2018/4/26',
      userIcon: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
    }],
    [{
      isSelected: false,
      executor: '比伯',
      startTime: '2018/4/11',
      endTime: '2018/4/30',
      updated: 15,
      comments: 10,
      taskname: '车展基础工作',
      id: '1',
      userId: '008',
      endDate: '2018/4/26',
      userIcon: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
    }],
    [{
      isSelected: false,
      executor: '刘观',
      startTime: '2018/4/11',
      endTime: '2018/4/30',
      updated: 15,
      comments: 10,
      taskname: '车展基础工作',
      id: '1',
      userId: '008',
      endDate: '2018/4/26',
      userIcon: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
    }],
    [{
      isSelected: false,
      executor: '李明',
      startTime: '2018/4/11',
      endTime: '2018/4/30',
      updated: 15,
      comments: 10,
      taskname: '车展基础工作',
      id: '1',
      userId: '008',
      endDate: '2018/4/26',
      userIcon: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
    }],
  ],

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
  user(state, data) {
    state.user.headImage = data.headImage;
    state.user.username = data.username;
    state.user.token = data.token;
    state.user.userId = data.userId;
  },
  [types.SET_TASKTHEME](state, value) {
    state.taskTheme = value;
  },
  [types.SET_TASK_EXECUTOR](state, val) {
    console.log(val);
    state.taskExecutor = {
      "username": val[0].executor,
      userId: val[0].userId
    };
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
