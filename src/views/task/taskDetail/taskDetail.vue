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
          // display: flex;
          flex-direction: column;
          justify-content: space-between;
          .task-name {
            font-size: 14*2px;
            color: #333;
            margin-top: 2*2px;
            overflow: hidden;
            height: 14*2px;
            text-overflow: ellipsis;
          }
          .task-detail {
            margin-top: 4*2px;
            font-size: 12px*2;
            text-overflow: ellipsis;
            position: relative;
            .task-detail-content {
              overflow: hidden;
              max-width: 109*2px;
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
              margin-bottom: 4px;
              margin-left: 10*2px;
            }
          }
          .progress {
            margin-top: 2*2px;
            height: 16*2px;
            display: flex;
            flex-wrap: nowrap;
          }
        }
        .task-focus {
          width: 80*2px;
          height: 32*2px;
          position: relative;
          margin-right: 9*2px;
          img {
            display: inline-block;
            height: 100%;
          }
          img:nth-child(1) {
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
          }
          img:nth-child(2) {
            height: 100%;
            position: absolute;
            z-index: 66666666;
            right: 0;
            top: 0;
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
        span {
          position: relative;
          max-width: 146*2px;
          text-align: center;
          font-size: 12px*2;
          line-height: 18*2px;
          height: 18*2px;
          font-family: PingFangSC-Light;
          color: rgba(102, 102, 102, 1);
          display: block;
          margin: 0 auto;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          img {
            height: 10px;
            right: 30px;
            display: inline-block;
            top: 14px;
            position: absolute;
          }
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
        margin-top: 7*2px;
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
  min-width: 140px;
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
  .current-no-progress {
    text-align: center;
    height: 40px*2;
    line-height: 80px;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    img {
      display: inline-block;
      height: 60px;
      line-height: 80px;
    }
  }
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
  min-width: 55*2px;
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
  margin-left: 15*2px;
  width: auto;
  display: inline-block;
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
  .fadeIn;
  .animated;
}

.zoomInDown-leave-active {
  .fadeOut;
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
  animation: bounceIn 0.5s ease;
}

.bounceIn-leave-active {
  animation: bounceOut 0.5s ease;
}
</style>
<template>
  <div class="task-detail-container">
    <div class="task-detail-slide">
      <div class="panel c-1 c_white-bg">
        <div class="task-slide-top">
          <div class="user-icon">
            <img v-if="headImg" :src="headImg" />
            <img v-else src="../../../assets/img/default-image.png" />
          </div>
          <div class="right">
            <div class="show-task-detail">
              <div class="task-name">{{taskName}}</div>
              <div class="task-detail" >
                <span class="task-detail-content">
                  {{taskDesc}}
                </span>
                <img  v-show="taskDesc.length &&  taskDesc.length > 10" src="@/assets/img/icon-slide downward.png"  @click='showMoreTaskDesc'/>
              </div>
              <transition name="bounceIn">
                <div class="taskDesc-container" v-show="showDetail">
                  <detail :taskDesc='taskDesc' @close='closeDesc'></detail>
                </div>
              </transition>
              <div class="progress">
                <span :class="[common,active]">{{activeFont}}</span>
                <span class="deadline">{{deadLine}}</span>
              </div>
            </div>
            <div class="task-focus">
              <img @click='link_to_taskSetting' class="focus-star" v-show='role=="creator" && taskStatus != 2 ' src="@/assets/img/icon-set up.png" />
            </div>
          </div>
        </div>
        <!--轮播图-->
        <slide ref="scroll" :loop='loop' v-if="items.length"   >
          <div class="slider-item" v-for="(item,index) in items" :key="index">
            <img @click = "doWechatPreview(items, index)" :src="'//'+item.imgUrl" :alt="index">
          </div>
        </slide>
        <div v-else class="no-historyUpdate">
          <div class="logo">
            <img src="@/assets/img/image-notice.png" />
            <span>暂无资料上传</span>
          </div>
        </div>
        <div class="task-progress">
          <div class="task-desc" @click='toggleTaskProgress'>
            <span>
              {{progressDesc}} 
            <img v-show="progressDesc.length && progressDesc.length > 12 " src="@/assets/img/icon-slide downward.png" />       
            </span>
          </div>
          <div v-if="taskStatus != 0 &&  taskStatus != 3  " class="detail-btn" @click='towardsUpdateHistory'>
            {{ role == 'operator' && taskStatus != 4 && taskStatus != 5  ? '更新进度' : '查看上传历史'  }}
          </div>
        </div>
        <transition name="bounceIn">
          <div class="taskProgress" v-if="showTaskProgress">
            <detail :taskDesc='taskDesc' @close='closeTaskProgress'></detail>
          </div>
        </transition>
      </div>
    </div>
    <!--查看当前节点-->
    <div class="b-LR-10">
      <div class="panel b-MT-10 c_white-bg">
        <div class="b-LR-10 b-T-5 between">
          <p class="middle b_FS-14"><span class="dot success"></span><span class="b-L-4 b_FS-14 c_6 ">主题节点</span></p>
          <div @click='linkToSection' class="more b_FS-10  c_7">
            更多项目节点<img src="@/assets/img/icon-right-slide03.png" />
          </div>
        </div>
        <div class="progress-container">
          <div class="current-progress" v-if="currentPoint">
            <div class="left">
              {{ formatDate(currentPoint.pointTime) }}
            </div>
            <div class="right">
              {{currentPoint.pointDesc}}
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
              <img class="partyLogo" :src="item" v-for="item in parties" :key="item.id" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <comments v-if="taskStatus!= 0" :members='members' :taskId='taskId' @close='updateComments' :status="taskStatus" ></comments>
    <!--创建者 关闭 未开始 已拒绝 未开始且拒绝-->
    <div v-if="role == 'creator' && ( taskStatus == 1 || taskStatus == 6 ) " class="btn-warp b-LR-8 clearfix">
      <div @click='closeTask' class="btn-normal-warn b_left b-MT-10">
        关闭任务
      </div>
      <div @click='passTask' class="btn-normal-success b_right b-MT-10">
        验收通过
      </div>
    </div>
    <!-- 执行者   -->
    <div v-if="role == 'operator' && taskStatus == 0  " class="btn-warp b-LR-8 clearfix">
      <div @click="rejectTask" class="btn-normal-warn b_left b-MT-10 ">
        拒绝任务
      </div>
      <div @click='recieveTask' class="btn-normal-success b_right b-MT-10">
        接受任务
      </div>
    </div>

  </div>
</template>
<script>
import comments from "@/views/task/taskDetail/components/comments.vue";
import Slide from "@/common/base/slide/slide.vue";
import Detail from "./detail";
import { Convent } from "@/services";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      projectId : 0,

      currentPoint : null,
      currentNode:'',
      activeFont: "",
      headImg: "",
      taskDesc: "",
      endTime: "",
      startTime: "",
      checkStandard: "",
      isBrowse: "",
      isOpen: "",
      isPass: "",
      position: "",
      role: 0,
      taskStatus: "",
      loop: true,
      showSlide: true,
      currentIndex: 0,
      autoPlay: false,
      height: 382,
      width: 608,
      isLike: false,
      showDetail: false,
      showTaskProgress: false,
      node: " ",
      taskName: "",
      taskDesc: "",
      taskStatus : -1 ,
      taskId: "",
      active: "",
      deadLine: "暂未设置起止时间",
      taskProgressContent: `任务详情任务详情任务详情任务详情任务详情任务详情任务详情任务详情任务详情任务详情`,
      //项目群
      parties: [
        "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b",
        "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b",
        "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
      ],
      members: [],
      progressDesc : '' ,
      items: [
        //轮播图处理时   51 234 51遵守这个有原则
        //            "http://bpic.588ku.com/back_pic/05/18/63/5659c26b243dd10.jpg!ww650",
        //            "http://bpic.588ku.com/element_origin_min_pic/17/10/10/1217e53fd7a1324856f0b8b4891103ed.jpg",
        //            "http://bpic.588ku.com/element_origin_min_pic/16/06/20/165767ab7a315bd.jpg",
        //            "http://bpic.588ku.com/element_origin_min_pic/18/03/24/494a50847f3dbef27c31355f35d0393d.jpg" ,
        //            "http://bpic.588ku.com/element_origin_min_pic/17/10/10/1217e53fd7a1324856f0b8b4891103ed.jpg"
      ]
    };
  },
  computed: {
    // ...mapGetters(['getTaskHistoryOrUpdate']),//获取上传的轮播图图片
    ...mapGetters({
      getProjectId: "getProjectId"
    }),
    styleTaskFocus() {
      return {
        float: "right"
      };
    },
    common() {
      return "common";
    }
  },
  components: {
    comments,
    Slide,
    Detail
  },
  beforeRouteEnter: (to, from, next) => {
    console.log(to, from);
    if (to.path == "/taskDetail" && from.path == "/conventEntry") {
      next(vm => {
        // vm._getTaskId(); 有bug
        vm.getData();
        vm.getTaskComment();
      });
    } else {
      next(vm => {
        // vm._getTaskId();
        vm.getData();
        vm.getTaskComment();
      });
    }
  },
  methods: {

    ...mapActions(["setCurrentProject"]),
    updateComments() {
      this.getComments();
    },
    doWechatPreview(items, index){
      this.$wechat.doWechatPreview(items, index)
    },
    getComments() {
      const taskId = this.$route.query.taskId;
      const self = this
      Convent.getTaskComments( {
        taskId ,
        pageSize: "4"
      })
        .then(res => {
          console.log(res, "------一级评论------");
          if (res.code == 1 && res.status == 200) {
            self.members = res.data
          }
          if (res.code == 603) {
            self.$toast.show("任务暂未开启请勿评论", 1000);
          }
          console.log(self.members, "///////////////////////");
        })
        .catch(err => {
          console.log(err);
        });
    },
    ...mapMutations({
      SET_USER_ROLE: "SET_USER_ROLE"
    }),

    getTaskComment() {
      //获取评论
      let self = this;
      Convent.getTaskComments({
        taskId : this.$route.query.taskId ,
        pageSize: 4
      })
        .then(res => {
          console.log(res, "------一级评论------");
          self.members = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    _getTaskId() {
      if (window.location.hash.indexOf("taskId") > 0) {
        this.taskId = window.location.hash.split("?")[1].split("=")[1];
        console.log(this.taskId);
      }
    },
    formatDate(dateStr) {
      return dateStr.substring(5, 15).replace("-", "/");
    },
    fomatTime() {
      console.log(new Date().getMonth());
      let startTime_y = new Date(parseInt(this.startTime)).getFullYear();
      let startTime_m = new Date(parseInt(this.startTime)).getMonth() + 1;
      let startTime_d = new Date(parseInt(this.startTime)).getDate();

      let endTime_y = new Date(parseInt(this.endTime)).getFullYear();
      let endTime_m = new Date(parseInt(this.endTime)).getMonth() + 1;
      let endTime_d = new Date(parseInt(this.endTime)).getDate();

      startTime_y = startTime_y < 10 ? `0${startTime_y}` : startTime_y;
      startTime_m = startTime_m < 10 ? `0${startTime_m}` : startTime_m;
      startTime_d = startTime_d < 10 ? `0${startTime_d}` : startTime_d;

      endTime_y = endTime_y < 10 ? `0${endTime_y}` : endTime_y;
      endTime_m = endTime_m < 10 ? `0${endTime_m}` : endTime_m;
      endTime_d = endTime_d < 10 ? `0${endTime_d}` : endTime_d;
      this.deadLine = `${startTime_m}/${startTime_d}-${endTime_m}/${endTime_d}`;
      console.log(this.deadLine);
    },
    defineRole(role) {
      switch (role) {
        case 3: {
          this.role = "creator";
          break;
        }
        case 2: {
          this.role = "operator";
          break;
        }
        case 1: {
          this.role = "noTaskor";
          break;
        }
        case 0: {
          this.role = "visitor";
          break;
        }
      }
      console.log(this.role);
      //存取角色
      this.SET_USER_ROLE(this.role);
    },
    getData() {
      const taskId = this.$route.query.taskId
      const projectId = this.projectId;
      Convent.taskDetail({
        taskId,
        projectId
      })
        .then(res => {
          console.log(res);
          res = res.data;
          this.taskName = res.taskName;
          this.headImg = res.headImage;
          this.taskDesc = res.taskDesc;
          this.endTime = res.endTime;
          this.startTime = res.startTime;
          this.checkStandard = res.checkStandard;
          this.isBrowse = res.isBrowse;
          this.isOpen = res.isOpen;
          this.isPass = res.isPass;
          this.isLike = res.isStar == "0" ? false : true;
          this.position = res.position;
          this.defineStatus(res.taskStatus);
          this.taskStatus = res.taskStatus
          this.defineRole(res.role);
          this.fomatTime();

          const project = {
            projectId : res.projectId ,
            projectName : res.projectName ,
            role: this.role ,
            isCreate : res.role == 3 ? true : false
          }
      // set Vuex state
          this.setCurrentProject(project)

          if( res.currentPoint ){
            this.currentPoint = res.currentPoint
          }

          if (res.latestProgress) {
            this.items = res.latestProgress.progressImage.map(val => {
              return { imgUrl: val };
            });
            let last = this.items[this.items.length - 1];
            let first = this.items[0];
            this.items.unshift(last);
            this.items.push(first);
            this.progressDesc = res.latestProgress.progressDesc
            //this
          } else {
            this.items = [];
          }
        })
        .catch(err => {
          if (err) {
            this.$toast.show("发送请求失败!"), 500;
          }
        });
      //获取群头像
      Convent.getGroupAvatar(this.projectId)
        .then(res => {
          this.parties = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    defineStatus(status) {
      // 1	进行中(接受)
      // 2	关闭
      // 3	拒绝
      // 4	已完成
      // 5	提前完成
      // 6	超时
      // 7	未接受且超时
      console.log(status, "===================>>>>>");

      switch (status) {
        case 1: {
          this.active = "isInProgress";
          this.activeFont = "进行中";
          break;
        }
        case 2: {
          this.active = "isCompleted";
          this.activeFont = "关闭";
          break;
        }
        case 3: {
          this.active = "overDeadLined";
          this.activeFont = "拒绝";
          break;
        }
        case 4: {
          this.active = "isCompleted";
          this.activeFont = "已完成";
          break;
        }
        case 5: {
          this.active = "isCompleted";
          this.activeFont = "提前完成";
          break;
        }
        case 6: {
          this.activeFont = "overDeadLined";
          this.activeFont = "超时";
          break;
        }
        case 7: {
          this.active = "overDeadLined";
          this.activeFont = "未接受且超时";
          break;
        }
      }
    },
    taskDescActive() {
      console.log(11111);
    },
    closeTaskProgress() {
      this.showTaskProgress = false;
    },
    toggleTaskProgress() {
      if (this.progressDesc.length && this.progressDesc.length > 12) {
        this.showTaskProgress = !this.showTaskProgress;
      } else {
        this.showTaskProgress = false;
      }
    },
    closeDesc() {
      this.showDetail = false;
    },
    showMoreTaskDesc() {
      this.showDetail = !this.showDetail;
    },
    toggleLike() {
      this.isLike = !this.isLike;
      console.log(this.isLike);
      Convent.starTask(this.taskId, {
        taskId: this.taskId,
        isStar: this.isLike ? 1 : 0
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {});
    },
    link_to_taskSetting() {
      let self = this;
      this.$router.push({
        path: "/updateTaskSetting",
        query: {
          projectId:self.projectId,
          taskId:self.taskId
        }
      });
    },
    closeTask() {
      let self = this;
      this.$dialog.confirm({
        message: "确定关闭该任务?",
        confirm() {
          Convent.closeTask(self.taskId)
            .then(res => {
              console.log(res);
              if (res.code == 1 && res.status == 200) {
                self.$dialog.notice({
                  state: "pass",
                  title: "该任务已关闭",
                  task: self.taskName
                });
                self.$router.push("conventEntry"); //任务通过之后跳转至首页
              }
            })
            .catch(err => {
              self.$toast.show("提交失败!", 1000);
              self.$router.push("conventEntry"); //提交失败之后跳转至首页?
            });
        }
      });
    },
    passTask() {
      let self = this;
      this.$dialog.confirm({
        message: "确定通过该任务?",
        showBottom: false,
        confirm() {
          Convent.passTask(self.taskId)
            .then(res => {
              console.log(res);
              if (res.code == 1 && res.status == 200) {
                self.$dialog.notice({
                  state: "pass",
                  title: "该任务已通过",
                  task: "展台基础工作"
                });
                self.$router.push("conventEntry"); //任务通过之后跳转至首页
              }
            })
            .catch(err => {
              self.$toast.show("提交失败!", 1000);
              self.$router.push("conventEntry"); //提交失败之后跳转至首页?
            });
        }
      });
    },
    recieveTask() {
      let self = this;
      this.$dialog.confirm({
        message: "确定接受该任务?",
        confirm() {
          Convent.recieveTask(self.taskId)
            .then(res => {
              console.log(res);
              if (res.code == 1 && res.status == 200) {
                self.$dialog.notice({
                  state: "pass",
                  title: "已接受该任务",
                  task: self.taskName
                });
                self.$router.push("conventEntry"); //任务通过之后跳转至首页
              }
            })
            .catch(err => {
              self.$toast.show("提交失败!", 1000);
              self.$router.push("conventEntry"); //提交失败之后跳转至首页?
            });
        }
      });
    },
    rejectTask() {
      let self = this;
      this.$dialog.confirm({
        message: "确定拒绝该任务?",
        showBottom: false,
        confirm() {
          Convent.rejectTask(self.taskId)
            .then(res => {
              console.log(res);
              if (res.code == 1 && res.status == 200) {
                self.$dialog.notice({
                  state: "pass",
                  title: "已拒绝该任务",
                  task: self.taskName
                });
                self.$router.push("conventEntry"); //任务通过之后跳转至首页
              }
            })
            .catch(err => {
              self.$toast.show("提交失败!", 1000);
              self.$router.push("conventEntry"); //提交失败之后跳转至首页?
            });
        }
      });
    },
    towardsUpdateHistory() {

      if( this.taskStatus == 0 ){
        this.$toast.show('任务暂未开始')
        return
      }
      if( this.role != 'operator' && this.items.length == 0 ){
        this.$toast.show('暂无更新')
        return
      }
      if (this.role != "operator" && this.items.length == 7) {
        this.$toast.show("任务已拒绝");
        return;
      }

      const taskId = this.$route.query.taskId;
      //查看历史上传  已完成不能更新只能查看
      if (
        this.role == "operator" &&
        this.taskStatus != 4 &&
        this.taskStatus != 5
      ) {
        this.$router.push({
          path: `taskHistoryOrUpdate?taskId=${taskId}&mode=edit`
        });
      } else {
        this.$router.push({
          path: `taskHistoryOrUpdate?taskId=${taskId}`
        });
      }
    },
    linkToSection() {
      this.$router.push({
        path: "/section?role=" + this.role
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
    }
  },
  created() {
    this.init();
  },
  mounted() {
    const projectId = this.$route.query.projectId
    this.taskId = this.$route.query.taskId
    if( projectId ){
      this.projectId = projectId
    }
    else{
      this.projectId = this.getProjectId
    }

  },
  beforeDestroy() {
    this.timer = null;
  }
};
</script>
