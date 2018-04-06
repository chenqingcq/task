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
      nickname: 'jack',
      updated: 15,
      comments: 10,
      progress: .7,
      userId: '013161',
      userIcon: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
    },
    {
      isSelected: false,
      nickname: 'sam',
      updated: 10,
      comments: 20,
      progress: .5,
      userId: '212344',
      userIcon: "http://cdnq.duitang.com/uploads/item/201504/04/20150404H3338_N8Wir.jpeg"
    },
    {
      isSelected: false,
      nickname: 'smith',
      updated: 10,
      comments: 20,
      progress: .5,
      userId: '212344',
      userIcon: "http://img2.imgtn.bdimg.com/it/u=1224306677,1730366661&fm=27&gp=0.jpg"
    },
    {
      isSelected: false,
      nickname: 'jordon',
      updated: 10,
      comments: 20,
      progress: .9,
      userId: '212344',
      userIcon: "http://a-ssl.duitang.com/uploads/item/201404/15/20140415192752_JGUFz.jpeg"
    },
    {
      isSelected: false,
      nickname: 'mike',
      updated: 10,
      comments: 20,
      progress: .5,
      userId: '212344',
      userIcon: "http://img5.duitang.com/uploads/item/201609/26/20160926124027_vxRkt.jpeg"
    },
    {
      isSelected: false,
      nickname: 'simon',
      updated: 30,
      comments: 30,
      progress: .4,
      userId: '212344',
      userIcon: "http://img5.duitang.com/uploads/item/201412/04/20141204150752_vWUrc.jpeg"
    },
    {
      isSelected: false,
      nickname: 'ashe',
      updated: 60,
      comments: 50,
      progress: .2,
      userId: '212344',
      userIcon: "http://img5q.duitang.com/uploads/item/201503/21/20150321114038_fJyMS.jpeg"
    },
    {
      isSelected: false,
      nickname: 'james',
      updated: 10,
      comments: 20,
      progress: .8,
      userId: '212344',
      userIcon: "http://img1.imgtn.bdimg.com/it/u=1214248342,1256011437&fm=27&gp=0.jpg"
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
  }]

}

export default state
