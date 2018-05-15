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
      isMonthMode :false ,
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
    const projectId = this.$route.query.projectId
    if( projectId ){
      Convent.projectInfo({
        projectId
      }).then(res=>{
        this.$refs.slide.selectProject(res.data)
        // 去掉记录
        this.$router.push('/conventEntry')
      })
    }

    //this.$wechat.weChatShare({
    //  title: '测试标题',
    //  desc: '分享描述'
    //})
    WxShareApi({
      title: '测试标题',
      desc: '分享描述',
      imgUrl: location.protocol + '//task-1256472463.cos.ap-guangzhou.myqcloud.com/wxshare-logo.png' // 分享图标
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
          this.page.hasMore = true
          this.page.pageNum+=1
          console.log(this.page.pageNum)
        }
        else{
          this.page.hasMore = false
          return
        }
        //this.page.hasMore = res.page.isLoaded
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
        let status = val.taskStatus
        let resStatus = '',
            text = '' ,
            dateStr = '' // 时间间隔
        const serverTime = Number(val.serverTime)
        const endTime = Number(val.endTime)

        if( status == 1 && serverTime > endTime && !this.computedIsSameDay(serverTime, endTime)  ){
          status = 8
        }
        switch (status){
          case 0: resStatus = 'pending' ;text = '未开始' ;break;
          case 1: resStatus = 'pending' ;text = '正在进行' ;break;
          case 2: resStatus = 'closed' ;text = '已关闭' ;break ;
          case 3: resStatus = 'rejected' ;text = '已拒绝' ; break ;
          case 4: resStatus = 'completed';text = '完成通过';break;
          case 5: resStatus = 'aheadCompleted';break;
          case 6: resStatus = 'outDate' ;text = '超时完成';break;
          case 7: resStatus = 'outDate' ;text = '超时未接受';break;
          case 8: resStatus = 'outDate' ;break;
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
          text = `提前${dateStr}天通过`
        }
        else if( resStatus == 'outDate' && status != 7 && status == 8 ){
          console.log('hhhh')
          // 天数
          dateStr = numberTransformChinese( parseInt(( serverTime - endTime )/86400000 ))
          console.log( (serverTime - endTime )/86400000  )
          text = `超时${dateStr}天`
        }
        val.text = text
        return val
      })
    },
    // 更新列表
    updateTaskList(){
      this.page =  {
        pageNum : 1 ,
        pageSize : 10 ,
        hasMore : true
      }
      this.taskList = []
      this.getTasksList()
    },
    // 置顶
    standUpTask(list , index){
      const taskId = list.taskId
      Convent.standUpTask(taskId)
      .then(res=>{
        //const c_task = this.taskList[index]
        //c_task.position = '1'
        //this.taskList.splice(index, 1)
        //this.taskList.unshift(c_task)
        this.$toast.show('置顶成功')
        this.updateTaskList()
      })
    },
    // 置底
    sitDownTask(list, index){
      const taskId = list.taskId
      Convent.sitDownTask(taskId)
      .then(res=>{
        this.$toast.show('置底成功')
        //const c_task = this.taskList[index]
        //c_task.position = '2'
        //this.taskList.splice(index, 1)
        //this.taskList.push(c_task)
        this.updateTaskList()
      })
    },
    // 取消置顶或者置顶
    recoverTask( list ){
      const taskId = list.taskId
      const position = list.position
      Convent.recoverTask(taskId)
        .then(res=>{
          if( position == 0 ) {
            this.$toast.show('取消置顶')
          }
          else{
            this.$toast.show('取消置底')
          }
          this.updateTaskList()
        })
    },
    // 关闭任务
    closeTask( list ){
      let self = this
      const taskId = list.taskId
      this.$dialog.confirm({
        message: "确定关闭该任务?",
        confirm() {
          Convent.closeTask(taskId)
            .then(res => {
              self.updateTaskList()
              console.log(res);
                self.$dialog.notice({
                  state: "pass",
                  title: "该任务已关闭",
                  task: self.taskName
                });
            }, err=>{
                self.$toast.show("提交失败!", 1000);
                //self.$router.push("conventEntry"); //提交失败之后跳转至首页?
            })

        }
      })
    }
  }
}
