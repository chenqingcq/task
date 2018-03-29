<style lang="less" scoped>
  .calendar-wrapper{
    margin: auto;
    width: 340*2px;
    height: 31*2px ;
    background: #FFFFFF;
    padding-top: 6*2px;
    box-shadow: 0 2px 10px 0 rgba(177,177,177,0.60), inset 0 -1px 2px 0 rgba(135,135,135,0.50);
    display: flex;
    justify-items: center;
    .switch-btn{
      &.date-status{
         margin-right : 31*2px;
      }
      &.week-status{
         margin-right : 31*2px;
       }
      margin-left: 26*2px;
    }
    .calendar{
      display: flex ;
      align-content: center ;
      .left-row, .right-row{
        width: 15px;
        height: 27px;
      }
      .left-row{
        margin-right:3*2px;
      }
      .right-row{
        margin-left: 0 3*2px;
      }
      /*整个 月 区域*/
      .month-main{
        margin: 0 3*2px;

        display: flex ;
        align-content: center ;
        width:219*2px ;
        overflow:hidden ;
        >div:first-child{
            margin-left: 0;
        }
      }
      /*日期的4个块*/
      .month-range-wrapper{
        margin-left: 19.67*2px;
      }
      .date-range{
        text-align: center;
        width: 40*2px;
        letter-spacing: 1px;

        /*height: 17*2px;*/
        padding-bottom: 8*2px;
        /*border-image: linear-gradient( red , blue) 30 30 ;*/
        /*border-image: linear-gradient(-180deg, #99F1FF 0%, #27ABFA 100%);*/
      }
      .week-wrapper{
        margin-right: 10*2px;
        /*周状态时的 日期 数字*/
        .date-weekday{
          text-align: center;
          margin: auto;
          width: 15*2px;
        }
        /*字母*/
        .weekday{
          text-align: center;
          margin: auto;
          width: 15*2px;
          padding-bottom: 2px;
        }
        &.last{
           margin-right: 2px;
        }
      }

      /*
      *  选中的下边
      */
      .active-bar{

        &.date-status{
          width: 40*2px;
        }
        &.week-status{
          width: 22*2px;
        }
        height: 3*2px;
        margin: auto;
        background-image: linear-gradient(-180deg, #99F1FF 0%, #27ABFA 100%);
      }
    }
  }

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
              <p class="b_FS-12 weekday b_FS-12">{{ weekday.date }}</p>
              <p class="b_FS-12 weekday b_FS-6">{{ weeks[weekday.week-1] }}</p>
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
                week: 6
              },{
                date: 7,
                week: 7
              }
              ]
            }
        },
        components:{
          calendarSwitch
        },
        methods:{
          /*
          * 周／月 switch 切换时的回调
          * */
          calendar_statusChange(val){
            this.isMonth = val
            this.$emit('statusChange',val)
          }
        }
    }
</script>
