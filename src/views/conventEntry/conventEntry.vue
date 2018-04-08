<style lang="less" scoped>
  @import 'conventEntry.less';
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
          <div  class="panel b-MT-10" :class="[list.isLike ? 'isLike-bg' : 'c_white-bg' ]">
            <div class="b-LR-10 b-T-5">
              <span class="left-dot dot " :class="[list.isSaw ? 'info': 'warn']" ></span>
              <p class="left-photo">
                <img src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" alt="">
              </p>
              <div class="right-content" >
                <div class="line1">
                  <p class="b_FS-14 c_11 b_font-PFM middle">名字<img
                    v-if="list.status == 'completed'"
                    :src="completeLogo" />
                    <img
                      v-if="list.status == 'aheadCompleted'"
                      :src="aheadLogo" />
                  </p>
                  <!--文字状态-->
                  <p v-if="list.status == 'completed' " class="status c_7 b_FS-10" >完成通过</p>
                  <p v-else class="status c_7 b_FS-10">{{ list.text }}</p>
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
                    <!--<div class="grid-box"  >-->
                      <!--<span class="grid"-->
                            <!--v-for="(val) in 7"-->
                            <!--:class="[list.status == 'outDate'?'outDate':'pending']"-->
                      <!--&gt;</span>-->
                    <!--</div>-->
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
                         :class="[ list.status == 'outDate' && 'outDate', list.status == 'completed' && 'complete', list.status == 'aheadCompleted' ? ( list.completeDate > dayItem.date   ? 'complete' : 'pending'):'', list.status == 'pending' ? ( computedDate(todayTime) >= computedDate(dayItem.date)?'complete' :'pending') :'',list.status=='closed' && 'closed' ]"
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
                        :class="[list.status == 'outDate' && 'outDate', list.status == 'completed' && 'complete',list.status == 'pending' && 'pending', list.status=='closed' && 'closed']"
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
              <div v-else class="week-process clearfix" >
                <template v-for="(week,key) in weekdays" >

                  <div class="white-wrap" >

                    <!-- 0 纯空格 最普通 ，空白格 （不在活动时间内） -->
                    <p class="on" v-if="(list.startTime > week.date || list.endTime < week.date ) && !computedIsSameDay(list.startTime ,week.date ) && !computedIsSameDay(list.endTime ,week.date )">

                    </p>

                    <!-- 1 起点 在任务开始 4种情况 -->

                      <p  v-if = "computedDate(list.startTime) === computedDate(week.date)" class="on "
                          :class="[ (list.status == 'completed'|| list.status == 'pending' || list.status == 'aheadCompleted') && 'complete' ,list.status == 'outDate' && 'outDate', ,list.status=='closed' && 'closed']" >

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

                       :class="[ list.status == 'outDate' && 'outDate', list.status == 'completed' && 'complete',                      list.status == 'aheadCompleted' ? ( list.completeDate > week.date  && !computedIsSameDay(list.completeDate,week.date) ? 'complete' : 'pending'):'', list.status == 'pending' ? ( computedDate(todayTime) >= computedDate(week.date)?'complete' :'pending') :'',list.status=='closed' && 'closed' ]"
                    >

                      <!-- 提前完成-->
                      <template v-if="list.status == 'aheadCompleted' && computedIsSameDay(list.completeDate,week.date) ">
                        <label class="status-text b_FS-6 text-center c_white b_font-PFR">100%</label>
                        <img class="status-bg" src="../../assets/img/sign-remind01.png" alt="">
                        <transition
                          name="custom-classes-transition"
                          enter-active-class="animated tada"
                          leave-active-class="animated bounceOutRight"

                        >
                          <img class="end-sign-logo" src="../../assets/img/image-car.png"/>
                        </transition>

                      </template>
                      <template v-if="list.status == 'pending' && computedIsSameDay(todayTime, week.date)" >
                        <label class="status-text b_FS-6 text-center c_white b_font-PFR">{{ list.process + '%' }}</label>
                        <img class="status-bg" src="../../assets/img/sign-remind01.png" alt="">
                      </template>
                    </p>
                    <!-- 3 到达结束时间 5种显示 -->
                    <p class="on"
                       v-if="computedIsSameDay(list.endTime ,week.date )"
                       :class="[list.status == 'outDate' && 'outDate', list.status == 'completed' && 'complete',list.status=='closed' && 'closed']"
                    >

                      <template v-if="list.status == 'outDate'" >
                        <label  class="status-text b_FS-6 text-center c_white b_font-PFR">超时</label>
                        <img  class="status-bg" src="../../assets/img/sign-remind.png" alt="">
                        <transition
                          name="custom-classes-transition"
                          enter-active-class="animated tada"
                          leave-active-class="animated bounceOutRight"

                        >
                          <img  key="imgcard"  class="end-sign-logo" src="../../assets/img/image-car03.png"/>
                        </transition>
                      </template>

                      <template v-if="list.status == 'completed'" >

                        <label key='label' class="status-text b_FS-6 text-center c_white b_font-PFR">100%</label>
                        <img key="img1" class="status-bg" src="../../assets/img/sign-remind01.png" alt="">
                        <transition
                          name="custom-classes-transition"
                          enter-active-class="animated tada"
                          leave-active-class="animated bounceOutRight"

                        >
                          <img  v-if="list.status == 'completed'" class="end-sign-logo" src="../../assets/img/image-car02.png"/>
                        </transition>
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
