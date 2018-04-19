/**
 * Created by hejiahui on 2018/3/28.
 */

import slideBar from './slideBar.vue'
// 周／月 样式 计算
import proccesComputed from './mixis/processComputed'

//vuex
import { mapGetters } from 'vuex'

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

      taskList : [{
        id: 0 ,
        // 进行中
        startTime : +new Date('2018-04-01') , // 开始时间
        endTime : +new Date('2018-04-13'),  // 结束时间
        completeDate : +new Date('2018-04-13'),  // 结束时间
        status : 'pending' , // 状态
        process : 30,   // 进度
        text : '正在进行',  // 文案
        isSaw : false ,  // 是否已经查看
        isLike : true , // 是否已经关注
      },
      {
        id: 1 ,
        // 提前完成
        startTime : +new Date('2018-04-02') ,
        endTime : +new Date('2018-04-13'),
        completeDate: +new Date('2018-04-03'),
        status : 'aheadCompleted' ,
        process : 90,
        text : '提前一天通过',
        isSaw : true ,
        isLike : true
      },
      {
        id: 2 ,
        // 超时
        startTime : +new Date('2018-04-03') ,
        endTime : +new Date('2018-04-13'),
        status : 'outDate' ,
        text : '超时一天',
        process : 100,
        isSaw : false ,
        isLike : false , // 是否已经关注
      },
      {
        id: 3 ,
        // 超时
        startTime : +new Date('2018-04-01') ,
        endTime : +new Date('2018-04-07'),
        status : 'outDate' ,
        text : '超时五天',
        process : 100,
        isSaw : false ,
        isLike : false , // 是否已经关注
      },
        {
          id: 3 ,
          // 超时
          startTime : +new Date('2018-04-01') ,
          endTime : +new Date('2018-04-09'),
          status : 'outDate' ,
          text : '超时五天',
          process : 100,
          isSaw : false ,
          isLike : false , // 是否已经关注
        },
      {
        id: 4 ,
        // 关闭
        startTime : +new Date('2018-04-01') ,
        endTime : +new Date('2018-04-07'),
        status : 'closed' ,
        text : '已关闭',
        process : 100,
        isSaw : false ,
        isLike : false , // 是否已经关注
      },

      {
        id: 5 ,
        // 按时完成
        startTime : +new Date('2018-04-06') ,
        endTime : +new Date('2018-04-13'),
        status : 'completed' ,
        process : 100,
        isSaw : true ,
        isLike : false , // 是否已经关注
      }] ,
      weekdays: [],
      monthDates : [],

    }
  },
  mounted(){

  },
  components:{
    slideBar
  },
  computed:{
    ...mapGetters({
      role : 'getProjectRole',
      themeName : 'getProjectThemeName',
      projectId : 'getProjectId'
    })
  },
  methods:{
    // 周／月
    statusChange(status){
      this.isMonthMode = status
    },
    addTask(){
      if( this.taskList.length == 0 ){
        this.$dialog.info({
          placeholder : '请填写项目名称',
        })
      }
      else{
        //this.$loading()
        //setTimeout(()=>{
        //  this.$loadingClose()
        //},1000)
        if( this.role == 'visitor'){
          this.$refs.slide.newAproject()
        }
        else {
          this.$router.push('/addTaskSetting')
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
      this.$router.push(`/taskDetail?taskId=${item.id}`)
    },
    showSlideBar(){
      this.$refs.slide.open()
    },
    onHideSlideBar(){
      console.log('hello slidebar')
    },
    changeProject(){
      console.log('change', this.projectId)

    },
    watchOpenSwipe(index){
      console.log('index' , index)
      this.swipeOutIndex = index
    },
    watchCloseSwipe(index){
      this.swipeOutIndex = -1
    }
  }
}
