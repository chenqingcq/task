<style lang="less" scoped>
  @import "../../../assets/css/animate.less";
  @keyframes scale {
    0% {
      transform: scale(1.5, 1.5);
      opacity: 0.5;
    }
    50% {
      transform: scale(0.8, 0.8);
      opacity: 0.8;
    }

    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }

  .task-detail-slide {
    padding: 4*2px 10*2px 0 10*2px;
    .panel {
      height: 340*2px;
      padding: 10*2px;
      position: relative;
      .task-slide {
        margin-top: 17*2px;
      }
      .task-slide-top {
        height: 57*2px;
        display: flex;
        .user-icon {
          width: 57*2px;
          height: 57*2px;
          background: gray;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #0093ff;
          img {
            display: inline-block;
            width: 56*2px;
            height: 56*2px;
            border-radius: 50%;
          }
        }
        .right {
          flex: 1;
          margin-left: 15*2px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .show-task-detail {
            flex: 1;
            height: 100%;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .task-name {
              font-size: 14*2px;
              color: #333;
              margin-top: 2*2px;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .task-detail {
              margin-top: 2*2px;
              font-size: 12px*2;
              text-overflow: ellipsis;
              position: relative;
              .task-detail-content {
                overflow: hidden;
                width: 109*2px;
                display: inline-block;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #666666;
                letter-spacing: 0;
                overflow: hidden;
              }
              img {
                display: inline-block;
                height: 12px;
                position: absolute;
                bottom: 6px;
                left: 110*2px;
              }
            }
            .progress {
              margin-top: 2*2px;
            }
          }
          .task-focus {
            width: 120*2px;
            height: 32*2px;
            padding-left: 100px;
            .focus-star {
              height: 100%;
              width: 74ox;
              display: inline-block;
              &:nth-child(1) {
                float: left;
              }
              &:nth-child(2) {
                float: right;
              }
              img {
                display: inline-block;
                height: 100%;
              }
            }
          }
        }
      }
      .task-progress {
        margin-top: 8*2px;
        position: absolute;
        bottom: 0;
        right: 10*2px;
        height: 50*2px;
        bottom: 10*2px;
        left: 10*2px;
        justify-content: center;
        .task-desc {
          display: block;
          width: 146*2px;
          margin: 0 auto;
          text-align: center;
          font-size: 12px*2;
          line-height: 18*2px;
          height: 18*2px;
          font-family: PingFangSC-Light;
          color: rgba(102, 102, 102, 1);
          span {
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
          }
        }
        .detail-btn {
          width: 124*2px;
          height: 28*2px;
          text-align: center;
          line-height: 28*2px;
          background-image: linear-gradient(0deg, #0093ff 0%, #1de0fd 100%);
          box-shadow: 0 2px 4px 0 rgba(23, 209, 254, 0.46);
          border-radius: 28*2px;
          color: #fff;
          font-family: PingFangSC-Regular;
          font-size: 14*2px;
          margin: 0 auto;
          margin-top: 5*2px;
        }
        img {
          position: absolute;
          display: block;
          top: 8*2px;
          left: 244*2px;
          height: 10px;
        }
      }
    }
  }

  .task-slide {
    position: relative;
    .arrow {
      position: absolute;
      height: 21*2px;
      top: 50%;
      z-index: 0;
      transform: translateY(-50%);
      width: 100%;
      /*background: red;*/
      .left-arrow {
        float: left;
        height: 21*2px;
        width: 21*2px;
        img {
          display: inline-block;
          height: 100%;
          transform: rotate(-180deg);
        }
      }
      .right-arrow {
        float: right;
        height: 21*2px;
        width: 21*2px;
        img {
          display: inline-block;
          height: 100%;
          float: right;
        }
      }
    }
  }

  .more {
    height: 12*2px;
    display: flex;
    align-items: center;
    font-family: PingFangSC-Medium;
    color: #999;
    font-size: 10*2px;
    img {
      display: inline-block;
      height: 8px*2;
      margin-left: 4*2px;
    }
  }

  .slider-item {
    width: 608px;
    height: 382px;
    float: left;
    img {
      display: block;
      height: 100%;
      width: 100%;
      padding: 2px;
    }
  }

  .judge-btn {
    height: 34*2px;
    width: 100%;
    /*background: red;*/
    padding: 0 10*2px;
    margin-top: 8*2px;
    display: flex;
    .pass {
      font-family: PingFangSC-Regular;
      font-size: 16px*2;
      color: #ffffff;
      height: 100%;
      background-image: linear-gradient(-180deg, #f1baaf 0%, #ea6e5d 100%);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
      border-radius: 2px;
      width: 172*2px;
      /*line-height:172*2px;*/
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 11*2px;
    }
    .failed {
      font-family: PingFangSC-Regular;
      font-size: 16px*2;
      color: #ffffff;
      height: 100%;
      width: 172*2px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(-180deg, #86c0f8 0%, #4e8cee 100%);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
      border-radius: 2px;
    }
  }

  .progress-container {
    height: auto;
    .current-progress {
      padding: 4*2px 10*2px 8*2px 10*2px;
      font-family: PingFangSC-Medium;
      height: auto;
      display: flex;
      font-weight: 100;
      color: #525252;
      justify-content: space-between;
      .left {
        font-size: 22*2px;
        color: #333;
        height: 34*2px;
        margin-left: 12*2px;
        margin-right: 30*2px;
      }
      .right {
        font-size: 12px*2;
        width: 233*2px;
        height: auto;
        color: rgba(51, 51, 51, 1);
        line-height: 34px;
        font-family: PingFangSC-Medium;
        font-size: 12*2px;
        /*text-overflow: -o-ellipsis-lastline;*/
        /*overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;*/
      }
    }
  }

  .between {
    padding-top: 16px !important;
  }

  img.partyLogo {
    display: inline-block;
    width: 16*2px;
    height: 16*2px;
    border-radius: 50%;
    background: #999;
    margin-left: 5*2px;
    border: 2px solid #0093ff;
  }

  .common {
    display: inline-block;
    font-size: 10px*2;
    font-family: PingFangSC-Regular;
    color: rgba(255, 255, 255, 1);
    border-radius: 9*2px;
    width: 55*2px;
    height: 16*2px;
    text-align: center;
    line-height: 16*2px;
  }

  .isCompleted {
    background-image: linear-gradient(-180deg, #c1fe7f 0%, #74c126 100%);
  }

  .isInProgress {
    background-image: linear-gradient(-180deg, #feea7f 0%, #fbcc52 100%);
  }

  .overDeadLined {
    background-image: linear-gradient(-180deg, #fec37f 0%, #ec584b 100%);
  }

  .deadline {
    font-size: 10*2px;
    font-family: PingFangSC-Regular;
    color: rgba(102, 102, 102, 1);
    margin-left: 4*2px;
  }

  .no-historyUpdate {
    overflow: hidden;
    margin: 0 auto;
    width: 608px;
    height: 382px;
    margin-top: 17*2px;
    .logo {
      width: auto;
      height: 100%;
      margin-top: 40*2px;
      img {
        margin: 0 auto;
        display: block;
        width: 145*2px;
        animation: scale 0.5s ease;
      }
      span {
        display: block;
        margin: 0 auto;
        margin-top: 4*2px;
        font-size: 18*2px;
        font-family: PingFangSC-Regular;
        color: rgba(255, 115, 100, 1);
        text-align: center;
      }
    }
  }

  @-webkit-keyframes zoomInDown {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }

  @keyframes zoomInDown {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }

  .zoomInDown {
    -webkit-animation-name: zoomInDown;
    animation-name: zoomInDown;
  }

  @-webkit-keyframes zoomOut {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    to {
      opacity: 0;
    }
  }

  @keyframes zoomOut {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    to {
      opacity: 0;
    }
  }

  .zoomOut {
    -webkit-animation-name: zoomOut;
    animation-name: zoomOut;
  }

  .zoomInDown-enter-active {
    .zoomInDown;
    .animated;
  }

  .zoomInDown-leave-active {
    .zoomOut;
    .animated(0.1s);
  }

  .canelLike-leave-active {
    .fadeOut;
    .animated(0.1s);
  }

  .canelLike-enter-active {
    .fadeIn;
    .animated;
  }

  .taskDesc-container {
    position: absolute;
    top: 32*2px;
    width: 194*2px;
    background: rgb(255, 255, 255);
    /*min-height: 64*2px;*/
    z-index: 111111;
    height: auto;
    border-radius: 5px;
  }

  .taskProgress {
    position: absolute;
    overflow: hidden;
    bottom: -6*2px;
    left: 81*2px;
    width: 194*2px;
    min-height: 64*2px;
    z-index: 111111;
    border-radius: 5px;
    box-shadow: 0px 0px 20*2px rgba(177, 177, 177, 0.6);
  }

  .bounceIn-enter-active {
    animation: bounceIn .5s ease;
  }

  .bounceIn-leave-active {
    animation: bounceOut .5s ease;
  }

</style>
<template>
  <div class="task-detail-container">
    <div class="task-detail-slide">
      <div class="panel c-1 c_white-bg">
        <div class="task-slide-top">
          <div class="user-icon">
            <img src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" />
          </div>
          <div class="right">
            <div class="show-task-detail">
              <div class="task-name">任务名名称</div>
              <div class="task-detail" @touchstart='showMoreTaskDesc'>
                <span class="task-detail-content">
                  {{taskDesc}}
                </span>
                <img src="@/assets/img/icon-slide downward.png" />
              </div>
              <transition name="bounceIn">
                <div class="taskDesc-container" v-show="showDetail">
                  <detail :taskDesc='taskDesc' @close='closeDesc'></detail>
                </div>
              </transition>
              <div class="progress">
                <span :class="[common,active]">{{activeFont}}</span>
                <span class="deadline">01/20-02/21</span>
              </div>
            </div>
            <div class="task-focus">
              <div @touchstart='link_to_taskSetting' class="focus-star" v-show="role=='creator'">
                <img src="@/assets/img/icon-set up.png" />
              </div>
              <transition name="zoomInDown">
                <div v-if='isLike' @touchstart="toggleLike" class="focus-star ">
                  <img class="focus-star" src="@/assets/img/icon-collection-highlight.png" />
                </div>
              </transition>
              <transition name="canelLike">
                <div v-if="!isLike" @touchstart="toggleLike" class="focus-star">
                  <img class="focus-star" src="@/assets/img/icon-collection-normal.png" :style="styleTaskFocus" />
                </div>
              </transition>

            </div>
          </div>
        </div>
        <!--轮播图-->
        <slide ref="scroll" :loop='loop' v-if="showSlide">
          <div class="slider-item" v-for="(item,index) in items" :key="index">
            <img @load='loadImage' :src="item.imgUrl">
          </div>
        </slide>
        <div v-else class="no-historyUpdate">
          <div class="logo">
            <img src="@/assets/img/image-notice.png" />
            <span>暂无资料上传</span>
          </div>
        </div>
        <div class="task-progress">
          <div class="task-desc" @touchstart='toggleTaskProgress'>
            <span>展台基础已布置完毕展台基础已布置完毕台基础已布置完毕</span>
            <img src="@/assets/img/icon-slide downward.png" />
          </div>
          <div class="detail-btn" @touchstart='towardsUpdateHistory'>
            查看上传历史
          </div>
        </div>
        <transition name="bounceIn">
          <div class="taskProgress" v-show="showTaskProgress">
            <detail :taskDesc='taskProgressContent' @close='closeTaskProgress'></detail>
          </div>
        </transition>
      </div>
    </div>
    <!--查看当前节点-->
    <div class="b-LR-10">
      <div class="panel b-MT-10 c_white-bg">
        <div class="b-LR-10 b-T-5 between">
          <p class="middle b_FS-14"><span class="dot success"></span><span class="b-L-4 b_FS-14 c_6 ">主题节点</span></p>
          <div @touchstart='linkToSection' class="more b_FS-10  c_7">
            更多项目节点<img src="@/assets/img/icon-right-slide03.png" />
          </div>
        </div>
        <div class="progress-container">
          <div class="current-progress">
            <div class="left">01/30</div>
            <div class="right">
              展台基础已布置完毕展台基础已布置完毕展台基础已布置完毕展台基础已布置完毕展台基础已布置完毕展台基础已布置完毕展台基础已布置完毕
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="project-party">
      <div class="b-LR-10">
        <div class="panel b-MT-10 c_white-bg">
          <div class="b-LR-10 b-T-5 between ">
            <p class="middle b_FS-14 c_6 "><span class="dot success"></span><span class="b-L-4">进入项目群</span></p>
            <div class="entry-project-party">
              <img class="partyLogo" :src="item.partyImg" v-for="item in parties" :key="item.id" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <comments :members='members'></comments>
    <div v-if="role == 'creator'" class="btn-warp b-LR-8 clearfix">
      <div @touchstart='closeTask' class="btn-normal-warn b_left b-MT-10">
        关闭任务
      </div>
      <div @touchstart='passTask' class="btn-normal-success b_right b-MT-10">
        验收通过
      </div>
    </div>
    <!-- 执行者 -->
    <div v-if="role == 'operator'" class="btn-warp b-LR-8 clearfix">
      <div @touchstart="rejectTask" class="btn-normal-warn b_left b-MT-10 ">
        拒绝任务
      </div>
      <div @touchstart='recieveTask' class="btn-normal-success b_right b-MT-10">
        接受任务
      </div>
    </div>

  </div>
</template>
<script>
  import comments from "@/views/comments/comments";
  import Slide from "@/common/base/slide/slide.vue";
  import Detail from "./detail";
  import {
    mapGetters,
    mapMutations
  } from "vuex";
  export default {
    data() {
      return {
        loop: true,
        showSlide: true,
        currentIndex: 0,
        autoPlay: false,
        height: 382,
        width: 608,
        // 是否关注
        isLike: false,
        showDetail: false,
        showTaskProgress: false,
        taskDesc: `关注“失控奔驰车”事件的最新进展。上周，央视新闻频道《法治在线》栏目连续两天播出了针对这一事件调查，4月8日晚上，栏目组收到了奔驰公司专门给法治在线发来的一封情况说明。在这份情况说明当中，奔驰方面首次公布了对车辆情况的初步分析结果，初步判断车辆的定速巡航系统及驾驶系统当晚运行正常，并表
          示正在与薛先生沟通下一步的车辆检测工作。同时，车主薛先生也表示，希望可以尽快检测车辆，回归正常生活。`,
        taskProgressContent: `任务详情任务详情任务详情任务详情任务详情任务详情任务详情任务详情任务详情任务详情`,
        //项目群
        parties: [{
            partyImg: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b",
            id: 0
          },
          {
            partyImg: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b",
            id: 1
          },
          {
            partyImg: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b",
            id: 2
          }
        ],
        members: [{
            //审批留言
            name: "张三",
            role: "发布者",
            date: "x年x月x日",
            time: "2018.10.25",
            comments: `关注“失控奔驰车”事件的最新进展。上周，央视新闻频道《法治在线》栏目连续两天播出了针对这一事件调查，4月8日晚上，栏目组收到了奔驰公司专门给法治在线发来的一封情况说明。在这份情况说明当中，奔驰方面首次公布了对车辆情况的初步分析结果，初步判断车辆的定速巡航系统及驾驶系统当晚运行正常，并表
            示正在与薛先生沟通下一步的车辆检测工作。同时，车主薛先生也表示，希望可以尽快检测车辆，回归正常生活。`,
            imgUrl: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
          },
          {
            name: "李四",
            role: "执行者",
            date: "x年x月x日",
            time: "2018.10.25",
            comments: "会管家",
            imgUrl: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
          },
          {
            name: "王五",
            role: "观察者",
            date: "x年x月x日",
            time: "2018.10.25",
            comments: "会管家",
            imgUrl: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
          },
          {
            name: "小六",
            role: "观察者",
            date: "x年x月x日",
            time: "2018.10.25",
            comments: "会管家",
            imgUrl: "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
          }
        ],
        items: [{
            //轮播图处理时   51 234 51遵守这个有原则
            imgUrl: "http://bpic.588ku.com/back_pic/05/18/63/5659c26b243dd10.jpg!ww650"
          },
          {
            imgUrl: "http://bpic.588ku.com/element_origin_min_pic/17/10/10/1217e53fd7a1324856f0b8b4891103ed.jpg"
          },
          {
            imgUrl: "http://bpic.588ku.com/element_origin_min_pic/16/06/20/165767ab7a315bd.jpg"
          },
          {
            imgUrl: "http://bpic.588ku.com/element_origin_min_pic/18/03/24/494a50847f3dbef27c31355f35d0393d.jpg"
          },
          {
            imgUrl: "http://bpic.588ku.com/back_pic/05/18/63/5659c26b243dd10.jpg!ww650"
          },
          {
            imgUrl: "http://bpic.588ku.com/element_origin_min_pic/17/10/10/1217e53fd7a1324856f0b8b4891103ed.jpg"
          }
        ]
      };
    },
    computed: {
      // ...mapGetters(['getTaskHistoryOrUpdate']),//获取上传的轮播图图片
      ...mapGetters({
        role: "getProjectRole"
      }),
      styleTaskFocus() {
        return {
          float: 'right'
        }
      },
      common() {
        return "common";
      },
      active() {
        return "isInProgress"; //确定任务完成状态
      },
      activeFont() {
        return this.active === "isCompleted" ?
          "已完成" :
          this.active == "isInProgress" ?
          "进行中" :
          this.active == "overDeadLined" ? "已超时" : "";
      }
    },
    components: {
      comments,
      Slide,
      Detail
    },
    methods: {
      recieveTask() {
        let self = this;
        this.$dialog.confirm({
          message: "确定接受该任务?",
          confirm() {
            self.passer = setTimeout(() => {
              self.$dialog.notice({
                state: "pass",
                title: "该任务已接受",
                task: "展台基础工作"
              });
            }, 200);
            self.timer = setTimeout(() => {
              self.$router.push("conventEntry");
            }, 1500);
          }
        });
      },
      taskDescActive() {
        console.log(11111);
        animati
      },
      closeTaskProgress() {
        this.showTaskProgress = false;
      },
      toggleTaskProgress() {
        this.showTaskProgress = !this.showTaskProgress;
      },
      closeDesc() {
        this.showDetail = false;
      },
      showMoreTaskDesc() {
        this.showDetail = !this.showDetail;
      },
      toggleLike() {
        this.isLike = !this.isLike;
      },
      link_to_taskSetting() {
        this.$router.push("addTaskSetting");
      },
      closeTask() {
        let self = this;
        this.$dialog.confirm({
          message: "确定关闭该任务?",
          confirm() {
            //确定关闭任务逻辑
            self.passer = setTimeout(() => {
              self.$dialog.notice({
                state: "pass",
                title: "该任务已关闭",
                task: "展台基础工作"
              });
            }, 200);
            self.timer = setTimeout(() => {
              self.$router.push("conventEntry");
            }, 1500);
          }
        });
      },
      passTask() {
        let self = this;
        this.$dialog.confirm({
          message: "确定通过该任务?",
          showBottom: false,
          confirm() {
            self.passer = setTimeout(() => {
              self.$dialog.notice({
                state: "pass",
                title: "该任务已通过",
                task: "展台基础工作"
              });
            }, 200);
            self.timer = setTimeout(() => {
              self.$router.push("conventEntry");
            }, 1500);
          }
        });
      },
      rejectTask() {
        let self = this;
        this.$dialog.confirm({
          message: "确定拒绝该任务?",
          showBottom: false,
          confirm() {
            self.passer = setTimeout(() => {
              self.$dialog.notice({
                state: "pass",
                title: "该任务已拒绝",
                task: "展台基础工作"
              });
            }, 200);
            self.timer = setTimeout(() => {
              self.$router.push("conventEntry");
            }, 1500);
          }
        });
      },
      towardsUpdateHistory() {
        //查看历史上传
        this.$router.push({
          path: "taskHistoryOrUpdate"
        });
      },
      linkToSection() {
        this.$router.push({
          path: "/section"
        });
      },
      loadImage() {
        //轮播加载
        if (!this.checkloaded) {
          this.checkloaded = true;
          this.$refs.scroll.refresh();
        }
      },
      taskHistoryOrUpdate() {
        this.$router.push("taskHistoryOrUpdate");
      },
      init() {
        console.log(this.getTaskHistoryOrUpdate); //获取历史上传图片
        if (!this.getTaskHistoryOrUpdate) {
          // this.showSlide = false;
        }
        //确认访问者身份(头像)
        //确认当前任务详情(任务名,任务详细介绍)
        //获取轮播图(上传任务图片)
        //获取任务节点信息(主体节点信息)
        //项目群信息(最多几个确认一下)
        //获取审批留留言信息
      }
    },
    created() {
      this.init();
    },
    mounted() {},
    beforeDestroy() {
      this.timer = null;
    }
  };

</script>
