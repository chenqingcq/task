const state = {
  user: {
    username: "",
    nickname: "",
    token: "",
    type: "logout",
    headImage: '',
    userId: ''
  },
  taskExecutor: [{
    isSelected: false,
    nickname: '',
    updated: 0,
    comments: 0,
    progress: 0,
    userId: '',
    userIcon: ""
  }],
  taskSetting: [{
    id:0,
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
  }]

}

export default state
