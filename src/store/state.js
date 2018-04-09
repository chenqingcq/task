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

export default state
