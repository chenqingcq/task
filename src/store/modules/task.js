/**
 * Created by hejiahui on 2018/4/10.
 */
import * as types from "../mutation-types";

const state = {
  user: {
    username: "",
    nickname: "",
    token: "",
    type: "logout",
    headImage: '',
    userId: ''
  },
  taskTheme:'',
  taskExecutor: [{
    isSelected: false,
    nickname: 'jack',
    updated: 15,
    comments: 10,
    progress: .7,
    userId: '013161',
    userIcon: "http://img3.imgtn.bdimg.com/it/u=16550438,2220103346&fm=214&gp=0.jpg"
  },
    {
      isSelected: false,
      nickname: 'sam',
      updated: 10,
      comments: 20,
      progress: .5,
      userId: '212344',
      userIcon: "http://img3.imgtn.bdimg.com/it/u=16550438,2220103346&fm=214&gp=0.jpg"
    },
    {
      isSelected: false,
      nickname: 'smith',
      updated: 10,
      comments: 20,
      progress: .5,
      userId: '212344',
      userIcon: "http://img3.imgtn.bdimg.com/it/u=16550438,2220103346&fm=214&gp=0.jpg"
    },
    {
      isSelected: false,
      nickname: 'jordon',
      updated: 10,
      comments: 20,
      progress: .9,
      userId: '212344',
      userIcon: "http://img4.duitang.com/uploads/item/201605/29/20160529093324_mZPCi.jpeg"
    },
    {
      isSelected: false,
      nickname: 'mike',
      updated: 10,
      comments: 20,
      progress: .5,
      userId: '212344',
      userIcon: "http://img3.imgtn.bdimg.com/it/u=16550438,2220103346&fm=214&gp=0.jpgg"
    },
    {
      isSelected: false,
      nickname: 'simon',
      updated: 30,
      comments: 30,
      progress: .4,
      userId: '212344',
      userIcon:'http://img4.duitang.com/uploads/item/201605/29/20160529093324_mZPCi.jpeg'
    },
    {
      isSelected: false,
      nickname: 'ashe',
      updated: 60,
      comments: 50,
      progress: .2,
      userId: '212344',
      userIcon: "http://img3.imgtn.bdimg.com/it/u=16550438,2220103346&fm=214&gp=0.jpg"
    },
    {
      isSelected: false,
      nickname: 'james',
      updated: 10,
      comments: 20,
      progress: .8,
      userId: '212344',
      userIcon: "http://img4.duitang.com/uploads/item/201605/29/20160529093324_mZPCi.jpeg"
    }
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
    ispublic: false,
    membersCanSee: true,
    othersCanSee: []
  }],
}
const matutaions = {
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
  [types.SET_TASKTHEME](state,value){
    state.taskTheme = value;
  },
  [types.SET_TASK_EXECUTOR](state, val) {
    console.log(arguments);
    let i = 0;
    for (i; i < state.taskExecutor.length; i++) {
      if (i != val.index) {
        state.taskExecutor[i].isSelected = false;
      }
    }
    state.taskExecutor[val.index].isSelected = !val.isSelected;
  },
  [types.SORT_TASK_EXECUTOR](state, type) {
    state.taskExecutor.sort((a, b) => {
      return b[type] - a[type];
    });
  },
  [types.ADD_TASK_EXECUTOR](state, member) {//添加执行人成员
    let _member = {
      isSelected: false,
      nickname: member,
      updated: 0,
      comments: 0,
      progress: 0,
      userId: "212344",
      userIcon:
        "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
    };
    state.taskExecutor.push(_member);
  },
  [types.DELETE_TASK_EXECUTOR](state,index){
    state.taskExecutor.splice(index,1);
  },
  [types.SET_TASK](state, val) {
    let {
      id,
      taskTheme,
      taskName,
      taskDesc,
      startTime,
      endTime,
      standard,
      taskExecutor,
      allowedCreate,
      ispublic,
      membersCanSee,
      othersCanSee
      } = val;
    state.taskSetting.push({
      id,
      taskTheme,
      taskName,
      taskDesc,
      startTime,
      endTime,
      standard,
      taskExecutor,
      allowedCreate,
      ispublic,
      membersCanSee,
      othersCanSee
    });
  }
};

export default {
  state ,
  matutaions ,
}
