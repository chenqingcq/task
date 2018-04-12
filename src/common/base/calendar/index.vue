<style lang="less" scoped>
  @import "./calendar.less";

</style>
<template>
    <div>
      <div class='calendar-wrapper'>
        <calendar-switch class="b_d-inline-block switch-btn"
          :class="[ isMonth ? 'date-status' : 'week-status' ]"
          :status="isMonth"
          @getStatus = 'calendar_statusChange'
        ></calendar-switch>
        <div class="calendar b_d-inline-block b_FS-0">

          <img class="left-row" @click ='prevMonthArea' src="../../../assets/img/icon-left-slip.png" alt="">
          <div v-if="isMonth" class="month-main">
            <template v-for="(range,index) in activeMonthDates">
              <div v-if="index >= calendarIndex"   @click="monthChangeArea(index)"  class="month-range-wrapper b_d-inline-block text-center">
                <span class="b_FS-12 date-range b_d-inline-block c_6">{{ range.areaStr }}</span>
                  <div v-if="activeMonthIndex == index" class="active-bar date-status">
                  </div>
              </div>
            </template>
          </div>
          <template v-if="!isMonth" v-for="(weekday,key) in activeWeekDays">
            <div class="b_d-inline-block text-center week-wrapper"
                 :class="[ key == activeWeekDays.length-1 && 'last' ]"
                 @click="weekIndex = key"
            >
              <p class="b_FS-12 weekday" :class="[weekday.week == 6 ||weekday.week == 0  ? 'c_12': 'c_6' ]" >{{ weekday.dayStr }}</p>
              <p class="weekday b_FS-6" :class="[weekday.week == 6 ||weekday.week == 0  ? 'c_12': 'c_6' ]" >{{ weeks[weekday.week] }}</p>
              <div v-show = "weekIndex == key" class="active-bar week-status">
              </div>
            </div>

          </template>
          <img class="right-row" @click="nextMonthArea" src="../../../assets/img/icon-right-slide.png" alt="">
        </div>
        <!--<div>-->
          <!--{{ splitMonthDays }}-->
        <!--</div>-->
      </div>

    </div>
