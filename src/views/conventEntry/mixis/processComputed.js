/**
 * Created by hejiahui on 2018/4/9.
 *
 * className 计算
 */

export default{
  methods: {
    // 用 字符串 判断是否同一天
    computedIsSameDay(date1, date2 ,status ){
      var d1 = this.computedDate(date1)
      var d2 = this.computedDate(date2)
      //if(status){ test
      //  console.log(date2)
      //  console.log(d1, d2)
      //}
      return d1 == d2 ? true : false
    },
    computedDate(date){ // date 对象
      if( typeof date  == 'number'){
        date = new Date(date)
      }
      else if( typeof date  == 'string' ){
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

    // 是否空白状态格子
    computedIsBlank(list, dayItem){ // 列表，数组时间
      let computedIsSameDay = this.computedIsSameDay
      return ( list.startTime > dayItem.date || list.endTime < dayItem.date && list.status != 'outDate' )
        && !computedIsSameDay(list.startTime ,dayItem.date )
        && !computedIsSameDay(list.endTime ,dayItem.date )
    },
    //--是否在 开始～结束之间的这段时间-
    computedIsInRange( list, dayItem ){
      let computedIsSameDay = this.computedIsSameDay
      return  ( list.startTime < dayItem.date || computedIsSameDay(list.startTime ,dayItem.date ) )
        && list.endTime > dayItem.date
        && !computedIsSameDay(list.endTime ,dayItem.date )
    },

    // 开始～结束范围内的 样式显示
    computedInMonthRangeClass( list, dayItem ){
      let computedIsSameDay = this.computedIsSameDay,
        computedDate = this.computedDate ,
        todayTime = this.todayTime
      return [ list.status == 'outDate' && 'outDate', list.status == 'completed' && 'complete', list.status == 'aheadCompleted' ? ( list.completeDate > dayItem.date   ? 'complete' : 'pending'):'', list.status == 'pending' ? ( todayTime >= dayItem.date || computedIsSameDay(todayTime, dayItem.date) ?'complete' :'pending') :'',list.status=='closed' && 'closed' ]



    },
    computedInWeekRangeClass(list, week ){
      let computedIsSameDay = this.computedIsSameDay,
        computedDate = this.computedDate ,
        todayTime = this.todayTime
      return  [ list.status == 'outDate' && 'outDate', list.status == 'completed' && 'complete',  list.status == 'aheadCompleted' ? ( list.completeDate > week.date  && !computedIsSameDay(list.completeDate,week.date) ? 'complete' : 'pending'):'', list.status == 'pending' ? ( computedDate(todayTime) >= computedDate(week.date)?'complete' :'pending') :'',list.status=='closed' && 'closed' ]

    },

    computedIsMonthWeekEndTime( list, dayItem ){
      let computedIsSameDay = this.computedIsSameDay,
        todayTime = this.todayTime

      return computedIsSameDay(list.endTime ,dayItem.date )  && ( list.status != 'outDate' ||  list.status == 'outDate' && (computedIsSameDay(list.endTime, todayTime) || todayTime <= list.endTime ))

    },
    computedMonthWeekEndTimeClass( list ){
      const status = list.status
      let className = ''
      switch(status){
        case 'completed': className = 'complete';break;
        case 'aheadCompleted' : className = 'pending';break ;
        default : className = status;
      }
      return className

    },
    computedIsOutDateAfterEndTime(list, dayItem){
      let computedIsSameDay = this.computedIsSameDay,
        todayTime = this.todayTime
      return list.status == 'outDate' && (computedIsSameDay(list.endTime ,dayItem.date) || dayItem.date >= list.endTime )&& (!computedIsSameDay(todayTime ,dayItem.date) && dayItem.date < todayTime)
    },
    computedIsOutDateAfterEnding( list, dayItem ){
      let computedIsSameDay = this.computedIsSameDay,
        todayTime = this.todayTime
      return list.status == 'outDate' && !computedIsSameDay(list.endTime ,dayItem.date) && dayItem.date > list.endTime && computedIsSameDay(dayItem.date, todayTime)
    },

    // 周模式
    // 活动时间内
    computedIsWeekInRange( list ,week ){
      let computedIsSameDay = this.computedIsSameDay
      return (list.startTime < week.date && list.endTime > week.date ) && !computedIsSameDay(list.startTime ,week.date ) && !computedIsSameDay(list.endTime ,week.date )
    },

    computedIsWeekBeginClass( list  ){
      return  [ (list.status == 'completed'|| list.status == 'pending' || list.status == 'aheadCompleted') && 'complete' ,list.status == 'outDate' && 'outDate', list.status=='closed' && 'closed']
    },
  }

}
