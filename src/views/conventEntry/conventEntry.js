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
// 微信分享
import { WxShareApi } from '@/utils/wx.js'
// vm
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
    //this.$wechat.weChatShare({
    //  title: '测试标题',
    //  desc: '分享描述'
    //})
    WxShareApi({
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
      projectName : 'getProjectThemeName',
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
          this.$router.push(`/addTaskSetting?projectId=${this.projectId}&projectName=${this.projectName}`)
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
      const data = []
      const target = taskList
      return target.map((val,key)=>{
        const status = val.taskStatus
        let resStatus = '',
            text = '' ,
            dateStr = '' // 时间间隔
        switch (status){
          case 0: resStatus = 'pending' ;text = '未开始' ;break;
          case 1: resStatus = 'pending' ;text = '正在进行' ;break;
          case 2: resStatus = 'closed' ;text = '已关闭' ;break ;
          case 3: resStatus = 'rejected' ;text = '已拒绝' ; break ;
          case 4: resStatus = 'completed';text = '完成通过';break;
          case 5: resStatus = 'aheadCompleted';break;
          case 6: resStatus = 'outDate' ;break;
          case 7: resStatus = 'outDate' ;break;
        }
        val.status = resStatus
        val.completeDate = Number(val.passTime)
        val.startTime = Number( val.startTime )
        val.endTime = Number( val.endTime )
        val.passTime = Number( val.passTime )
        if( resStatus == 'aheadCompleted' ){
          // 天数
          dateStr = numberTransformChinese( parseInt(( val.endTime - val.completeDate )/86400000 ))
          console.log( dateStr , val.completeDate , val.startTime ,'tiqian')
          text = `提前${dateStr}天完成`
        }
        else if( resStatus == 'outDate' ){
          // 天数
          dateStr = numberTransformChinese( parseInt(( (+new Date()) - val.endTime )/86400000 ))
          text = `超时${dateStr}天`
        }
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
    closeTask( list ){
      let self = this
      const taskId = list.taskId
      this.$dialog.confirm({
        message: "确定关闭该任务?",
        confirm() {
          Convent.closeTask(taskId)
            .then(res => {
              console.log(res);
                self.$dialog.notice({
                  state: "pass",
                  title: "该任务已关闭",
                  task: self.taskName
                });
                this.page =  {
                  pageNum : 1 ,
                    pageSize : 10 ,
                    hasMore : true
                }
                this.getTasksList()
            })
            .catch(err => {
              self.$toast.show("提交失败!", 1000);
              self.$router.push("conventEntry"); //提交失败之后跳转至首页?
            });
        }
      })
    }
  }
}
