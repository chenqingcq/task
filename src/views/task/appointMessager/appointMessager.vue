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
        li {
          float: left;
          color: #fff;
          height: 20*2px;
          min-width: 24*2px;
          font-size: 12*2px;
        }
        li:nth-child(1) {
          margin-left: 15*2px;
        }
        li:nth-child(2) {
          margin-left: 110*2px;
        }
        li:nth-child(3) {
          margin-left: 50*2px;
        }
        li:nth-child(4) {
          margin-left: 50*2px;
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

  .select {
    width: 16*2px;
    height: 16*2px;
    border-radius: 50%;
    border: 1*2px solid #DBDBDB;
    margin-left: 15*2px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: inline-block;
      width: 15*2px;
      height: 15*2px;
    }
  }

  .icon {
    width: 30*2px;
    height: 30*2px;
    border-radius: 50%;
    border: 2px solid #14C9FE;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #D8D8D8;
    margin-left: 12*2px;
    img {
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .name {
    margin-left: 10*2px;
    width: 32*2px;
    font-family: PingFangSC-Regular;
    font-size: 16px*2;
    color: #333333;
  }

  .update {
    width: 32*2px;
    margin-left: 60*2px;
  }

  .comments {
    width: 32*2px;
    margin-left: 40*2px;
  }

  .progress {
    width: 32*2px;
    margin-left: 40*2px;
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
        color: #9D9D9D;
        font-size: 10*2px;
        text-align: center;
        img {
          display: block;
          width: 18*2px;
          margin: 0 auto;
          margin-top: 4*2px;
        }
        ;
        p {
          margin-top: 8*2px;
        }
      }

    }
    ;
    .addExcutor {
      flex: 1;
      font-family: PingFangSC-Regular;
      font-size: 16px*2;
      color: #FFFFFF;
      line-height: 45*2px;
      text-align: center;
      background-image: linear-gradient(-180deg, #86C0F8 0%, #4E8CEE 100%);
    }
    .deleteExcutor {
      flex: 1;
      font-family: PingFangSC-Regular;
      font-size: 16px*2;
      color: #FFFFFF;
      line-height: 45*2px;
      text-align: center;
      background-image: linear-gradient(-180deg, #F1BAAF 0%, #EA6E5D 100%);
    }
  }

</style>
<template>

  <div class="appointer-container">
    <header>
      <img class="bg" src='@/assets/img/appointer.png' />
      <ul>
        <li>成员列表</li>
        <li @touchstart='changeIndex(index,item.type)' :class="{active:index==currentIndex}" v-for="(item,index) in navs" :key="index">{{item.name}}</li>
      </ul>
      <img @touchstart='inviteOthers' class="invite" src="@/assets/img/icon-menu.png">
    </header>
    <div class="editDeadTime">
      <scroll>
        <ul>
          <li v-for="(item,index) in taskExecutor" :key="index">
            <div @touchstart='selected(index,item.isSelected)' class="select">
              <img src="@/assets/img/sign-selected.png" v-show="item.isSelected" />
            </div>
            <div class="icon">
              <img :src="item.userIcon">
            </div>
            <div class="name">{{item.nickname}}</div>
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
      <div v-if="taskExecutor.length>0" class="addExcutor" @touchstart='commandExcutor'>指派人员</div>
      <div v-if="!taskExecutor.length" class="addExcutor" @touchstart='addExcutor'>添加人员</div>
      <div class="deleteExcutor" @touchstart='deleteExcutor'>删除人员</div>
    </div>
    <invites :showInvite='showInvite'></invites>
  </div>
</template>
<script>
  import scroll from '@/common/base/scroll/scroll.vue';
  import invites from './invite.vue';
  import {
    mapMutations,
    mapGetters
  } from 'vuex';
  export default {
    data() {
      return {
        showInvite: false,
        navs: [{
          name: '更新',
          type: 'updated'
        }, {
          name: '评论',
          type: 'comments'
        }, {
          name: '进度',
          type: 'progress'
        }],
        currentIndex: 0
      }
    },
    computed: {
      ...mapGetters(['taskExecutor']),
    },
    methods: {
      inviteOthers() { //分享
        console.log(111)
        this.showInvite = !this.showInvite
      },
      commandExcutor() {
        this.$router.push('addTaskSetting')
      },
      addExcutor() {
        this.$dialog.info({
          btnName: 'add',
          placeholder: '确定添加成员'
        })
      },
      deleteExcutor() {
        this.$dialog.info({
          btnName: 'delete',
          placeholder: '确定删除成员'
        })
      },
      progress(val) {
        return val * 100 + "%"
      },
      ...mapMutations({
        "SET_TASK_EXECUTOR": "SET_TASK_EXECUTOR",
        'SORT_TASK_EXECUTOR': 'SORT_TASK_EXECUTOR'
      }),
      selected(index, isSelected) {
        this.SET_TASK_EXECUTOR({
          index,
          isSelected
        });
      },
      changeIndex(i, type) {
        this.currentIndex = i; //对数组进行排序
        this.sort(type)
      },
      sort(type) {
        this.SORT_TASK_EXECUTOR(type);
        console.log(type, this.taskExecutor)
      }
    },
    components: {
      scroll,
      invites
    },
    created() {
      this.SORT_TASK_EXECUTOR('updated')
    }
  }

</script>
