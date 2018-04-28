<style lang="less" scoped>
.appointer-container {
  width: 100%;
  height: 100vh;
  header {
    width: 100%;
    height: 65*2px;
    position: relative;
    img.bg {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    img.invite {
      position: absolute;
      right: 10*2px;
      top: 10*2px;
      height: 15*2px;
      z-index: 1;
    }
    ul.list-items {
      position: absolute;
      bottom: 15*2px;
      z-index: 1;
      height: 14*2px;
      width: 100%;
      display: flex;
      li {
        color: #fff;
        height: 20*2px;
        min-width: 24*2px;
        font-size: 14*2px;
        text-align: center;
        span {
          display: inline-block;
          height: 100%;
        }
      }
      li.lists {
        width: 130*2px;
        text-align: left;
        span {
          display: inline-block;
          height: 100%;
          margin-left: 14*2px;
        }
      }
      li:not(.lists) {
        flex: 1;
      }
      li:nth-child(1) {
        width: 160*2px;
      }
    }
  }
  .editDeadTime {
    width: 100%;
    height: 300*2px;
    overflow: hidden;
    background: linear-gradient(
      to bottom,
      rgba(105, 198, 254, 0.6),
      rgba(105, 198, 254, 0.6)
    );
    ul {
      width: 100%;
      background: #fff;
    }
    li {
      display: flex;
      align-items: center;
      height: 50*2px;
      font-family: PingFangSC-Regular;
      font-size: 16px*2;
      color: #333333;
      position: relative;
      background: #fff;
      border-bottom: 2px solid rgba(151, 151, 151, 0.21);
      &.sub-item {
        font-size: 16*2px !important;
        .select {
          position: absolute;
          left: 45*2px !important;
        }
      }
      .user {
        width: 160*2px;
        height: 50*2px;
        position: relative;
        .icon {
          position: absolute;
          top: 50%;
          left: 40*2px;
          transform: translateY(-50%);
          width: 30*2px;
          height: 30*2px;
          border-radius: 50%;
          border: 2px solid #14c9fe;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #d8d8d8;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .name {
          position: absolute;
          top: 50%;
          left: 75*2px;
          transform: translateY(-50%);
          margin-left: 10*2px;
          width: auto;
          font-family: PingFangSC-Regular;
          font-size: 16px*2;
          color: #333333;
          float: left;
        }
        .select {
          position: absolute;
          top: 50%;
          left: 15*2px;
          transform: translateY(-50%);
          width: 16*2px;
          height: 16*2px;
          border-radius: 50%;
          border: 1*2px solid #dbdbdb;
          display: flex;
          justify-content: center;
          align-items: center;
          float: left;
          img {
            display: inline-block;
            width: 15*2px;
            height: 15*2px;
          }
        }
      }
      :not(.user) {
        flex: 1;
      }
      img.editpng {
        display: inline-block;
        height: 26*2px;
        margin-right: 13*2px;
      }
      div.editmore {
        display: inline-block;
        position: absolute;
        right: 14*2px;
        width: 40px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        img.editmore {
          display: inline-block;
          height: 12*2px;
        }
      }
    }
  }
}

.update {
  width: 32*2px;
  text-align: center;
}

.comments {
  width: 32*2px;
  text-align: center;
}

.arrow {
  width: 26*2px;
  height: 100%;
  text-align: center;
  img {
    display: inline-block;
    line-height: 50*2px;
    width: 10*2px;
    margin-top: 50%;
    transform: translateY(-50%);
  }
}

.progress {
  width: 32*2px;
  text-align: center;
}

.active {
  border-bottom: 2*2px solid #fff;
}

.active-font {
  color: #69a1f1;
}

.operate {
  width: 100%;
  height: 45*2px;
  display: flex;
  position: fixed;
  bottom: 0;
  .chat {
    width: 45*2px;
    height: 45*2px;
    display: flex;
    justify-content: center;
    background: #fff;
    align-items: center;
    .chat- {
      width: 30*2px;
      color: #9d9d9d;
      font-size: 10*2px;
      text-align: center;
      img {
        display: block;
        width: 18*2px;
        margin: 0 auto;
        margin-top: 4*2px;
      }
      p {
        margin-top: 8*2px;
      }
    }
  }
  .addExcutor {
    flex: 1;
    font-family: PingFangSC-Regular;
    font-size: 16px*2;
    color: #ffffff;
    line-height: 45*2px;
    text-align: center;
    background-image: linear-gradient(-180deg, #86c0f8 0%, #4e8cee 100%);
  }
  .deleteBtn {
    flex: 1;
    font-family: PingFangSC-Regular;
    font-size: 16px*2;
    color: #ffffff;
    line-height: 45*2px;
    text-align: center;
  }
  .deleteExcutor {
    background-image: linear-gradient(-180deg, #f1baaf 0%, #ea6e5d 100%);
  }
  .deleteExcutorDisable {
    background: linear-gradient(
      180deg,
      rgba(224, 224, 224, 1),
      rgba(183, 183, 183, 1)
    );
  }
}

.active_zoom {
  animation: zoom 0.5s ease;
}
.scale-enter-active {
  animation: scale 0.5s ease;
}
.scale-leave-active {
  animation: scale 0.5s ease;
}
@keyframes zoom {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.5;
  }
}

@keyframes scale {
  0% {
    transform: scale(1, 1);
    opacity: 1;
  }
  50% {
    transform: scale(0.9, 0.9);
    opacity: 0.8;
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}

#name {
  font-size: 12*2px;
  width: auto;
}
</style>
<template>

  <div class="appointer-container">
    <header ref="banner">
      <img class="bg" src='@/assets/img/appointer.png' />
      <ul class="list-items">
        <li class="lists">
          <span>成员列表</span>
        </li>
        <li v-for="(item,index) in navs" :key="index">
          <span>{{item.name}}</span>
        </li>
        <li></li>
      </ul>
      <img @touchstart='inviteOthers' class="invite" src="@/assets/img/icon-menu.png">
      <share :showShare='showShare'>
        <ul class="share-items">
          <div class="arrow"></div>
          <li><img src="@/assets/img/01.png" />微信分发</li>
          <li @touchstart='face_to_face'><img src="@/assets/img/02.png" />面对面发</li>
        </ul>
      </share>
    </header>
    <div class="editDeadTime" ref="lisItem" :style='styleObj'>
      <scroll>
        <ul>
          <div v-for="(item,index) in taskExecutors" :key="index">
            <li :userId='item[0].userId' :sex='item[0].sex'>
              <div class="user">
                <div @touchstart='select(index,item[0].userId,item)' class="select">
                  <img src="@/assets/img/sign-selected.png" v-show="index == currentIndex && showArr[index] == true" />
                </div>
                <div class="icon">
                  <img v-lazy="item[0].headImage">
                </div>
                <div class="name">{{item[0].nickname}}</div>
              </div>
              <div class="update">{{item[0].progressNum}}</div>
              <div class="comments">{{item[0].commentNum}}</div>
              <div class="progress">{{item[0].progress}}</div>
              <div class="arrow" @touchstart='showSub(index)'>
                <img :src="imgUrl(index)" v-show="item.length>1" />
              </div>
            </li>
            <transition-group name='scale'>
              <li class="sub-item" v-for="(item_,index_) in item" v-if="isSubShow[index] && item.length>1" :key="index_">
                <!--下拉可见-->
                <div class="user">
                  <div @touchstart='selectedSub(index,index_,item_)' class="select">
                    <img src="@/assets/img/sign-selected.png" v-show="item_.isSelected" />
                  </div>
                  <div class="name" id="name">{{item_.taskName}}</div>
                </div>
                <div class="update">{{item_.progressNum}}</div>
                <div class="comments">{{item_.commentNum}}</div>
                <div class="progress">{{item_.progress}}</div>
                <div class="arrow">
                </div>
              </li>
            </transition-group>
          </div>
        </ul>
      </scroll>
    </div>
    <div class="operate">
      <div class="chat">
        <div class="chat-">
          <img src="@/assets/img/groups.png">
          <p>群聊</p>
        </div>
      </div>
      <div v-if="showBtntype" class="addExcutor" @touchstart='commandExcutor'>指派人员</div>
      <div v-if="!showBtntype" class="addExcutor" @touchstart='addExcutor'>添加人员</div>
      <div ref="deleteBtn" :class="{deleteBtn:true,deleteExcutor: showBtntype,deleteExcutorDisable :!showBtntype}" @touchstart.native='deleteExcutor'>删除人员</div>
    </div>
    <invites   :showInvite='taskExecutors.length>0?false:true' ></invites>
    <qrcode :showQrcode='showQrcode' @closeQrcode ='closeQrcode' :projectId='projectId' :taskId = 'taskId'></qrcode>  
  </div>
</template>
<script>
import scroll from "@/common/base/scroll/scroll.vue";
import qrcode from "@/views/task/appointMessager/qrcode.vue";
import invites from "./invite.vue";
import share from "./share.vue";
import { Convent } from "@/services";
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      showShare: false, //分享
      isExtend: false, //点击显示下拉
      isSubShow: "",
      isSelectedShow: "",
      showBtntype: false, //默认显示添加成员按钮
      flag: false, //第一次进入添加成员界面
      type: "updated",
      showInvite: false,
      showQrcode: false,
      projectId: "",
      taskId: "",
      userId: "",
      navs: [
        {
          name: "更新",
          type: "update"
        },
        {
          name: "评论",
          type: "comments"
        },
        {
          name: "进度",
          type: "progress"
        }
      ],
      currentIndex: -1,
      nowIndex: 0,
      taskExecutors: [],
      showArr: []
    };
  },
  computed: {
    ...mapGetters({
      getTaskExecutor: "getTaskExecutor"
    }),
    styleObj() {
      if (this.taskExecutors.length >= 6) {
        return {
          background: `linear-gradient(to bottom, rgba(105, 198, 254, .6), rgba(105, 198, 254, .6))`
        };
      } else {
        return {
          background: ` rgb(244, 244, 244)`
        };
      }
    }
  },
  watch: {
    taskExecutors(newVal) {
      if (newVal) {
        this.defineShow(newVal);
      }
    },
    showBtntype(newVal, oldVal) {
      console.log(newVal, oldVal);
      if (!newVal) {
        this.$refs.deleteBtn.removeEventListener("touchstart", () => {});
      } else {
        this.$refs.deleteBtn.addEventListener("touchstart", this.deleteExcutor);
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    // ...
    console.log(to, from);
    if (to.path == "/appointMessager" && from.path == "/addTaskSetting") {
      next(vm => {
        if (window.location.hash.includes("projectId")) {
          let reg = /projectId=\d{18}/;
          console.log(window.location.hash.match(reg));
          vm.projectId = window.location.hash.match(reg)
            ? window.location.hash.match(reg)[0].split("=")[1]
            : "";
          console.log("-------", vm.projectId);
          vm.getExcutorList(vm.projectId);
          // debugger;
        }
        if (window.location.hash.includes("taskId")) {
          let reg = /taskId=\d{18}/;
          vm.taskId = window.location.hash.match(reg)
            ? window.location.hash.match(reg)[0].split("=")[1]
            : "";
          console.log("-----hasTaskId-----", vm.taskId);
          vm.getExcutorList(vm.projectId);
          // debugger;
        }
        if (
          !(
            window.location.hash.includes("projectId") ||
            window.location.hash.includes("taskId")
          )
        ) {
          vm.$toast.show("请重新添加任务!", 500);
          vm.$router.push("addTaskSetting");
        }
      });
    } else {
      next(vm => {
        if (window.location.hash.includes("projectId")) {
          let reg = /projectId=\d{18}/;
          vm.projectId = window.location.hash.match(reg)
            ? window.location.hash.match(reg)[0].split("=")[1]
            : "";
          console.log("---pid----", vm.projectId);
          vm.getExcutorList(vm.projectId);
        } else if (window.location.hash.includes("taskId")) {
          let reg = /taskId=\d{18}/;
          vm.taskId = window.location.hash.match(reg)
            ? window.location.hash.match(reg)[0].split("=")[1]
            : "";
          console.log("-----hasTaskId-----", vm.taskId);
          // debugger;
        } else {
          vm.$toast.show("请重新添加任务!", 500);
          vm.$router.push("addTaskSetting");
        }
      });
    }
  },
  methods: {
    ...mapMutations({
      SET_USER_ID: "SET_USER_ID"
    }),
    defineShow(arr) {
      console.log(arr);
      this.showArr = new Array(arr.length).fill(false);
    },
    getExcutorList(id) {
      console.log(id);

      Convent.getExcutorList(id) //项目id
        .then(res => {
          console.log(Object.keys(res.data), Object.values(res.data));
          this.taskExecutors = [...Object.values(res.data)];
          console.log(this.taskExecutors);
          // debugger;
        })
        .catch(err => {
          console.log(err);
        });
    },
    closeQrcode() {
      this.showQrcode = false;
    },
    face_to_face() {
      this.showShare = !this.showShare;
      this.showQrcode = !this.showQrcode;
    },
    selectedSub(preIndex, selfIndex, item) {
      console.log(preIndex, selfIndex, item);
    },
    select(selfIndex, userId, item) {
      console.log(selfIndex, userId, item);
      this.currentIndex = selfIndex;
      this.userId = userId;
      this.showArr[selfIndex] = !this.showArr[selfIndex];
      this.showBtntype = !this.showBtntype;
    },
    progress(item) {
      return "100%";
    },
    imgUrl(index) {
      if (this.isExtend && this.currentIndex === index) {
        return require("@/assets/img/05.png");
      } else {
        return require("@/assets/img/04.png");
      }
    },
    showSub(index) {
      this.currentIndex = index;
      console.log(index);
      this.isSubShow[index] = !this.isSubShow[index];
      this.isExtend = !this.isExtend;
    },
    inviteOthers() {
      //分享
      console.log("------------------------->>>");
      this.showInvite = !this.showInvite;
      this.showShare = !this.showShare;
    },
    commandExcutor() {
      console.log(this.userId, this.projectId, this.taskId);
      this.SET_USER_ID(this.userId);
      Convent.cmdExcutor(this.taskId, {
        taskId: this.taskId,
        userId: this.userId,
        projectId: this.projectId
      })
        .then(res => {
          console.log(res);
          if (res.code == 1 && res.status == 200) {
            this.$router.push({
              path: "/addTaskSetting",
              query: {
                taskId: this.taskId,
                projectId: this.projectId,
              }
            });
          }
        })
        .catch(err => {});
    },
    addExcutor() {
      let self = this;
      if (this.showBtntype) {
        //指派人员
        this.SET_TASK_EXECUTOR({
          index,
          isSelected
        });
        this.$router.push({
          path: "/addTaskSetting",
          query: {
            taskId: this.taskId
          }
        });
        this.showBtntype = false;
        return;
      } else {
        this.showShare = !this.showShare;
      }
    },
    deleteExcutor() {//删除项目成员
      this.showBtntype = !this.showBtntype;
      let self = this;
      if (this.showBtntype) {
        this.$dialog.confirm({
          message: "确定删除该成员?",
          operate() {
            //已经选中成员
            Convent.deleteExcutor(self.projectId, {
              projectId: self.projectId,
              userId: self.userId
            })
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
          }
        });
      }
    },
    ...mapMutations({
      SET_TASK_EXECUTOR: "SET_TASK_EXECUTOR",
      SORT_TASK_EXECUTOR: "SORT_TASK_EXECUTOR",
      ADD_TASK_EXECUTOR: "ADD_TASK_EXECUTOR",
      DELETE_TASK_EXECUTOR: "DELETE_TASK_EXECUTOR"
    }),
    selected(index, item) {
      console.log(index, item);
    },
    changeIndex(i, type) {
      this.type = type;
      this.currentIndex = i; //对数组进行排序
      this.sort(type);
      this.clearClass(type);
    },
    clearClass(type) {
      let updates = document.querySelectorAll(".update");
      let comments = document.querySelectorAll(".comments");
      let progess = document.querySelectorAll(".progress");
      this.$nextTick(() => {
        this.removeClass(updates, "active-font");
        this.removeClass(comments, "active-font");
        this.removeClass(progess, "active-font");
        this.activeClass(type);
      });
    },
    removeClass(doms, className) {
      console.log("doms", doms);
      doms.forEach((item, index) => {
        item.classList.remove(className);
      });
    },
    activeClass(type) {
      let doms = document.querySelectorAll(`.${type}`);
      doms.forEach((item, index) => {
        item.classList.add("active-font");
      });
    },
    sort(type) {
      this.SORT_TASK_EXECUTOR(type);
      console.log(type, this.taskExecutor);
    },
    initSelectedShow() {
      let arr = new Array(this.taskExecutors.length).fill([]),
        i = 0,
        data = this.taskExecutors;
      for (i; i < data.length; i++) {
        arr[i] = data[i].map((val, index) => {
          return false;
        });
      }
      this.isSelectedShow = arr;
    },
    init() {
      document
        .querySelector(".deleteBtn")
        .addEventListener("touchstart", this.deleteExcutor);
      if (this.taskExecutors.length) {
        this.showInvite = true;
      } else {
        this.showInvite = false;
      }
      this.isSubShow = new Array(this.taskExecutors.length).fill(false);
      console.log(this.taskExecutors);
    },
    getExcutors() {
      this.getters = setInterval(() => {
        this.getExcutors(this.projectId);
      }, 1000);
    }
  },
  beforeRouteLeave: (to, from, next) => {
    // ...
    next(vm => {
      clearInterval(vm.getters);
    });
  },
  components: {
    scroll,
    invites,
    share,
    qrcode
  },
  created() {},
  mounted() {
    this.init();
    this.initSelectedShow();
    this.getExcutors();
  }
};
</script>
