<style lang="less" scoped>
  .task-container {
    width: 100%;
    .task-panel {
      width: 100%;
      li.task-item {
        width: 100%;
        height: 50*2px;
        display: flex;
        flex-wrap: nowrap;
        background: #fff;
        border-bottom: 2px solid rgba(151, 151, 151, 0.21);
        justify-content: space-between;
        .task-desc {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          height: 100%;
          margin-left: 12*2px;
          font-size: 16*2px;
          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              padding: 4*2px;
              display: inline-block;
              width: 26*2px;
              /*height: 26*2px;*/
            }
          }
          div.task-setting {
            line-height: 50*2px;
            font-size: 16px*2;
            color: #333;
            margin-left: 11*2px;
            img {
              display: inline-block;
              height: 13*2px;
            }
          }
        }
      }
      .userInput {
        margin-right: 15*2px;
        height: 100%;
        display: block;
        height: 100%;
        font-size: 14*2px;
        color: #666666;
        text-align: right;
        width: 112px*2;

      }
      .switch-contaiener {
        margin-right: 15*2px;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
    .permission-setting {
      /*margin-top: 32*2px;*/
    }
    .permit-setting {
      width: 100%;
      height: 30*2px;
      font-size: 12px*2;
      color: #666;
      line-height: 32*2px;
      padding-left: 11*2px;
    }
  }

  .time-logo-container {
    position: relative;
    .time-logo {
      position: absolute;
      right: 11*2px;
      top: 0;
      margin-top: 19*2px;
      display: inline-block;
      height: 13*2px;
    }
  }

  .selectEndTime,
  .selectStartTime {
    margin-right: 52px !important;
    display: flex !important;
    align-items: center !important;
  }

  .editDeadTime {
    width: 100%;
    margin-top: 8*2px;
    background: #fff;
    li {
      display: flex;
      align-items: center;
      height: 50*2px;
      padding: 0 14*2px;
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

  li#task-setting-des {
    height: 60*2px;
    .task-setting-des {
      height: 100%;
      margin-left: 11*2px;
      padding-top: 14*2px;
      .task-setting0 {
        margin-top: 14*2px;
        line-height: 0;
      }
      .task-setting1 {
        margin-bottom: 14*2px;
        font-size: 10px*2;
        color: #666666;
      }
    }
  }

  li#allowCreateTask {
    height: 60*2px;
  }

  .confirm {
    height: 44*2px;
    margin: 16px;
    background: #fff;
    background-image: linear-gradient(-180deg, #86C0F8 0%, #4E8CEE 100%);
    box-shadow: 0 2*2px 4px 0 rgba(0, 0, 0, 0.38);
    border-radius: 4px;
    font-family: PingFangSC-Regular;
    font-size: 16*2px;
    color: #FFFFFF;
    text-align: center;
    line-height: 44*2px;
  }

  .select {
    width: 16*2px;
    height: 16*2px;
    border-radius: 50%;
    border: 1*2px solid #DBDBDB;
    margin-left: 37*2px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: inline-block;
      width: 15*2px;
      height: 15*2px;
    }
  }



  .name {
    margin-left: 4*2px;
    font-family: PingFangSC-Regular;
    font-size: 16px*2;
    color: #333333;
  }

  #appointer {
    position: relative;
    height: 100%;
    span.name {
      position: absolute;
      height: 100%;
      right: 12px;
      display: inline-block;
      line-height: 50*2px;
      vertical-align: center;
      font-family: PingFangSC-Regular;
      font-size: 14*2px;
      color: #666666;
    }
    span.arrow {
      position: absolute;
      display: inline-block;
      height: 100%;

      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        height: 26px;
      }
    }

  }

