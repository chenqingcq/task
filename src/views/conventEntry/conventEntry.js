/**
 * Created by hejiahui on 2018/3/28.
 */

import slideBar from './slideBar.vue'
// 周／月 样式 计算
import proccesComputed from './mixis/processComputed'
// 阿拉伯数字转 中文
import { numberTransformChinese } from '@/utils/transform'
//vuex
import { mapGetters } from 'vuex'
// services
import { Convent } from '@/services'

export default {
  mixins:[proccesComputed],
  data(){
    return{

      isShowSlideBar : false ,
      // 是否月模式
      isMonthMode :true ,
      // 准时完成
      completeLogo: require('@/assets/img/image-trophy.png') ,
      // 提前完成
      aheadLogo: require('@/assets/img/image-medal.png'),

      todayTime : new Date() , // 今天的时间

      weekStrArr : ['日', '一', '二', '三', '四', '五', '六'] ,
      // 左滑开关 索引
      swipeOutIndex : -1 ,

      taskList : [] ,
      weekdays: [],
      monthDates : [],
      page: {
        pageNum : 1 ,
        pageSize : 10 ,
        hasMore : true
      }
    }
  },
  mounted(){
    this.getTasksList()
    this.$wechat.weChatShare({
      title: '测试标题',
      desc: '分享描述'
    })
    //this.taskList = this.dealWithTaskList()
  },
  components:{
    slideBar
  },
  computed:{
    ...mapGetters({
      'user': 'user',
      role : 'getProjectRole',
      themeName : 'getProjectThemeName',
      projectId : 'getProjectId'
    }),
    hasMore(){
      return !this.page.hasMore
    }
  },
  methods:{
    loadMore(){
      console.log('loadMore');
      this.getTasksList()
    },
    // 周／月
    statusChange(status){
      this.isMonthMode = status
    },
    addTask(){
      if( !this.projectId  ){
        this.$dialog.info({
          placeholder : '请填写项目名称',
        })
      }
      else{
        if( this.role != 'creator'){
          this.$refs.slide.newAproject()
        }
        else {
          this.$router.push(`/addTaskSetting`)
        }
      }
    },
    // 日历组件里的 发出回调
    getDateData(data){
      this.$nextTick(()=>{
        this.weekdays = data.activeWeekDays
        this.monthDates = data.months
      })
    },
    linkToTaskDetail( item ){
      this.$router.push(`/taskDetail?taskId=${item.taskId}`)
    },
    showSlideBar(){
      this.$refs.slide.open()
    },
    onHideSlideBar(){
      console.log('hello slidebar')
    },
    getTasksList(){
      const { pageNum, pageSize ,hasMore } = this.page
      if( !hasMore ){
        return
      }
      this.page.hasMore = false
      Convent.tasksOfProject({
        projectId : this.projectId ,
        pageNum ,
        pageSize
      }).then(res=>{
        let oldList = this.taskList , newList = []

        if(res.data.length){
          newList = oldList.concat( this.dealWithTaskList(res.data) )
          this.taskList = newList
          this.todayTime = newList[0].serverTime
        }
        else{
          this.page.hasMore = false
          return
        }
        this.page.hasMore = res.page.isLoaded
        if( this.page.hasMore ){
          this.page.pageNum++
        }
      })
    },
    changeProject(){
      console.log('change', this.projectId)
      this.taskList = []
      // reset
      this.page =  {
        pageNum : 1 ,
          pageSize : 10 ,
          hasMore : true
      }
      this.getTasksList()
    },
    watchOpenSwipe(index){
      console.log('index' , index)
      this.swipeOutIndex = index
    },
    watchCloseSwipe(index){
      this.swipeOutIndex = -1
    },
    dealWithTaskList( taskList = [] ){
      const data = [{
        taskId: 0 ,
        nickname : 'paul' ,
        headImage : 'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
        // 进行中
        startTime : +new Date('2018-04-01') , // 开始时间
        endTime : +new Date('2018-04-24'),  // 结束时间
        completeDate : +new Date('2018-04-24'),  // 结束时间
        //status : 'pending' , // 状态
        taskStatus : 0 ,
        process : 30,   // 进度
        taskName : '会展任务一',
        text : '正在进行',  // 文案
        isBrowse	 : false ,  // 是否已经查看
        isStar : true , // 是否已经关注 isStar	Integer	是否关注任务 0:否 1:是
      },
        {
          taskId: 1 ,
          nickname : 'paul' ,
          headImage : 'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
          // 提前完成
          startTime : +new Date('2018-04-02') ,
          endTime : +new Date('2018-04-13'),
          completeDate: +new Date('2018-04-03'),
          //status : 'aheadCompleted' ,
          taskStatus : 2 ,
          process : 90,
          taskName : '会展任务一',
          text : '提前一天通过',
          isBrowse	 : true ,
          isStar : true
        },
        {
          taskId: 2 ,
          nickname : 'paul' ,
          headImage : 'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
          // 超时
          startTime : +new Date('2018-04-03') ,
          endTime : +new Date('2018-04-13'),
          status : 'outDate' ,
          text : '超时一天',
          process : 100,
          taskStatus : 3 ,
          taskName : '会展任务一',
          isBrowse	 : false ,
          isStar : false , // 是否已经关注
        },
        {
          taskId: 3 ,
          nickname : 'paul' ,
          headImage : 'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
          // 超时
          startTime : +new Date('2018-04-01') ,
          endTime : +new Date('2018-04-07'),
          //status : 'outDate' ,
          taskStatus : 3 ,
          text : '超时五天',
          process : 100,
          taskName : '会展任务一',
          isBrowse	 : false ,
          isStar : false , // 是否已经关注
        },
        {
          taskId: 3 ,
          nickname : 'paul' ,
          headImage : 'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
          // 超时
          startTime : +new Date('2018-04-01') ,
          endTime : +new Date('2018-04-09'),
          //status : 'outDate' ,
          taskStatus : 3 ,
          text : '超时五天',
          process : 100,
          taskName : '会展任务一',
          isBrowse	 : false ,
          isStar : false , // 是否已经关注
        },
        {
          taskId: 4 ,
          nickname : 'paul' ,
          headImage : 'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
          // 关闭
          startTime : +new Date('2018-04-01') ,
          endTime : +new Date('2018-04-07'),
          //status : 'closed' ,
          taskStatus : 4 ,
          text : '已关闭',
          process : 100,
          taskName : '会展任务一',
          isBrowse	 : false ,
          isStar : false , // 是否已经关注
        },

        {
          taskId: 5 ,
          nickname : 'paul' ,
          headImage : 'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
          // 按时完成
          startTime : +new Date('2018-04-06') ,
          endTime : +new Date('2018-04-13'),
          //status : 'completed' ,
          taskStatus : 1 ,
          process : 100,
          taskName : '会展任务一',
          isBrowse	 : true ,
          isStar : false , // 是否已经关注
        }]

      const target = taskList
      return target.map((val,key)=>{
        const status = val.taskStatus
        let resStatus = '',
            text = '' ,
            dateStr = '' // 时间间隔
        switch (status){
          case 0: resStatus = 'pending' ;text = '正在进行' ;break;
          case 1: resStatus = 'completed';text = '完成通过';break;
          case 2: resStatus = 'aheadCompleted';break;
          case 3: resStatus = 'outDate' ;break;
          case 4: resStatus = 'closed' ;text = '已关闭' ;break ;
        }
        val.status = resStatus

        if( resStatus == 'aheadCompleted' ){
          // 天数
          dateStr = numberTransformChinese( parseInt(( val.completeDate - val.startTime )/86400000 ))
          text = `提前${dateStr}天完成`
        }
        else if( resStatus == 'outDate' ){
          // 天数
          dateStr = numberTransformChinese( parseInt(( (+new Date()) - val.startTime )/86400000 ))
          text = `超时${dateStr}天`
        }
        val.completeDate = Number(val.passTime)
        val.startTime = Number( val.startTime )
        val.endTime = Number( val.endTime )
        val.passTime = Number( val.passTime )
        val.text = text
        return val
      })
    },
    standUpTask(list , index){
      const taskId = list.taskId
      Convent.standUpTask(taskId)
      .then(res=>{
        const c_task = this.taskList[index]
        c_task.position = '1'
        this.taskList.splice(index, 1)
        this.taskList.unshift(c_task)
      })
    },
    sitDownTask(list, index){
      const taskId = list.taskId
      Convent.sitDownTask(taskId)
      .then(res=>{
        const c_task = this.taskList[index]
        c_task.position = '2'
        this.taskList.splice(index, 1)
        this.taskList.push(c_task)
      })
    },
    closeTask( list, index ){
      const taskId = list.taskId
      Convent.recoverTask(taskId)
      .then(res=>{
          this.page =  {
            pageNum : 1 ,
              pageSize : 10 ,
              hasMore : true
          }
          this.getTasksList()
      })
    }
  }
}
