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

          <img class="left-row" src="../../../assets/img/icon-left-slip.png" alt="">
          <div v-if="isMonth" class="month-main">
            <template v-for="(range,key) in activeDates">
              <div  class="month-range-wrapper b_d-inline-block text-center">
                <span class="b_FS-12 date-range b_d-inline-block c_6">{{ range }}</span>
                <div class="active-bar date-status">
                </div>
              </div>

            </template>
          </div>
          <template v-if="!isMonth" v-for="(weekday,key) in activeWeekDays">
            <div class="b_d-inline-block text-center week-wrapper" :class="[ key == activeWeekDays.length-1 && 'last' ]">
              <p class="b_FS-12 weekday" :class="[weekday.week == 6 ||weekday.week == 7  ? 'c_12': 'c_6' ]" >{{ weekday.date }}</p>
              <p class="weekday b_FS-6" :class="[weekday.week == 6 ||weekday.week == 7  ? 'c_12': 'c_6' ]" >{{ weeks[weekday.week-1] }}</p>
              <div class="active-bar week-status">
              </div>
            </div>

          </template>
          <img class="right-row" src="../../../assets/img/icon-right-slide.png" alt="">
        </div>

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
              return ['MON','TUE','WED','THU','FRI','SAT','SUN']
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
              activeWeekDays : [{
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
            }
        },

        components:{
          calendarSwitch
        },
        mounted(){
          this.initData()
        },
        methods:{
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
            })

          },
          renderMonthDates(date, flag ){
            let firstDateOfMonth = date    //这月第一天 or 指定的 某一天

            let startAreaDate =  firstDateOfMonth
//            var lastDateOfMonth = new Date(year, month + 1, 0); //这月最后一天
//            var monthLenght = lastDateOfMonth.getDate() - firstDateOfMonth.getDate() + 1;
            if( !this.activeMonthDates.length ){
                // 计算四个期间出来
              for(let i = 0 ; i < 4 ;i++){
                let  _endAreaDate =  new Date( +startAreaDate + this.timeDistance)

                if( this.currentTime > startAreaDate && this.currentTime <= _endAreaDate ){
                  this.activeMonthIndex = i
                  console.log(i)
                }

                let area = {
                  startTmp: +startAreaDate ,
                  endTmp: +_endAreaDate - 86400000  ,
                  startWeekDay: startAreaDate.getDay() ,
                  areaStr: startAreaDate.getDate() + '-' + (_endAreaDate.getDate()-1 ),
                }
                console.log('areaStr', area.areaStr )
                this.activeMonthDates.push(area)

                startAreaDate = _endAreaDate
              }
              // 从 那个下标 显示 日历

              console.log( this.activeMonthDates )
              return {
                done : function(cb){
                  cb && cb()
                }
              }
            }
            else{
              // 结束
              let  _endAreaDate =  new Date( +startAreaDate + this.timeDistance)
//              if( this.currentTime > startAreaDate && this.currentTime <= _endAreaDate ){
//                this.activeMonthIndex = i
//                console.log(i)
//              }
              // 分区对象
              let area = {
                startTmp: +startAreaDate ,
                endTmp: +_endAreaDate - 86400000  ,
                startWeekDay: startAreaDate.getDay() ,
                areaStr: startAreaDate.getDate() + '-' + (_endAreaDate.getDate()-1 ),
              }
              if( flag == 'prev' ){
                // 在数组开头添加
                this.activeMonthDates.unshift(area)
              }else{
                // 在数组结尾添加
                this.activeMonthDates.push(area)
              }
            }
          },
          // 跳转到上一个 月区间
          prevMonthArea(){
            if( this.calendarIndex > 0 ){
              this.calendarIndex -= 1
              return
            }
            let startDate = new Date(this.activeMonthDates[this.calendarIndex].startTmp)

            this.renderMonthDates( startDate ,'prev')
          },
          // 跳转到下一个 月区间
          initMonthArea(){

          }
        }
    }
</script>