</style>
<template>
  <div class="task-container">
    <ul class="task-panel">
      <li class="task-item">
        <label class="task-desc" for="item-1">
          <div class="icon">
            <img src="@/assets/img/icon4.png" />
          </div>
          <div class="task-setting">任务主题</div>
        </label>
        <input class="userInput" type="text" id="item-1" v-model=" taskTheme" maxlength="20" placeholder="添加任务主题" />
      </li>
      <li class="task-item">
        <label class="task-desc" for="item0">
          <div class="icon">
            <img src="@/assets/img/icon-project.png" />
          </div>
          <div class="task-setting"> 任务名称</div>
        </label>
        <input class="userInput" type="text" id="item0" v-model="taskname" maxlength="20" placeholder="添加任务名称" />
      </li>
      <li class="task-item">
        <label class="task-desc" for="item1">
          <div class="icon">
            <img src="@/assets/img/icon-describe.png" />
          </div>
          <div class="task-setting"> 任务描述</div>
        </label>
        <input class="userInput" type="text" id="item1" v-model="taskdesc" maxlength="20" placeholder="添加任务描述" />
      </li>
      <li class="task-item time-logo-container">
        <label class="task-desc" for="item2">
          <div class="icon">
            <img src="@/assets/img/icon-start time.png" />
          </div>
          <div class="task-setting">开始时间<img class="time-logo" src="@/assets/img/icon-right-slide03.png"/></div>
        </label>

        <v-datetime class="userInput selectStartTime " format="YYYY.MM.DD" @on-change="startDate_change" placeholder="开始时间">
          <!-- 开始时间 -->
        </v-datetime>

      </li>
      <li class="task-item time-logo-container">
        <label class="task-desc" for="item3">
          <div class="icon">
            <img src="@/assets/img/icon-end time.png" />
          </div>
          <div class="task-setting">结束时间 <img class="time-logo" src="@/assets/img/icon-right-slide03.png"/></div>
        </label>
        <v-datetime class="userInput selectEndTime " v-model="endTime" format="YYYY.MM.DD" @on-change="endDate_change" placeholder="結束时间">
          <!-- 开始时间 -->
        </v-datetime>
        <!-- <input class="userInput selectEndTime" @focus='selectEndTime' type="text" id="item3" v-model="item3" maxlength="20" placeholder="结束时间"
        /> -->
      </li>
      <li class="task-item">
        <label class="task-desc" for="item4">
          <div class="icon">
            <img src="@/assets/img/icon-standard.png" />
          </div>
          <div class="task-setting">验收标准</div>
        </label>
        <input class="userInput" type="text" id="item4" v-model="standard" maxlength="20" placeholder="添加验收标准" />
      </li>
      <li class="task-item">
        <label class="task-desc" for="item5">
          <div class="icon">
            <img src="@/assets/img/icon-nominee.png" />
          </div>
          <div class="task-setting">指定执行人</div>
        </label>
        <div class="userInput" id="appointer" @touchstart='appointerManager'>
          <span class="name">{{executor}}</span>
          <span class="arrow">
            <img src="@/assets/img/icon-right-slide03.png" />            
          </span>
        </div>
      </li>
      <li class="task-item " id="allowCreateTask">
        <label class="task-desc" for="item5">
          <div class="icon">
            <img src="@/assets/img/icon-task02.png" />
          </div>
          <div class="task-setting ">允许执行人创建任务</div>
        </label>
        <div class="switch-contaiener">
          <v-switch :status="allowCreate" @getStatus="allowCreateChange"></v-switch>
        </div>
      </li>
    </ul>
    <div class="permit-setting"><span>权限设置</span></div>
    <ul class="task-panel permission-setting">
      <li class="task-item">
        <label class="task-desc">
          <div class="icon">
            <img src="@/assets/img/icon-public.png" />
          </div>
          <div class="task-setting">公开</div>
        </label>
        <div class="switch-contaiener">
          <v-switch :status="isPublic" @getStatus="isPublicChange"></v-switch>
        </div>
      </li>
      <li class="task-item " id="task-setting-des">
        <label class="task-desc">
          <div class="icon">
            <img src="@/assets/img/icon-not public.png" />
          </div>
          <div class="task-setting-des"><span class="task-setting0">项目成员可见</span><br><span class="task-setting1">该项目成员可见</span></div>
        </label>
        <div class="switch-contaiener">
          <v-switch :status="allowedLook" @getStatus="allowedLookChange"></v-switch>
        </div>
      </li>
    </ul>
    <!--项目发起人可见项目节点-->
    <ul class="editDeadTime">
      <li v-if="role == 'taskCreater'">
        <img class="editpng" src="@/assets/img/icon-edit.png" />
        <div class="editProgress">编辑项目节点</div>
        <img class="editmore" src="@/assets/img/icon-right-slide03.png">
      </li>
      <li v-if="role == 'taskManager'">
        <img class="editpng" src="@/assets/img/icon-invitation.png" />
        <div class="editProgress">邀约他人可见</div>
        <div class="editmore" @touchstart='inviteOthers'>
          <img class="editmore" src="@/assets/img/icon-right-slide03.png" ref='arrow'>
        </div>
      </li>
      <li v-show="showMembers" v-for="(item,index) in members" :key="index">
        <div @touchstart='selected(index,item.isAllowed)' class="select">
          <img src="@/assets/img/sign-selected.png" v-show="item.isAllowed" />
        </div>
        <div class="name">{{item.name}}</div>
      </li>
    </ul>
    <div @touchstart='confirm' class="confirm">确定</div>
  </div>
