<style lang="less" scoped>
.appointer-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  header {
    width: 100%;
    height: 65*2px;
    position: relative;
    img.bg {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    }
    img.invite {
      position: absolute;
      right: 10*2px;
      top: 10*2px;
      height: 15*2px;
      padding: 20px;
      box-sizing: content-box;
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
    height: 550*2px;
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
          min-width: 100px;
          max-width: 160px;
          font-family: PingFangSC-Regular;
          font-size: 12px*2;
          color: #333333;
          float: left;
          span {
            &:first-of-type {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              height: 32px;
              line-height: 32px;
              width: auto;
              display: block;
            }
          }
        }
        .select {
          position: absolute;
          top: 50%;
          left: 15*2px;
          z-index: 999;
          transform: translateY(-50%);
          width: 16*2px;
          height: 16*2px;
          border-radius: 50%;
          border: 1*2px solid #dbdbdb;
          // display: flex;
          // justify-content: center;
          // align-items: center;

          float: left;
          img {
            position: absolute;
            display: inline-block;
            position: absolute;
            z-index: 666;
            left: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-sizing: content-box;
            padding: 20px;
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
  box-sizing: content-box;
  padding: 10px;
  text-align: center;
  img {
    display: inline-block;
    line-height: 50*2px;
    width: 10*2px;
    margin-top: 50%;
    transform: translateY(-50%);
    box-sizing: content-box;
    padding: 20px;
  }
}

.progress {
  width: 32*2px;
  text-align: center;
}
.closed {
  width: 32*2px;
  font-size: 12*2px;
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

.taskname {
  font-size: 10*2px;
  min-width: 100px;
  max-width: 160px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.radio {
  opacity: 0;
}
.wechat-tip-img {
  width: 593px;
  height: 896/2px;
  margin-right: 20px;
  margin-top: 10px;
}
.showOrhidden {
  display: none !important;
}
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .operate {
    margin-bottom: 34px;
    background: #fff;
  }
}
</style>
<template>

  <div class="appointer-container" @click="hideShare">
    <header ref="banner">
      <img @click.prevent class="bg" src='@/assets/img/appointer.png' />
      <ul class="list-items">
        <li class="lists">
          <span>成员列表</span>
        </li>
        <li v-for="(item,index) in navs" :key="index">
          <span>{{item.name}}</span>
        </li>
        <li></li>
      </ul>
      <img @click.self='inviteOthers' class="invite" src="@/assets/img/icon-menu.png">
      <share   :showShare='showShare'>
        <ul slot="share" class="share-items">
          <div id="arrow"></div>
          <li @click="wechatShare" ><img src="@/assets/img/01.png" />微信分发</li>
          <li @click='face_to_face'><img src="@/assets/img/02.png" />面对面发</li>
        </ul>
      </share>
    </header>
    <div class="editDeadTime" ref="lisItem" :style='styleObj'>
      <scroll ref="scroll" >
        <ul>
          <div v-for="(item,index) in taskExecutors" :key="index">
            <li :userId='item[0].userId' :sex='item[0].sex'>
              <div class="user">
                <div class="select b_FS-0" >
                  <img @click='selectedSub($event,item[0].taskId,item[0].userId, 0 )' src="@/assets/img/sign-selected.png" class='radio' />
                </div>
                <div class="icon">
                  <img :src="item[0].headImage">
                </div>
                <div class="name">
                  <span>{{item[0].nickname}}</span>
                  <span class="taskname">{{item[0].taskName}}</span>
                </div>
              </div>
              <div class="update">{{item[0].progressNum}}</div>
              <div class="comments">{{item[0].commentNum}}</div>
              <div :class="{progress:true,closed:item[0].taskStatus == 2 && item.length == 1}">{{item[0].taskStatus== 2 && item.length == 1 ? "已关闭":item[0].progress}}</div>
              <div class="arrow" >
                <img @click='showSub($event,index)' :src="imgUrl" v-if="item.length>1" />
              </div>
            </li>
            <li class="sub-item showOrhidden" v-for="(_item,_index) in item"  v-if="item.length > 1" :key="_index"  >
              <!--点击可见-->
              <div class="user" >
                <div  class="select b_FS-0" v-show="_item.taskStatus != 2">
                  <img @click='selectedSub($event,_item.taskId,_item.userId, 1 )' src="@/assets/img/sign-selected.png" class="radio"/>
                </div>
                <div class="name taskname" >{{_item.taskName}}</div>
              </div>
              <div class="update">{{_item.progressNum}}</div>
              <div class="comments">{{_item.commentNum}}</div>
              <div :class="{progress:true,closed:_item.taskStatus == 2}">{{_item.taskStatus== 2? "已关闭":_item.progress}}</div>
              <div class="arrow" >

                </div>
            </li>
          </div>
        </ul>
      </scroll>
    </div>
    <div class="operate">
      <div class="chat" @click="link_to_groupChat">
        <div class="chat-">
          <img src="@/assets/img/groups.png">
          <p>群聊</p>
        </div>
      </div>
      <div v-if="!addMember" class="addExcutor" @click='commandExcutor'>指派人员</div>
      <div v-if="addMember" class="addExcutor" @click='addExcutor'>添加人员</div>
      <div ref="deleteBtn" :class="{deleteBtn:true,deleteExcutor:deleteMember,deleteExcutorDisable :doNothing}" @click='deleteExcutor'>{{deleteText}}</div>
    </div>
    <invites :showInvite='showInvite' @closeInvite='closeInvite' ></invites>
    <qrcode @updateMembers='updateMembers' :showQrcode='showQrcode' @closeQrcode='closeQrcode' :projectId='projectId' :expires='expires' :taskId = 'taskId'></qrcode>
    <!--微信分发&#45;&#45; 三点分享-->
    <!--<div class="wechatShare-b" >-->
      <!--<div class="mask">-->
      <!--</div>-->
      <!--<img src="@/assets/img/wechatShare.png" alt="">-->
    <!--</div>-->
    <v-pop  ref="popup" animate="top">
      <div class="text-right">
        <img class="wechat-tip-img" @click="closePop" src="@/assets/img/wechatShare.png" alt="">
      </div>

    </v-pop>
  </div>
</template>
<script>
import scroll from "@/common/base/scroll/scroll.vue";
import qrcode from "@/views/task/appointMessager/qrcode.vue";
import invites from "./invite.vue";
import share from "./share.vue";
import { Convent } from "@/services";
import { mapMutations, mapGetters } from "vuex";

import { WxShareApi2 } from "@/utils/wx.js";

console.log(WxShareApi2);

export default {
  data() {
    return {
      SUBISSHOW: true, //点击显示隐藏列表
      _flag: false,
      expires: 60,
      addMember: true, //添加人员
      deleteMember: false, //删除人员
      doNothing: true, //默认,
      deleteTaskId: "", //关闭任务的id跟当前创建的taski不一样
      showShare: false, //分享
      isExtend: false, //点击显示下拉
      subShow: false,
      show$: false,
      isSubShow: "",
      isSelectedShow: "",
      showBtntype: false, //默认显示添加成员按钮
      flag: false, //第一次进入添加成员界面
      type: "updated",
      showInvite: false,
      showQrcode: false,
      deleteText: "删除人员",
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
      currentIndex_: -1,
      nowIndex: 0,
      taskExecutors: [],
      // showArr: [],
      // deletSubArr: [],
      mode: 2,
      entry: 0 //默认入口为任务添加页面 0 更新页 1  其他 2,
    };
  },
  computed: {
    ...mapGetters({
      getTaskExecutor: "getTaskExecutor",
      getUserId: "getUserId"
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
    },
    imgUrl() {
      // if (this.SUBISSHOW) {
      // return require("@/assets/img/05.png");
      // } else {
      return require("@/assets/img/04.png");
      // }
    }
  },
  watch: {
    showBtntype(newVal, oldVal) {
      console.log(newVal, oldVal);
      if (!newVal) {
        this.$refs.deleteBtn.removeEventListener("click", () => {});
      } else {
        this.$refs.deleteBtn.addEventListener("click", this.deleteExcutor);
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    // ...
    console.log(to, from);
    if (to.path == "/appointMessager" && from.path == "/addTaskSetting") {
      next(vm => {
        vm.entry = 0;
        if (window.location.hash.includes("projectId")) {
          vm.projectId = to.query.projectId;
          vm.getExcutorList(vm.projectId);
        }
        if (window.location.hash.includes("taskId")) {
          let reg = /taskId=\d{18}/;
          vm.taskId = to.query.taskId;
        }
        // vm.wechatShare();
        if (
          !(
            window.location.hash.includes("projectId") ||
            window.location.hash.includes("taskId")
          )
        ) {
          vm.$dialog.message({
            message: "请重新添加任务!",
            icon: "fail"
          });
          vm.$router.push("addTaskSetting");
        }
      });
    } else if (
      to.path == "/appointMessager" &&
      from.path == "/updateTaskSetting"
    ) {
      next(vm => {
        vm.entry = 1;
        vm.projectId = to.query.projectId;
        vm.taskId = to.query.taskId;
        vm.getExcutorList(vm.projectId);
        // debugger
      });
    } else {
      next(vm => {
        vm.entry = 2;
        if (window.location.hash.includes("projectId")) {
          let reg = /projectId=\d{18}/;
          vm.projectId = window.location.hash.match(reg)
            ? window.location.hash.match(reg)[0].split("=")[1]
            : "";
          console.log("---pid----", vm.projectId);
          vm.getExcutorList(vm.projectId);
        }
        if (window.location.hash.includes("taskId")) {
          let reg = /taskId=\d{18}/;
          vm.taskId = window.location.hash.match(reg)
            ? window.location.hash.match(reg)[0].split("=")[1]
            : "";
          console.log("-----hasTaskId-----", vm.taskId);
          // debugger;
        }
        if (!vm.projectId && !vm.taskId) {
          vm.$dialog.message({
            message: "请重新添加任务!",
            icon: "fail"
          });
          vm.$router.push("addTaskSetting");
        }
      });
    }
  },
  methods: {
    status(_item) {
      if (_item.taskStatus == 0) {
        return "未开始";
      } else if (_item.taskStatus == 1) {
        if (_item.taskStatus == 1 && _item.endTime > _item.startTime) {
          return "超时";
        } else {
          return "进行中";
        }
      } else if (_item.taskStatus == 2) {
        return "关闭";
      } else if (_item.taskStatus == 3) {
        return "拒绝";
      } else if (_item.taskStatus == 4) {
        return "已完成";
      } else if (_item.taskStatus == 5) {
        return "提前完成";
      } else if (_item.taskStatus == 6) {
        return "超时完成";
      } else if (_item.taskStatus == 7) {
        return "超时未接受";
      }
    },
    ...mapMutations({
      SET_USER_ID: "SET_USER_ID"
    }),
    updateMembers() {
      this.getExcutorList(this.projectId);
      console.log("---------------------join");
    },
    hideShare(e) {
      let shareDOM = document.querySelector(".share-container");
      console.log(e, shareDOM);
      if (!!shareDOM) {
        this.showShare = false;
      }
    },
    link_to_groupChat() {
      console.log(this.projectId);
      let self = this;
      Convent.goToGroup(this.projectId)
        .then(res => {
          if (res.code == 1 && res.status == 200) {
            console.log(res.data);
            window.location.href = res.data;
          }
        })
        .catch(err => {
          console.log(err);
          this.$dialog.message({
            message: "跳转失败...",
            icon: "fail"
          });
        });
    },
    closeInvite() {
      this.showInvite = !this.showInvite;
      console.log("------------closeInvite------------------");
    },
    openPop() {
      this.$refs.popup.open();
    },
    closePop() {
      this.$refs.popup.close();
    },
    // defineShow(arr) {
    //   console.log(arr);
    //   this.showArr = new Array(arr.length).fill(false);
    // },
    getExcutorList(id) {
      console.log(id);
      // debugger;
      Convent.getExcutorList(id) //项目id
        .then(res => {
          console.log(Object.keys(res.data), Object.values(res.data));
          this.taskExecutors = [...Object.values(res.data)];
          console.log(
            this.taskExecutors,
            "---------------//成员//------------------------"
          );
          if (this.taskExecutors && this.taskExecutors.length) {
            this.showInvite = false; //
          } else {
            this.showInvite = true;
          }
          // debugger;
        })
        .catch(err => {
          console.log(err);
        });
    },
    closeQrcode() {
      this.showQrcode = false;
    },
    wechatShare() {
      var self = this;
      this.showShare = false;
      this.openPop();
      let shareData = {
        taskId: "",
        type: 0, // id类型 0: 任务ID 1: 项目ID
        title: "任务接受", // 分享标题
        desc: "任务接受描述", // 分享描述
        imgUrl:
          location.protocol +
          "//task-1256472463.cos.ap-guangzhou.myqcloud.com/wxshare-logo.png", // 分享图标
        success() {
          self.$toast.show("分享成功");
          self.closePop();
        }
      };
      if (this.taskId) {
        shareData.type = 0;
        shareData.id = this.taskId;
      } else {
        shareData.type = 1;
        shareData.id = this.projectId;
      }
      WxShareApi2(shareData);
    },
    face_to_face() {
      this.showShare = !this.showShare;
      this.showQrcode = !this.showQrcode;
    },
    debounce(delay, fn) {
      let _this = this;
      if (this.Share) {
        clearTimeout(this.Share);
      }

      this.Share = setTimeout(() => {
        _this.showShare = !_this.showShare;
      }, delay);
    },
    selectedSub(e, taskId, userId, mode) {
      this.$refs.scroll.refresh();
      console.log(e.target, taskId, userId, mode);
      this.SET_USER_ID(userId); //设置userid
      this.mode = mode;
      this.$nextTick(() => {
        let radios = document.querySelectorAll(".select>img"),
          i = 0;
        for (i; i < radios.length; i++) {
          if (!radios[i].classList.contains("radio") && radios[i] != e.target) {
            radios[i].classList.add("radio");
          }
        }
        if (e.target.classList.contains("radio")) {
          e.target.classList.remove("radio");
        } else {
          e.target.classList.add("radio");
          this.mode = 2;
        }
        //根据mode判断是删除人员还是删除任务
        switch (this.mode) {
          case 0: {
            console.log("选中成员");
            this.addMember = false;
            this.deleteMember = true;
            this.doNothing = false;
            this.deleteText = "删除人员";
            break;
          }
          case 1: {
            console.log("选中任务");
            this.addMember = true;
            this.deleteMember = true;
            this.doNothing = false;
            this.deleteText = "关闭任务";
            this.deleteTaskId = taskId;
            break;
          }
          case 2: {
            console.log("默认");
            this.addMember = true;
            this.deleteMember = false;
            this.doNothing = true;
            this.deleteText = "删除人员";
            break;
          }
          default: {
            console.log("默认");
            this.addMember = true;
            this.deleteMember = false;
            this.doNothing = true;
            this.deleteText = "删除人员";
          }
        }
      });
    },
    progress(item) {
      return "100%";
    },
    showSub(e, index) {
      this.$refs.scroll.refresh();
      console.log(e, "----this define show or hidden----");
      if (e.target.classList.contains("arrow-up")) {
        e.target.classList.remove("arrow-up");
        e.target.src = require("@/assets/img/04.png");
      } else {
        e.target.classList.add("arrow-up");
        e.target.src = require("@/assets/img/05.png");
      }
      let neededShowItems = e.target.parentNode.parentNode.parentNode.children,
        i = 1;
      if (neededShowItems.length > 1) {
        //显示子列表
        for (i; i < neededShowItems.length; i++) {
          if (neededShowItems[i].classList.contains("showOrhidden")) {
            neededShowItems[i].classList.remove("showOrhidden");
          } else {
            neededShowItems[i].classList.add("showOrhidden");
          }
        }
      }
    },
    inviteOthers() {
      //分享
      console.log("------------------------->>>");
      let self = this;
      this.showShare = !this.showShare;
      // this.debounce(200);
    },
    showToast(message) {
      let self = this;
      return new Promise((resolve, reject) => {
        if (true) {
          self.$dialog.message({
            message: message,
            icon: "fail"
          });
          resolve();
        } else {
          reject();
        }
      });
    },
    setExcutor() {
      let self = this;
      if (!self.taskId) {
        return;
      }
      Convent.getTaskBasicInfo(self.taskId)
        .then(res => {
          console.log("---基本任务信息--", res);
          if (res.code == 1 && res.status == 200) {
            self.$toast.show("指派成功!", 1000);
            self.$router.push({
              path:
                self.entry == 0
                  ? "/addTaskSetting"
                  : self.entry == 1 ? "updateTaskSetting" : "convententry",
              query: {
                taskId: self.taskId,
                projectId: self.projectId,
                executor: res.data.executorNickName
              }
            });
            // if (res.data.executorNickName.length) {
            //   this.$refs.exe.classList.add("active_");
            //   this.executor = res.data.executorNickName;
            // }
            // self.$refs.taskTheme.setAttribute("disabled", true);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    commandExcutor() {
      //指定执行人
      console.log(this.mode);

      // this.SET_USER_ID(this.userId);
      let self = this;
      if (!self.taskId) {
        self.$toast.show("任务未创建", 1000);
        return;
      }
      this.$dialog.confirm({
        message: "确定指定该执行人?",
        confirm() {
          Convent.cmdExcutor(self.taskId, {
            taskId: self.taskId,
            userId: self.getUserId,
            projectId: self.projectId
          })
            .then(res => {
              console.log(res);
              if (res.code == 1 && res.status == 200) {
                self
                  .refreshExcutor()
                  .then(res => {
                    //再次刷新列表
                    self.setExcutor();
                  })
                  .catch(err => {
                    //请求失败
                    self.$router.push({
                      path:
                        self.entry == 0
                          ? "/addTaskSetting"
                          : self.entry == 1
                            ? "updateTaskSetting"
                            : "convententry",
                      query: {
                        taskId: self.taskId,
                        projectId: self.projectId
                      }
                    });
                  });
              }
            })
            .catch(err => {
              //请求失败
              self.$router.push({
                path:
                  self.entry == 0
                    ? "/addTaskSetting"
                    : self.entry == 1 ? "updateTaskSetting" : "convententry",
                query: {
                  taskId: self.taskId,
                  projectId: self.projectId
                }
              });
            });
        }
      });
    },
    refreshExcutor() {
      let self = this;
      return new Promise((resolve, reject) => {
        Convent.getExcutorList(self.projectId) //项目id
          .then(res => {
            if (res.code == 1 && res.status == 200) {
              console.log(Object.keys(res.data), Object.values(res.data));
              this.taskExecutors = [...Object.values(res.data)];
              console.log(
                this.taskExecutors,
                "---------------刷新成员------------------------"
              );
              resolve();
            } else {
              reject();
            }
          })
          .catch(err => {
            reject();
          });
      });
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
          path:
            self.entry == 0
              ? "/addTaskSetting"
              : self.entry == 1 ? "updateTaskSetting" : "convententry",
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
    deleteExcutor() {
      //删除项目成员
      console.log(this.mode);
      let self = this;
      console.log(self.getUserId, self.projectId);
      let userId = self.getUserId;
      let projectId = self.projectId;
      if (this.mode == 0) {
        this.$dialog.confirm({
          message: "确定删除该成员?",
          confirm() {
            //已经选中成员
            Convent.deleteExcutor(projectId, {
              ["projectId"]: projectId,
              ["userId"]: userId
            })
              .then(res => {
                console.log(res);
                // debugger;
                if (res.code == 1 && res.status == 200) {
                  self.getExcutorList(self.projectId);
                  self.$dialog.message({
                    message: "已删除该成员!"
                  });
                }
              })
              .catch(err => {
                console.log(err);
                // debugger;
              });
          }
        });
      }
      if (this.mode == 1) {
        let taskId = this.deleteTaskId,
          self = this;
        this.$dialog.confirm({
          message: "确定关闭该任务?",
          confirm() {
            Convent.closeTask(taskId)
              .then(res => {
                console.log(res);
                if (res.code == 1 && res.status == 200) {
                  self.getExcutorList(self.projectId);
                  self.$dialog.message({
                    message: "已关闭该任务!"
                  });
                }
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
      DELETE_TASK_EXECUTOR: "DELETE_TASK_EXECUTOR",
      SET_TASKID: "SET_TASKID"
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
    init() {
      document
        .querySelector(".deleteBtn")
        .addEventListener("click", this.deleteExcutor);
      // this.isSubShow = new Array(this.taskExecutors.length).fill(false);
      console.log(this.taskExecutors);
    },
    getExcutors() {
      this.getters = setInterval(() => {
        this.getExcutors(this.projectId);
      }, 1000);
    }
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
    // this.getExcutors(this.projectId);
  }
};
</script>
