<style lang="less" scoped>
  .header-wrapper{
    width: 100% ;
    height: 54*2px;
    .header-main{
      display: flex;
      align-items: center;
      padding: 7*2px 7*2px 0 10*2px;
      img{
        display: inline-block;
      }
      .user-photo{
        width :29*2px;
        height: 29*2px;
        display: inline-block;
        border-radius: 100%;
        box-shadow: 0 4px 8px 0 rgba(111,111,111,0.44);
      }
      .menu{
        width: 20*2px;
        padding-left: 4px;
      }
      .project-name{
        width: 253*2px;
        font-family: PingFangSC-Semibold;
      }
      .share, .add{
        width: 24*2px;
      }
      .add{
        padding-left: 6*2px;
      }
    }
    .calendar-wrapper{
      margin-top: 11*2px;
    }
  }
  .task-list-wrapper{
    margin-top: 34*2px;
    .panel{
      height: 70*2px ;
      position: relative;
      .left-dot{
        position: absolute;
        top: 6*2px;
        left: 6*2px;
      }
      .left-photo{
        position: absolute;
        left:19*2px;
        top: 7*2px;
        >img{
          width: 57*2px;
          height: 57*2px;
          border-radius: 100%;
         }
      }
     .right-content{
       line-height:1.5;
       margin-left: 86*2px;
        margin-right: 10px*2 ;
        .line1{
          img{
            display: inline-block;
             width:16*2px;
            padding-left: 2px;
           }
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
     }
      .month-process{
        position: absolute;
        top: 49*2px ;
        left: 98*2px;
        background: #F4F4F4;

        .white-wrap{
          white-space: nowrap;
          width: 126px;
          height: 13*2px;
          float: left ;
          border: 2px solid #FFFFFF;
          border-right-width: 0 ;
          box-shadow: inset 2px 2px 6px 0 rgba(0,0,0,0.17);
          vertical-align: bottom;
          line-height: 1;
          background-color: #f4f4f4;
          /*display:flex;*/

          span{
            display: inline-block;
            width: 2px;
            height: 9*2px;
            margin-top: 2*2px;
            background: #CEF3FF;
            margin-left: 8*2px;
            vertical-align: bottom;
          }
          span:last-child{
            margin-right: 8*2px;
          }
          p{
            position:relative ;
            .week-in-chinese{
              font-family: PingFangSC;
              margin: 0;
              left: -1px;
              text-align: center;
              top:19px;
              position: absolute;
              width:8*2px;
              background-color: transparent ;
              z-index: 3;
            }
          }
          .grid-box{
            position: absolute ;
            .grid{
              background: none;
              display: inline-block;
              box-sizing: border-box;
              margin: 0;
              margin-top: 2*2px;
              display: inline-block;
              height:9*2px;
              width:18px;
              &.pending{
                border-right:2px solid #CEF3FF;
              }
              &.outDate{
                border-right:2px solid #FFDDCA;
              }

            }
            >span:last-child{
                border-right: none!important;
            }
          }
          p.off{
            margin-top: 2*2px;
            display: inline-block;
            height:9*2px;
            width:9*2px;
            /*border-right:2px solid #CEF3FF;*/
          }
          p.on{
            width : 9*2px;
            height: 8*2px;
            margin-top: 2*2px;
            margin-bottom: 2px;
            display: inline-block;
            position:relative ;
            &.pending{
               background: #CEF3FF;
             }
            &.complete{
               background-image: linear-gradient(-90deg, #99F1FF 0%, #27ABFA 100%);
             }
            &.outDate{
               background-image: linear-gradient(-90deg, #FFDC99 0%, #FA6727 100%);
            }
            .status-text{
              width: 24.1*2px;
              z-index : 2;
              position:absolute ;
              top: -21px ;
              left: -6*2px;
            }
            .status-bg{
              z-index : 1;
              width: 24.1*2px;
              position:absolute ;
              top: -23px ;
              right: -9*2px;
            }
          }
        }
        div:last-child{
           border-right-width: 2px ;

        }
      }
      .week-process{
        position: absolute;
        top: 49*2px ;
        left: 98*2px;
        background: #F4F4F4;
        .white-wrap {
          width: 34*2px;
          height: 13 *2px;
          float: left;
          border: 2px solid #FFFFFF;
          border-right-width: 0;
          box-shadow: inset 2px 2px 6px 0 rgba(0, 0, 0, 0.17);
          vertical-align: bottom;
          line-height: 1;
          background-color: #f4f4f4;
          .on{
            position: relative;
            width: 32*2px;
            height: 8*2px ;
            margin-top: 2*2px;
            &.pending{
               background: #CEF3FF;
             }
            &.complete{
               background-image: linear-gradient(-90deg, #99F1FF 0%, #27ABFA 100%);
             }
            &.outDate{
               background-image: linear-gradient(-90deg, #FFDC99 0%, #FA6727 100%);
            }
             /*文字进度以及背景*/
            .status-text{
              width: 20.1*2px;
              z-index : 2;
              position:absolute ;
              top: -23px ;
              left: 41.5px;
            }
            .status-bg{
              z-index : 1;
              width: 20.1*2px;
              position:absolute ;
              top: -27px ;
              right: -9*2px;
            }
            /*不同状态的车*/
            /*起跑  */
            .begin-sign-logo{
              width: 4*2px ;
              height: 8*2px ;
              position: absolute;
            }
            /*终点*/
            .end-sign-logo{
              position: absolute;
              right: 0 ;
              top: -10px;
              width: 50*2px ;
              height: 14*2px;
            }
          }
        }
      }
    }
  }
</style>
<template>
    <div>
      <slide-bar :isShow = 'isShowSlideBar'></slide-bar>
      <!--头部日历导航栏-->
      <div class="header-wrapper c_1-bg">
        <div class="header-main">
          <img class="user-photo" src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" alt="">
          <img class="menu" @click="isShowSlideBar = true" src="../../assets/img/icon-menu.png" alt="">
          <span class="project-name c_white b_FS-18 text-center">展会项目一</span>
          <img class="share" src="../../assets/img/icon-share.png" alt="">
          <img class="add" @click="addTask" src="../../assets/img/icon-add.png" alt="">
        </div>
        <div class="calendar-wrapper">
          <v-calendar @getDateData = 'getDateData' @statusChange="statusChange" ></v-calendar>
        </div>
      </div><!--头部日历导航栏 end-->
      <!--任务列表-->
      <div class="task-list-wrapper b-LR-10">

        <template v-for="(list,index) in projectList" >
          <div  class="panel">
            <div class="b-LR-10 b-T-5">
              <span class="left-dot dot info"></span>
              <p class="left-photo">
                <img src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" alt="">
              </p>
              <div class="right-content" >
                <div class="line1">
                  <p class="b_FS-14 c_6 b_font-PFM middle">名字<img :src="completeLogo" /></p>

                  <p class="status c_7 b_FS-10">提前一天</p>
                </div>
                <div class="b_FS-12 b_font-PFR c_6">
                  展台搭建新方案
                </div>
              </div>

              <!--汽车表示进度-->
              <div v-if="isMonthMode" class="month-process b_FS-0" >
                <template v-for="(weeks, key) in monthDates">
                  <div class="white-wrap b_FS-0">
                    <!--珊格-->
                    <div class="grid-box"  >
                      <span class="grid"
                            v-for="(val) in 7"
                            :class="[list.status == 'outDate'?'outDate':'pending']"
                      ></span>
                    </div>
                    <template v-for="(dayItem,dayIndex) in weeks">
                      <!-- 0 纯空格 最普通 ，空白格 （不在活动时间内） -->
                      <p class="off" v-if="(list.startTime > dayItem.date || list.endTime < dayItem.date ) && !computedIsSameDay(list.startTime ,dayItem.date ) && !computedIsSameDay(list.endTime ,dayItem.date )">
                        <span class="week-in-chinese b_FS-6 c_7" :class="[dayItem.week == 6 ||dayItem.week == 0  ? 'c_12': 'c_6' ]">
                          {{ weekStrArr[dayItem.week] }}
                        </span>
                      </p>


                      <!--开始～结束之间的这段时间-->
                      <p class="on"
                         v-if="(list.startTime < dayItem.date || computedIsSameDay(list.startTime ,dayItem.date )   )&& list.endTime > dayItem.date && !computedIsSameDay(list.endTime ,dayItem.date )"
                         :class="[ list.status == 'outDate' && 'outDate', list.status == 'completed' && 'complete', list.status == 'aheadCompleted' ? ( list.completeDate > dayItem.date   ? 'complete' : 'pending'):'', list.status == 'pending' ? ( computedDate(todayTime) >= computedDate(dayItem.date)?'complete' :'pending') :'' ]"
                      >
                        <template v-if="list.status == 'aheadCompleted' && computedIsSameDay(list.completeDate,dayItem.date) ">
                          <label class="status-text b_FS-8 text-center c_white">100%</label>
                          <img class="status-bg" src="../../assets/img/sign-remind03.png" alt="">
                        </template>
                        <template  v-if="list.status == 'pending' && computedIsSameDay(todayTime, dayItem.date)">
                          <label class="status-text b_FS-8 text-center c_white">60%</label>
                          <img class="status-bg" src="../../assets/img/sign-remind03.png" alt="">
                        </template>
                        <span class="week-in-chinese b_FS-6 c_7" :class="[dayItem.week == 6 ||dayItem.week == 0  ? 'c_12': 'c_6' ]">
                          {{ weekStrArr[dayItem.week] }}
                        </span>
                      </p>

                      <!--<p class="off" v-else>-->
                        <!--<span class="week-in-chinese b_FS-6 c_7" :class="[dayItem.week == 6 ||dayItem.week == 0  ? 'c_12': 'c_6' ]">-->
                          <!--{{ weekStrArr[dayItem.week] }}-->
                        <!--</span>-->
                      <!--</p>-->

                      <p class="on"
                         v-if="computedIsSameDay(list.endTime ,dayItem.date )"
                        :class="[list.status == 'outDate' && 'outDate', list.status == 'completed' && 'complete',list.status == 'pending' && 'pending']"
                      >
                        <span class="week-in-chinese b_FS-6 c_7" :class="[dayItem.week == 6 ||dayItem.week == 0  ? 'c_12': 'c_6' ]">
                          {{ weekStrArr[dayItem.week] }}
                        </span>
                        <template v-if="list.status == 'outDate'">
                          <label class="status-text b_FS-8 text-center c_white b_font-PFR">超时</label>
                          <img class="status-bg" src="../../assets/img/sign-remind04.png" alt="">
                        </template>
                        <template v-if="list.status == 'completed'">
                          <label class="status-text b_FS-8 text-center c_white">100%</label>
                          <img class="status-bg" src="../../assets/img/sign-remind03.png" alt="">
                        </template>
                      </p>
                    </template>
                  </div>
                </template>
              </div>
              <!--汽车表示进度-->
              <div v-else class="week-process" >
                <template v-for="(week,key) in weekdays" >

                  <div class="white-wrap" >
                    <!-- 0 纯空格 最普通 ，空白格 （不在活动时间内） -->
                    <p class="on" v-if="(list.startTime > week.date || list.endTime < week.date ) && !computedIsSameDay(list.startTime ,week.date ) && !computedIsSameDay(list.endTime ,week.date )">

                    </p>
                    <!-- 1 起点 在任务开始 4种情况 -->
                    <p  v-if = "computedDate(list.startTime) === computedDate(week.date)" class="on "
                        :class="[list.status == 'aheadCompleted' && 'complete' ,list.status == 'outDate' ? 'outDate' : 'complete']" >

                      <!-- 待确定 第一天就提前完成-->
                      <!--<template v-if="list.status == 'aheadCompleted'">-->
                      <!--<label class="status-text b_FS-6 text-center c_white b_font-PFR">60%</label>-->
                      <!--<img class="status-bg" src="../../assets/img/sign-remind01.png" alt="">-->
                      <!--<img class="end-sign-logo" src="../../assets/img/image-car.png"/>-->
                      <!--</template>-->
                      <template v-if="list.status == 'outDate'">

                      </template>
                      <!--旗子-->
                      <img class="begin-sign-logo" src="../../assets/img/image-starting point.png"/>
                    </p>
                    <!-- 2 未到完成时间 未达到结束时间 4种情况-->
                    <p class="on"
                       v-if="(list.startTime < week.date && list.endTime > week.date ) && !computedIsSameDay(list.startTime ,week.date ) && !computedIsSameDay(list.endTime ,week.date )"

                       :class="[ list.status == 'outDate' && 'outDate', list.status == 'completed' && 'complete',                      list.status == 'aheadCompleted' ? ( list.completeDate > week.date  && !computedIsSameDay(list.completeDate,week.date) ? 'complete' : 'pending'):'', list.status == 'pending' ? ( computedDate(todayTime) >= computedDate(week.date)?'complete' :'pending') :'' ]"
                    >

                      <!-- 提前完成-->
                      <template v-if="list.status == 'aheadCompleted' && computedIsSameDay(list.completeDate,week.date) ">
                        <label class="status-text b_FS-6 text-center c_white b_font-PFR">100%</label>
                        <img class="status-bg" src="../../assets/img/sign-remind01.png" alt="">
                        <img class="end-sign-logo" src="../../assets/img/image-car.png"/>
                      </template>
                      <template v-if="list.status == 'pending' && computedIsSameDay(todayTime, week.date)" >
                        <label class="status-text b_FS-6 text-center c_white b_font-PFR">{{ list.process + '%' }}</label>
                        <img class="status-bg" src="../../assets/img/sign-remind01.png" alt="">
                      </template>
                    </p>
                    <!-- 3 到达结束时间 5种显示 -->
                    <p class="on"
                       v-if="computedIsSameDay(list.endTime ,week.date )"
                       :class="[list.status == 'outDate' && 'outDate', list.status == 'completed' && 'complete']"
                    >

                      <template v-if="list.status == 'outDate'">
                        <label class="status-text b_FS-6 text-center c_white b_font-PFR">超时</label>
                        <img class="status-bg" src="../../assets/img/sign-remind.png" alt="">
                        <img class="end-sign-logo" src="../../assets/img/image-car03.png"/>
                      </template>
                      <template v-if="list.status == 'completed'" >
                        <label class="status-text b_FS-6 text-center c_white b_font-PFR">100%</label>
                        <img class="status-bg" src="../../assets/img/sign-remind01.png" alt="">
                        <img class="end-sign-logo" src="../../assets/img/image-car02.png"/>
                      </template>
                    </p>

                  </div>
                </template>
              </div>
            </div>
          </div>
        </template>






      </div>
    </div>
</template>
<script type="text/babel">
    import entry from './conventEntry'
    export default{
      ...entry
    }
</script>