</template>
<script>
    import calendarSwitch from './calendar-switch.vue'
    export default{
        name : 'VCalendar',
        props: {
          weeks: {
            type: Array,
            default: function () {
              return ['SUN','MON','TUE','WED','THU','FRI','SAT']
//              return ['日', '一', '二', '三', '四', '五', '六']
            }
          },
          months: {
            type: Array,
            default: function () {
              return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
            }
          }
        },
        data(){
            return{
              isMonth : true ,
              activeDates:['1-7','8-14','15-21','22-28','29-31'], // ,'29-31'
              _activeWeekDays : [{
                date: 1,
                week: 1
              },{
                date: 2,
                week: 2
              },{
                date: 3,
                week: 3
              },{
                date: 4,
                week: 4
              },{
                date: 5,
                week: 5
              },{
                date: 6,
                week: 6,
              },{
                date: 7,
                week: 7
              }
              ],
              currentTime : '' ,
              currentYear : '' ,
              currentMonth : '' ,
              currentDay : '' ,
              /* 7天时间间隔 用于计算 */
              timeDistance : 7 * 24 * 3600 * 1000 ,
              activeMonthDates : [],
              activeMonthIndex : -1 ,
              calendarIndex : -1 ,
              weekIndex : 0,
            }
        },
        computed:{
          // 选中的周数组
          activeWeekDays(){
            if( this.activeMonthIndex ==-1 ){
              return []
            }
            var dateObj = this.activeMonthDates[this.activeMonthIndex]
            var flxibleTime = dateObj.startTmp ,
             start = dateObj.startTmp,
             weekdays = []
            for(let i = 0 ; i< 7 ;i++ ){

              let _weekday = new Date(flxibleTime)
              if( i == 0){
                // console.log( _weekday )
              }
              let area = {
                dayStr : _weekday.getDate() ,
                week : _weekday.getDay() ,
                date : _weekday
              }
              flxibleTime += 24*60*60*1000
              weekdays.push(area)
            }
            return weekdays
          },
          splitMonthDays(){
              var arr = this.activeMonthDates
              var totalArray =  arr.slice(this.calendarIndex , this.calendarIndex + 4 )
              var res = this._splitAsingleMonthArea(totalArray)
              return res
          }
        },
        components:{
          calendarSwitch
        },
        mounted(){
          this.initData()
        },
        methods:{
          _splitAsingleMonthArea( arr ){
            if( this.activeMonthIndex ==-1 ){
              return []
            }
            const oneDayTmp = 24 * 60 *60000
            // Array 分割月份区域换成7天 临时存放
            let monthFullDays = []
            let j = 0
            while(j < 4){

              var dateObj = arr[j]
              var flxibleTime = dateObj.startTmp ,
              fullWeekdays = []
              for(let i = 0 ; i< 7 ;i++ ){

                let _weekday = new Date(flxibleTime)
                if( i == 0){
//                  console.log( _weekday )
                }
                let area = {
                  dayStr : _weekday.getDate() ,
                  week : _weekday.getDay() ,
                  date : _weekday
                }
                flxibleTime += oneDayTmp
                fullWeekdays.push(area) // 7天周 一天一个索引
              }

              monthFullDays.push(fullWeekdays) // 一周一个索引
              j++
            }
//            28 天
            return monthFullDays
          },
          /*
          * 周／月 switch 切换时的回调
          * */
          calendar_statusChange(val){
            this.isMonth = val
            this.$emit('statusChange',val)
          },
          initData(dateValue){
            var now = new Date();
            if (dateValue) {
              now = new Date(dateValue);
            }
            this.currentTime = now
            this.currentYear = now.getFullYear();
            this.currentMonth = now.getMonth(); //-1 month
            this.currentDay = now.getDate();
            let firstDateOfMonth = new Date(this.currentYear, this.currentMonth, 1);
            this.renderMonthDates( firstDateOfMonth).done(()=>{
              this.calendarIndex = 0
              this.emitData()
            })

          },
          renderMonthDates(date, flag ){
            let firstDateOfMonth = date    //这月第一天 or 指定的 某一天
            let startAreaDate =  firstDateOfMonth
            if( !this.activeMonthDates.length ){
                // 计算四个期间出来
              for(let i = 0 ; i < 4 ;i++){
                let  _endAreaDate =  new Date( +startAreaDate + this.timeDistance)
                // todo 定位 从 那个哪标 显示日历
                if( this.currentTime > startAreaDate && this.currentTime <= _endAreaDate ){
                  this.activeMonthIndex = i
                }
                let area = {
                  startTmp: +startAreaDate ,
                  endTmp: +_endAreaDate - 86400000  ,
                  startWeekDay: startAreaDate.getDay() ,
                  areaStr: startAreaDate.getDate() + '-' + (_endAreaDate.getDate()-1 ),
                }
                this.activeMonthDates.push(area)

                startAreaDate = _endAreaDate
              }
            }
            else{
              // 结束
              let   area
              if(flag == 'prev'){
                // 会比计算前的 开始时间 少一天
                let _startAreaDate = new Date( +startAreaDate - this.timeDistance )
                let _endAreaDate = new Date(+startAreaDate - 86400000)
                area = {
                  startTmp: +_startAreaDate ,
                  endTmp: +startAreaDate  ,
                  startWeekDay: _startAreaDate.getDay() ,
                  areaStr: _startAreaDate.getDate() + '-' + _endAreaDate.getDate(),
                }
              }
              else{
                let _endAreaDate = new Date( +startAreaDate + this.timeDistance - 86400000 )
                area = {
                  startTmp: +startAreaDate ,
                    endTmp: +_endAreaDate  ,
                  startWeekDay: startAreaDate.getDay() ,
                  areaStr: startAreaDate.getDate() + '-' + _endAreaDate.getDate(),
                }
              }
              // 分区对象
              if( flag == 'prev' ){
                // 在数组开头添加
                this.activeMonthDates.unshift(area)
              }else{
                // 在数组结尾添加
                this.activeMonthDates.push(area)
              }

            }
            return {
              done : function(cb){
                cb && cb()
              }
            }
          },
          // 跳转到上一个 月区间
          prevMonthArea(){
            if( this.calendarIndex > 0 ){
              this.calendarIndex -= 1
              if( this.activeMonthIndex > 0){
                this.activeMonthIndex -=1
              }
              this.emitData()
              return
            }
            let startDate = new Date(this.activeMonthDates[this.calendarIndex].startTmp)
            this.renderMonthDates( startDate ,'prev').done(()=>{
              if( this.calendarIndex == 0 ){

              }else{
                this.calendarIndex -= 1
                if( this.activeMonthIndex > 0){
                  this.activeMonthIndex -=1
                }
              }
              this.emitData()
            })
          },
          nextMonthArea(){
            if( ( this.calendarIndex + 4 ) < this.activeMonthDates.length ){
              this.calendarIndex += 1
              this.activeMonthIndex += 1
              this.emitData()
              return
            }
            let startDate = new Date(this.activeMonthDates[this.calendarIndex + 3].endTmp + 86400000)
            this.renderMonthDates( startDate ,'next').done(()=>{
              this.calendarIndex += 1
              this.activeMonthIndex += 1
            })
            this.emitData()
          },
          monthChangeArea(index){
            this.activeMonthIndex = index
            this.emitData()
          },
          emitData(){

            const months =  this.splitMonthDays
            this.$emit('getDateData',{
                activeWeekDays: this.activeWeekDays ,
                months
            })
          }

        }
    }
</script>