</template>
<script>
  import {
    mapMutations,
    mapGetters
  } from 'vuex';

  export default {
    data() {
      return {
        text: '...',
        taskTheme: '',
        taskname: '',
        taskdesc: '',
        startTime: '',
        endTime: '',
        standard: '',
        allowCreate: true,
        isPublic: false,
        allowedLook: true,
        role: '',
        showMembers: false,
        members: []
      }
    },
    computed: {
      ...mapGetters(['taskExecutor', 'getTaskSetting']),
      executor() {
        return this.taskExecutor.nickname
      }
    },
    watch: {
      taskExecutor(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    },
    methods: {
      ...mapMutations({
        'SET_TASK': "SET_TASK"
      }),
      confirm() {
        console.log(this.taskExecutor);
        // 点击确认之前先做验证
        this.SET_TASK({
          taskTheme: this.taskTheme,
          taskName: this.taskname,
          taskDesc: this.taskdesc,
          startTime: this.startTime,
          endTime: this.endTime,
          standard: this.standard,
          taskExecutor: this.executor,
          allowedCreate:this.allowCreate,
          ispublic:this.isPublic,
          membersCanSee:this.showMembers,
          othersCanSee:this.members
        });
        console.log(this.getTaskSetting)
      },
      appointerManager() {
        this.$router.push('appointMessager')
      },
      selected(index, isAllowed) {
        this.members[index].isAllowed = !isAllowed;
        console.log(this.members)
      },
      inviteOthers() { //邀约他人可见
        this.showMembers = !this.showMembers;
        this.showMembers ? this.$refs.arrow.style.transform = 'rotate(90deg)' : this.$refs.arrow.style.transform =
          'rotate(0)'
      },
      allowCreateChange(status) {
        this.allowCreate = status;
        console.log(status, this.allowCreate)
      },
      isPublicChange(status) {
        this.isPublic = status;
        console.log(status, this.isPublic)
      },
      allowedLookChange(status) {
        this.allowedLook = status;
        console.log(status, this.allowedLook)
      },
      selectStartTime() {
        console.log(1)
      },
      selectEndTime() {
        console.log(2)
      },
      startDate_change(val) {
        this.startTime = val;
      },
      endDate_change(val) {
        this.endTime = val;
      }
    },
    created() {
      this.role = 'taskManager'; //如果是项目发起人可见
      this.members = [{
          isAllowed: false,
          name: '李四'
        },
        {
          isAllowed: false,
          name: '张三'
        }
      ]
    }
  }

</script>
