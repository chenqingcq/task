<style lang="less" scoped>
.appointer-container {
  width: 100%;
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
    ul {
      position: absolute;
      bottom: 15*2px;
      z-index: 1;
      height: 14*2px;
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      li {
        color: #fff;
        height: 20*2px;
        min-width: 24*2px;
        font-size: 12*2px;
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
    background: #fff;
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
      border-bottom: 2px solid rgba(151, 151, 151, 0.21);
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
          width: 32*2px;
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

.progress {
  width: 32*2px;
  text-align: center;
}

.active {
  border-bottom: 2*2px solid #fff;
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
  .deleteExcutor {
    flex: 1;
    font-family: PingFangSC-Regular;
    font-size: 16px*2;
    color: #ffffff;
    line-height: 45*2px;
    text-align: center;
    background-image: linear-gradient(-180deg, #f1baaf 0%, #ea6e5d 100%);
  }
}
</style>
<template>

  <div class="appointer-container">
    <header>
      <img class="bg" src='@/assets/img/appointer.png' />
      <ul>
        <li class="lists">
          <span>成员列表</span>
        </li>
        <li  @touchstart='changeIndex(index,item.type)'  v-for="(item,index) in navs" :key="index">
          <span :class="{active:index==currentIndex}">{{item.name}}</span>
        </li>
      </ul>
      <img @touchstart='inviteOthers' class="invite" src="@/assets/img/icon-menu.png">
    </header>
    <div class="editDeadTime">
      <scroll>
        <ul>
          <li v-for="(item,index) in taskExecutor" :key="index">
            <div class="user">
                <div @touchstart='selected(index,item.isSelected)' class="select">
                  <img src="@/assets/img/sign-selected.png" v-show="item.isSelected" />
                </div>
                <div class="icon">
                  <img :src="item.userIcon">
                </div>
                 <div class="name">{{item.nickname}}</div>
            </div>
            <div class="update">{{item.updated}}</div>
            <div class="comments">{{item.comments}}</div>
            <div class="progress">{{progress(item.progress)}}</div>
          </li>
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
      <div class="deleteExcutor" @touchstart='deleteExcutor'>删除人员</div>
    </div>
    <invites :showInvite='showInvite'></invites>
  </div>
</template>
<script>
import scroll from "@/common/base/scroll/scroll.vue";
import invites from "./invite.vue";
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      showBtntype: false, //默认显示添加成员按钮
      flag: false, //第一次进入添加成员界面
      showInvite: false,
      navs: [
        {
          name: "更新",
          type: "updated"
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
      currentIndex: 0
    };
  },
  computed: {
    ...mapGetters(["taskExecutor"])
  },
  methods: {
    inviteOthers() {
      //分享
      this.showInvite = !this.showInvite;
    },
    commandExcutor() {
      this.$router.push("addTaskSetting");
    },
    addExcutor() {
      let self = this;
      if (this.showBtntype) {
        //指派人员
        this.SET_TASK_EXECUTOR({
          index,
          isSelected
        });
        this.$router.push("addTaskSetting");
      } else {
        this.$dialog.info({
          btnName: "add",
          placeholder: "确定添加成员",
          operate(member) {
            //如果输入的人在好友列表那么直接添加到成员列表里面去，否则需要邀约加入
            //这里模拟一下后台放回的好友列表
            let members = [
              { name: "张三", id: "123456" },
              { name: "李四", id: "654321" },
              { name: "王五", id: "543210" }
            ];
            let selected = members.filter((item, index) => {
              return item.name == member;
            });
            if (selected[0]) {
              self.ADD_TASK_EXECUTOR(selected[0].name); //这里用户id怎么处理
              console.log(self.taskExecutor);
            }
          }
        });
      }
    },
    deleteExcutor() {
      if (this.showBtntype) {
        //已经选中成员
        console.log(this.currentIndex);
        this.DELETE_TASK_EXECUTOR(this.currentIndex); //删除选中成员
      } else {
        let self = this;
        this.$dialog.info({
          btnName: "delete",
          placeholder: "确定删除成员",
          operate(member) {
            //先确定该成员是否在成员列表 否则提示该成员不存在
            if (member) {
              let selected = self.taskExecutor.findIndex((item, index) => {
                return item.nickname == member;
              });
              if (selected > -1) {
                //该成员存在
                self.DELETE_TASK_EXECUTOR(selected); //删除输入的成员
              } else {
                self.$dialog.message({
                  message: "该成员不存在！"
                });
              }
            } else {
              self.$dialog.message({
                message: "输入要删除的成员！"
              });
            }
          }
        });
      }
    },
    progress(val) {
      return val * 100 + "%";
    },
    ...mapMutations({
      SET_TASK_EXECUTOR: "SET_TASK_EXECUTOR",
      SORT_TASK_EXECUTOR: "SORT_TASK_EXECUTOR",
      ADD_TASK_EXECUTOR: "ADD_TASK_EXECUTOR",
      DELETE_TASK_EXECUTOR: "DELETE_TASK_EXECUTOR"
    }),
    selected(index, isSelected) {
      this.SET_TASK_EXECUTOR({
        index,
        isSelected
      });
      this.currentIndex = index;
      //决定显示 指派人员还是添加人员
      let status = this.taskExecutor.filter((item, index) => {
        return item.isSelected;
      });
      this.showBtntype = status.length ? true : false;
    },
    changeIndex(i, type) {
      this.currentIndex = i; //对数组进行排序
      this.sort(type);
    },
    sort(type) {
      this.SORT_TASK_EXECUTOR(type);
      console.log(type, this.taskExecutor);
    },
    init() {
      if (!this.taskExecutor.length) {
        this.showInvite = true;
      } else {
        this.showInvite = false;
      }
      this.showInvite = true;
    }
  },
  components: {
    scroll,
    invites
  },
  created() {
    this.SORT_TASK_EXECUTOR("updated");
    this.init(); //第一次进入该页面 弹出邀请页面
  }
};
</script>
