/**
 * Created by hejiahui on 2018/3/28.
 */

import slideBar from './slideBar.vue'
export default {
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

      projectList : [{
        // 进行中
        startTime : +new Date('2018-04-01') , // 开始时间
        endTime : +new Date('2018-04-13'),  // 结束时间
        status : 'pending' , // 状态
        process : 30,   // 进度
        text : '正在进行',  // 文案
        isSaw : false ,  // 是否已经查看
        isLike : true , // 是否已经关注
      },
      {
        // 提前完成
        startTime : +new Date('2018-04-02') ,
        endTime : +new Date('2018-04-13'),
        completeDate: +new Date('2018-04-03'),
        status : 'aheadCompleted' ,
        process : 90,
        text : '提前一天完成',
        isSaw : true ,
        isLike : true
      },
      {
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
        // 超时
        startTime : +new Date('2018-04-01') ,
        endTime : +new Date('2018-04-7'),
        status : 'outDate' ,
        text : '超时五天',
        process : 100,
        isSaw : false ,
        isLike : false , // 是否已经关注
      },
      {
        // 关闭
        startTime : +new Date('2018-04-01') ,
        endTime : +new Date('2018-04-7'),
        status : 'closed' ,
        text : '已关闭',
        process : 100,
        isSaw : false ,
        isLike : false , // 是否已经关注
      },

      {
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
    console.log(11111, this.computedDate(new Date()))
  },
  components:{
    slideBar
  },
  methods:{

    statusClass(list){
      const status = list.status
      let result = ''
      switch (status){
        case 'closed' : result = status;break ;
        case 'completed' : result = 'complete' ;break;
        case 'pending' : result = status ;break ;
        case 'outDate' : result = status ;break ;
      }
      return result

    },

    computedIsSameDay(date1, date2){
      var d1 = this.computedDate(date1)
      var d2 = this.computedDate(date2)
      return d1 == d2 ? true : false
    },
    computedDate(date){ // date 对象
      if( typeof date  == 'number'){
        date = new Date(date)
      }
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      var d = date.getDate()
      if( m < 10 ){
        m = '0' + m
      }
      if( d < 10 ){
        d = '0' + d
      }
      return  y +'-'+ m + '-' + d
    },
    // 周／月
    statusChange(status){

      this.isMonthMode = status
    },
    addTask(){
      if( this.projectList.length == 0 ){
        this.$dialog.info({
          placeholder : '请填写项目名称',
        })
      }
      else{
        //this.$loading()
        //setTimeout(()=>{
        //  this.$loadingClose()
        //},1000)
        this.$router.push('/addTaskSetting')
      }
    },
    getDateData(data){
      console.log(data,11111)
      this.$nextTick(()=>{
        this.weekdays = data.activeWeekDays
        this.monthDates = data.months
      })

    }
  }
}
