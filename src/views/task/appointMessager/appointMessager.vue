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
      overflow: auto;
      background: linear-gradient(to bottom, rgba(105, 198, 254, .6), rgba(105, 198, 254, .6));
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
          .select {
            position: absolute;
            left: 45*2px !important;
          }
        }
        ;
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
    color: #69A1F1
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
    ;
    .deleteExcutorDisable {
      background: linear-gradient(180deg, rgba(224, 224, 224, 1), rgba(183, 183, 183, 1));
    }
  }

  .active_zoom {
    animation: zoom .5s ease;
  }

  @keyframes zoom {
    0% {
      opacity: 1;
    }
    50% {
      opacity: .8;
    }
    100% {
      opacity: .5;
    }
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
          <li><img src="@/assets/img/02.png" />面对面发</li>
        </ul>
      </share>
    </header>
    <div class="editDeadTime" ref="lisItem">
      <scroll>
        <ul>
          <div v-for="(item,index) in taskExecutors" :key="index">
            <li>
              <div class="user">
                <div @touchstart='selected(index,item[0].isSelected)' class="select">
                  <img src="@/assets/img/sign-selected.png" v-show="item[0].isSelected" />
                </div>
                <div class="icon">
                  <img v-lazy="item[0].userIcon">
                </div>
                <div class="name">{{item[0].executor}}</div>
              </div>
              <div class="update">{{item[0].updated}}</div>
              <div class="comments">{{item[0].comments}}</div>
              <div class="progress">{{progress(item[0])}}</div>
              <div class="arrow" @touchstart='showSub(index)'>
                <img :src="imgUrl(index)" />
              </div>
            </li>
            <li class="sub-item" v-for="(item_,index_) in item" v-show="(currentIndex == index )">
              <!--下拉可见-->
              <div class="user">
                <div @touchstart='selected(index,item.isSelected)' class="select">
                  <img src="@/assets/img/sign-selected.png" v-show="item.isSelected" />
                </div>
                <div class="name">{{item_.executor}}</div>
              </div>
              <div class="update">{{item_.updated}}</div>
              <div class="comments">{{item_.comments}}</div>
              <div class="progress">{{progress(item_)}}</div>
              <div class="arrow">
              </div>
            </li>
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
    <invites :showInvite='showInvite'></invites>
  </div>
</template>
<script>
  import scroll from "@/common/base/scroll/scroll.vue";
  import invites from "./invite.vue";
  import share from "./share.vue";
  import {
    mapMutations,
    mapGetters
  } from "vuex";
  export default {
    data() {
      return {
        showShare: false,
        isExtend: false,
        showBtntype: false, //默认显示添加成员按钮
        flag: false, //第一次进入添加成员界面
        type: "updated",
        showInvite: false,
        scale: 0,
        navs: [{
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
        nowIndex: 0
      };
    },
    computed: {
      ...mapGetters(['taskExecutors']),
    },
    watch: {
      showBtntype(newVal, oldVal) {
        console.log(newVal, oldVal)
        if (!newVal) {
          this.$refs.deleteBtn.removeEventListener('touchstart', () => {});
        } else {
          this.$refs.deleteBtn.addEventListener('touchstart', this.deleteExcutor)
        }
      }
    },
    methods: {
      progress(item) {
        return '200%'
      },
      imgUrl(index) {
        if (this.isExtend && this.currentIndex === index) {
          return require('@/assets/img/05.png')
        } else {
          return require('@/assets/img/04.png')
        }
      },
      showSub(index) {
        this.currentIndex = index;
        console.log(index);
        this.isExtend = !this.isExtend;
      },
      inviteOthers() {
        //分享
        this.showInvite = !this.showInvite;
        this.showShare = !this.showShare;
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
          this.showBtntype = false
          return;
        } else {
          this.showShare = !this.showShare;
        }
      },
      deleteExcutor() {
        if (this.showBtntype) {
          //已经选中成员
          console.log(this.nowIndex);
          let self = this;
          this.$dialog.info({
            btnName: 'delete',
            placeholder: "确定删除成员",
            operate() {
              self.DELETE_TASK_EXECUTOR(self.nowIndex); //删除选中成员      
              self.sort(self.type); //重新排序  
              self.showBtntype = false;
            }
          });
        } else {
          console.log('跳转至删除人员界面')
          let self = this;
          this.$dialog.info({
            btnName: "delete",
            placeholder: "选择要删除的成员"
          });
        }
      },
      ...mapMutations({
        SET_TASK_EXECUTOR: "SET_TASK_EXECUTOR",
        SORT_TASK_EXECUTOR: "SORT_TASK_EXECUTOR",
        ADD_TASK_EXECUTOR: "ADD_TASK_EXECUTOR",
        DELETE_TASK_EXECUTOR: "DELETE_TASK_EXECUTOR"
      }),
      selected(index, isSelected) {
        return;
        this.SET_TASK_EXECUTOR({
          index,
          isSelected
        });
        this.nowIndex = index;
        //决定显示 指派人员还是添加人员
        let status = this.taskExecutor.filter((item, index) => {
          return item.isSelected;
        });
        this.showBtntype = status.length ? true : false;
        console.log(this.showBtntype)
      },
      changeIndex(i, type) {
        this.type = type;
        this.currentIndex = i; //对数组进行排序
        this.sort(type);
        this.clearClass(type);
      },
      clearClass(type) {
        let updates = document.querySelectorAll('.update');
        let comments = document.querySelectorAll('.comments');
        let progess = document.querySelectorAll('.progress');
        this.$nextTick(() => {
          this.removeClass(updates, 'active-font');
          this.removeClass(comments, 'active-font');
          this.removeClass(progess, 'active-font');
          this.activeClass(type);
        })
      },
      removeClass(doms, className) {
        console.log('doms', doms)
        doms.forEach((item, index) => {
          item.classList.remove(className)
        })
      },
      activeClass(type) {
        let doms = document.querySelectorAll(`.${type}`);
        doms.forEach((item, index) => {
          item.classList.add('active-font')
        })
      },
      sort(type) {
        this.SORT_TASK_EXECUTOR(type);
        console.log(type, this.taskExecutor);
      },
      init() {
        document.querySelector('.deleteBtn').addEventListener('touchstart', this.deleteExcutor)
        this.showInvite = true;
        console.log(this.taskExecutors);
      }
    },
    components: {
      scroll,
      invites,
      share
    },
    created() {},
    mounted() {
      this.init();
    }
  };

</script>
