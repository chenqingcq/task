<style lang="less" scoped>
  @import 'conventEntry.less';
</style>
<template>
    <div>
      <slide-bar ref="slide" @onHide="onHideSlideBar" @changeProject="changeProject" class="slide-bar"></slide-bar>
      <!--头部日历导航栏-->
      <div class="header-wrapper c_1-bg">
        <div class="header-main">
          <img class="user-photo"  :src="user.headImage" alt="">
          <img class="menu" @click="showSlideBar" src="../../assets/img/icon-menu.png" alt="">
          <span class="project-name c_white b_FS-18 text-center">{{ themeName }} </span>
          <!--<img style="visibility: hidden" class="share" src="../../assets/img/icon-share.png" alt="">-->

          <img v-if = "role == 'creator'" class="add" @click="addTask" src="../../assets/img/icon-setting.png" alt="">
          <img v-else class="add" @click="addTask" src="../../assets/img/icon-add.png" alt="">
        </div>
        <div class="calendar-wrapper">
          <v-calendar @getDateData = 'getDateData' @statusChange="statusChange" ></v-calendar>
        </div>
      </div><!--头部日历导航栏 end-->
      <!--任务列表-->
      <div class="task-list-wrapper b-LR-10" v-infinite-scroll="loadMore" infinite-scroll-disabled="hasMore" infinite-scroll-distance="60">
        <div v-if="taskList.length == 0" class="text-center b_FS-14 c_7 " style="padding-top: 280px">
          暂无任务
        </div>
        <template v-for="(list,index) in taskList" >

          <v-swipeout contentBg="#f4f4f4"
                      :index = 'index'
                      @onOpen = 'watchOpenSwipe'
                      @onClose="watchCloseSwipe" >
            <div
              slot="content"
              @click="linkToTaskDetail(list)"
              class="panel b-MT-10"
              :class="[list.isStar ? 'isLike-bg' : 'c_white-bg', swipeOutIndex == index && 'on-open-Swipe' ]">

              <div

                class="b-LR-10 b-T-5"
                style="height: 140px">
                <span class="left-dot dot " :class="[list.isBrowse	 ? 'info': 'warn']" ></span>
                <p class="left-photo">
                  <img :src="list.headImage" alt="">
                </p>
                <div class="right-content" >
                  <div class="line1">
                    <p class="b_FS-14 c_11 b_font-PFM middle">{{ list.nickname }}<img
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
                    {{ list.taskName }}
                  </div>
                </div>

                <!--汽车表示进度-->
                <div v-if="isMonthMode" class="month-process b_FS-0" >
                  <template v-for="(weeks, key) in monthDates">
                    <div class="white-wrap b_FS-0">
                      <!--珊格-->
                      <template v-for="(dayItem,dayIndex) in weeks">
                        <!-- 0 纯空格 最普通 ，空白格 （不在活动时间内） -->
                        <p class="off" v-if="computedIsBlank(list, dayItem) ">
                        </p>
                        <!--开始～结束之间的这段时间-->
                        <p class="on"
                           v-if="computedIsInRange(list, dayItem)"
                           :class="computedInMonthRangeClass(list, dayItem)"
                        >
                          <template v-if="list.status == 'aheadCompleted' && computedIsSameDay(list.completeDate,dayItem.date)" >
                            <label class="status-text b_FS-8 text-center c_white">{{ list.progress }}</label>
                            <img class="status-bg" src="../../assets/img/sign-remind03.png" alt="">
                          </template>
                          <template  v-if="list.status == 'pending' && computedIsSameDay(todayTime, dayItem.date)">
                            <label class="status-text b_FS-8 text-center c_white">{{ list.progress }}</label>
                            <img class="status-bg" src="../../assets/img/sign-remind03.png" alt="">
                          </template>
                          <span class="week-in-chinese b_FS-5 c_7" :class="[dayItem.week == 6 ||dayItem.week == 0  ? 'c_12': 'c_6' ]">
                            {{ weekStrArr[dayItem.week] }}
                          </span>
                        </p>

                        <p class="on"
                           v-if="computedIsMonthWeekEndTime(list, dayItem)"
                          :class="[computedMonthWeekEndTimeClass(list)]"
                        >
                          <span class="week-in-chinese b_FS-5 c_7" :class="[dayItem.week == 6 ||dayItem.week == 0  ? 'c_12': 'c_6' ]">
                            {{ weekStrArr[dayItem.week] }}
                          </span>
                          <template v-if="list.status == 'outDate'">
                            <label class="status-text b_FS-8 text-center c_white b_font-PFR">超时</label>
                            <img class="status-bg" src="../../assets/img/sign-remind04.png" alt="">
                          </template>
                          <template v-if="list.status == 'completed'">
                            <label class="status-text b_FS-8 text-center c_white">{{ list.progress }}</label>
                            <img class="status-bg" src="../../assets/img/sign-remind03.png" alt="">
                          </template>
                        </p>
                        <!--结束时间后 的超时进度显示-->
                        <p class="on"
                           v-if=" computedIsOutDateAfterEndTime(list, dayItem) "
                           :class="[list.status == 'outDate' && 'outDate']"
                        >
                          <span class="week-in-chinese b_FS-5 c_7" :class="[dayItem.week == 6 ||dayItem.week == 0  ? 'c_12': 'c_6' ]">
                            {{ weekStrArr[dayItem.week] }}
                          </span>
                        </p>
                        <!--结束时间后 的超时进度末尾显示-->
                        <p class="on"
                           v-if="computedIsOutDateAfterEnding( list, dayItem )"
                           :class="[list.status == 'outDate' && 'outDate']"
                        >
                          <span class="week-in-chinese b_FS-5 c_7" :class="[dayItem.week == 6 ||dayItem.week == 0  ? 'c_12': 'c_6' ]">
                            {{ weekStrArr[dayItem.week] }}
                          </span>
                          <label class="status-text b_FS-8 text-center c_white b_font-PFR">超时</label>
                          <img class="status-bg" src="../../assets/img/sign-remind04.png" alt="">
                        </p>
                      </template>
                    </div>
                  </template>
                </div>
                <!--汽车表示进度-->
                <div v-else class="week-process clearfix" >
                  <template v-for="(week,key) in weekdays" >

                    <div class="white-wrap" :class="[computedDate(list.startTime) === computedDate(week.date) && list.completeDate && computedIsSameDay(list.completeDate,week.date) ? 'zIndex10' : 'zIndex9']" >
                      <!-- 0 纯空格 最普通 ，空白格 （不在活动时间内） -->
                      <p class="on" v-if="computedIsBlank(list, week) ">
                      </p>
                      <!-- 1 起点 在任务开始 4种情况 -->
                        <p  v-if = "computedIsSameDay(list.startTime, week.date)" class="on "
                            :class="computedIsWeekBeginClass(list)" >

                          <!-- 待确定 第一天就提前完成-->
                          <template v-if="list.status == 'aheadCompleted' && computedIsSameDay(list.completeDate,week.date) ">
                              <label class="status-text b_FS-6 text-center c_white b_font-PFR">{{ list.progress }}</label>
                            <img class="status-bg" src="../../assets/img/sign-remind01.png" alt="">
                            <img class="end-sign-logo" style='right: -31px' src="../../assets/img/image-car.png"/>
                          </template>
                          <template v-if="list.status == 'outDate'">

                          </template>
                          <!--旗子-->
                          <img class="begin-sign-logo" src="../../assets/img/image-starting point.png"/>
                        </p>

                      <!-- 2 未到完成时间 未达到结束时间 4种情况-->

                      <p class="on"
                         v-if="computedIsWeekInRange( list ,week )"
                         :class="computedInWeekRangeClass( list, week )"
                      >
                        <!-- 提前完成-->
                        <template v-if="list.status == 'aheadCompleted' && computedIsSameDay(list.completeDate,week.date) ">
                          <label class="status-text b_FS-6 text-center c_white b_font-PFR">{{ list.progress }}</label>
                          <img class="status-bg" src="../../assets/img/sign-remind01.png" alt="">

                            <img class="end-sign-logo" src="../../assets/img/image-car.png"/>

                        </template>
                        <template v-if="list.status == 'pending' && computedIsSameDay(todayTime, week.date)" >
                          <label class="status-text b_FS-6 text-center c_white b_font-PFR">{{ list.progress }}</label>
                          <img class="status-bg" src="../../assets/img/sign-remind01.png" alt="">
                          <img class="end-sign-logo" src="../../assets/img/image-car02.png"/>
                        </template>
                      </p>
                      <!-- 3 到达结束时间 5种显示 -->
                      <p class="on"
                         v-if="computedIsMonthWeekEndTime(list, week)"
                         :class="computedMonthWeekEndTimeClass(list)"
                      >
                        <template v-if="list.status == 'outDate'" >
                          <label  class="status-text b_FS-6 text-center c_white b_font-PFR">超时</label>
                          <img  class="status-bg" src="../../assets/img/sign-remind.png" alt="">
                          <img  key="imgcard"  class="end-sign-logo" src="../../assets/img/image-car03.png"/>
                        </template>

                        <template v-if="list.status == 'completed'" >

                          <label key='label' class="status-text b_FS-6 text-center c_white b_font-PFR">{{ list.progress }}</label>
                          <img key="img1" class="status-bg" src="../../assets/img/sign-remind01.png" alt="">
                          <img  v-if="list.status == 'completed'" class="end-sign-logo" src="../../assets/img/image-car02.png"/>
                        </template>
                      </p>
                      <!-- 3 结束之后 还没到今天 7种显示 -->
                      <p class="on"
                         v-if=" computedIsOutDateAfterEndTime(list, week) "
                         :class="[list.status == 'outDate' && 'outDate']"
                      >
                      </p>
                      <p class="on"
                         v-if="computedIsOutDateAfterEnding(list, week)"
                         :class="[list.status == 'outDate' && 'outDate']"
                      >
                        <label  class="status-text b_FS-6 text-center c_white b_font-PFR">超时</label>
                        <img  class="status-bg" src="../../assets/img/sign-remind.png" alt="">
                        <img  key="imgcard"  class="end-sign-logo" src="../../assets/img/image-car03.png"/>
                      </p>
                    </div>
                  </template>
                </div>
              </div>

            </div>
            <div slot = 'right-menu'>
              <v-swipe-btn v-if="list.position != 0" :width="50" @click="standUpTask( list, index )" >
                恢复
              </v-swipe-btn>
              <v-swipe-btn v-if="list.position == 0" :width="50" @click="standUpTask( list, index )" >
                置顶
              </v-swipe-btn ><v-swipe-btn
                :width="50"
                v-if="list.position == 0"
                @click="sitDownTask( list, index )" >
                置底
              </v-swipe-btn ><v-swipe-btn v-if="role== 'creator' " :width="50" type="warn" >
              关闭
            </v-swipe-btn>
            </div>
          </v-swipeout>
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
