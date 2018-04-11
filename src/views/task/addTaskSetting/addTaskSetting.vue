<style lang="less" scoped>
  .task-container {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
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
    ul.permission-setting {
      /*margin-top: 32*2px;*/
      height: 56*2px !important;
      li {
        padding: 0 12*2px;
        height: 100% !important;
        div {
          flex: 1;
          p {
            text-align: center;
            &:first-of-type {
              margin-top: 4*2px;
              height: 22*2px;
              font-size: 16*2px;
              font-family: PingFangSC-Regular;
              color: rgba(51, 51, 51, 1);
              line-height: 22*2px;
            }
          }
          span {
            &:first-of-type {
              padding: 2*2px;
              display: inline-block;
              margin: 0 auto;
              width: auto;
              font-size: 12*2px;
              font-family: PingFangSC-Regular;
              color: rgba(102, 102, 102, 1);
              line-height: 17*2px;
            }
          }
        }
      }
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
    color: rgba(102, 102, 102, 0.5) !important;
  }

  .editDeadTime {
    width: 100%;
    background: #fff;
    margin-bottom: 6*2px;
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
      img.invitepng {
        margin-right: 8*2px;
      }
      div.editProgress {
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 2*2px;
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
    .task-setting {
      height: 100%;
      /*display: flex;*/
      flex-wrap: wrap;
      span.allow—create {
        display: block;
        font-size: 16px*2;
        height: 0;
      }
      span.allow—create-new {
        display: block;
        height: 0;
        font-size: 10px*2;
        color: #666;
        margin-top: -30*2px;
      }
    }
  }

  .confirm {
    position: absolute;
    bottom: 8*2px;
    right: 8*2px;
    left: 8*2px;
    height: 44*2px;
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
    width: 224px;
    display: flex;
    align-items: center;
    span.name {
      /*position: absolute;*/
      height: 100%;
      flex: 1;
      display: inline-block;
      line-height: 50*2px;
      vertical-align: center;
      font-family: PingFangSC-Regular;
      font-size: 14*2px;
      color: #666666;
      text-align: right;
      margin-right: 13*2px;
    }
    span.arrow {
      margin-top: 50%;
      transform: translateY(-50px);
      display: inline-block;
      margin-right: 10*2px;
      height: 100%;
      width: 20px;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        height: 26px;
      }
    }

  }

  input:disabled {
    background: #fff;
  }

  .active_ {
    color: rgba(107, 167, 243, 1) !important;
  }

  .active {
    color: rgba(107, 167, 243, 1) !important;
    border-bottom: 4*2px solid rgba(107, 167, 243, 1);
  }

</style>
<template>
  <div>
    <div class="task-container">
      <ul class="task-panel">
        <li class="task-item">
          <label class="task-desc" for="taskTheme">
            <div class="icon">
              <img src="@/assets/img/icon-book.png" />
            </div>
            <div :class="[_tasksetting,{active_:isTaskTheme}]">项目主题</div>
          </label>
          <input class="userInput" ref="taskTheme" type="text" id="taskTheme" v-model.trim="taskTheme" maxlength="20" placeholder="添加项目主题"
          />
        </li>
        <ul class="editDeadTime">
          <li v-if="role == 'creator'" @touchstart='editSection' >
            <img class="editpng" src="@/assets/img/icon-edit.png" />
            <div class="editProgress">编辑项目节点</div>
            <div class="editmore" >
              <img class="editmore" src="@/assets/img/icon-right-slide03.png">
            </div>
          </li>
        </ul>
        <li class="task-item">
          <label class="task-desc" for="item0">
            <div class="icon">
              <img src="@/assets/img/icon-project.png" />
            </div>
            <div :class="[_tasksetting,{active_:isTaskName}]"> 任务名称</div>
          </label>
          <input class="userInput" type="text" id="item0" v-model.trim="taskname" maxlength="20" placeholder="添加任务名称" />
        </li>
        <li class="task-item">
          <label class="task-desc" for="item1">
            <div class="icon">
              <img src="@/assets/img/icon-describe.png" />
            </div>
            <div :class="[_tasksetting,{active_:isTaskDesc}]"> 任务描述</div>
          </label>
          <input class="userInput" type="text" id="item1" v-model.trim="taskdesc" maxlength="20" placeholder="添加任务描述" />
        </li>
        <li class="task-item time-logo-container">
          <label class="task-desc" for="item2">
            <div class="icon">
              <img src="@/assets/img/icon-start time.png" />
            </div>
            <div ref="startDate" class="task-setting">开始时间<img class="time-logo" src="@/assets/img/icon-right-slide03.png"/></div>
          </label>

          <v-datetime ref="startTime" class="userInput selectStartTime " format="YYYY.MM.DD" @on-change="startDate_change" placeholder="开始时间">
            <!-- 开始时间 -->
          </v-datetime>

        </li>
        <li class="task-item time-logo-container">
          <label class="task-desc" for="item3">
            <div class="icon">
              <img src="@/assets/img/icon-end time.png" />
            </div>
            <div  ref="endDate" class="task-setting">结束时间 <img class="time-logo" src="@/assets/img/icon-right-slide03.png"/></div>
          </label>
          <v-datetime  ref="endTime" class="userInput selectEndTime " v-model="endTime" format="YYYY.MM.DD" @on-change="endDate_change" placeholder="结束时间">
          </v-datetime>
        </li>
        <li class="task-item">
          <label class="task-desc" for="item4">
            <div class="icon">
              <img src="@/assets/img/icon-standard.png" />
            </div>
            <div :class="[_tasksetting,{active_:isTaskStandard}]">验收标准</div>
          </label>
          <input class="userInput" type="text" id="item4" v-model.trim="standard" maxlength="20" placeholder="添加验收标准" />
        </li>
        <li class="task-item">
          <label class="task-desc" for="item5">
            <div class="icon">
              <img src="@/assets/img/icon-nominee.png" />
            </div>
            <div class="task-setting" ref="excutor">指定执行人</div>
          </label>
          <div id="appointer" @touchstart='appointerManager'>
            <span class="name">{{executor}}</span>
          <span class="arrow">
            <img src="@/assets/img/icon-right-slide03.png" />
          </span>
          </div>
        </li>
      </ul>

      <div class="permit-setting"><span>权限设置</span></div>
      <ul class="task-panel permission-setting">
        <li class="task-item">
          <div v-for="(item,index) in setting" :key="index" @touchstart='changeIndex(index)'>
            <p :class="{active_:currentIndex == index}">{{item.title}} </p>
            <p>
              <span :class='{active :currentIndex == index}'>{{item.detail}}</span>
            </p>
          </div>
        </li>
      </ul>
      <div @touchstart='confirm' class="confirm">确定</div>
    </div>
  </div>

</template>
<script type="text/babel">
  import {
    mapMutations,
    mapGetters
  } from 'vuex';
  let reflect_to_task = {
    taskTheme: '项目主题',
    taskname: '任务名称',
    taskdesc: '任务描述',
    startTime: '开始时间',
    endTime: '结束时间',
    standard: ' 验收标准',
    executor: '执行人',
    projectDeadLine: '项目节点'
  };
  export default {
    data() {
      return {
        setting: [{
            title: '公开',
            detail: '所有成员可见'
          },
          {
            title: '项目成员可见',
            detail: '该项目的成员可见'
          }
        ],
        currentIndex: 0,
        taskTheme: '',
        taskname: '',
        taskdesc: '',
        startTime: '',
        endTime: '',
        standard: '',
        executor: '',
        allowCreate: false,
        isPublic: true,
        allowedLook: false,
        showMembers: false,
        members: [],
        check_pass: false
      }
    },
    computed: {
      ...mapGetters(['taskExecutor', 'getTaskSetting', 'getTaskTheme']),
      isTaskTheme() {
        return this.taskTheme.length ? true : false;
      },
      isTaskName() {
        return this.taskname.length ? true : false;
      },
      isTaskDesc() {
        return this.taskdesc.length ? true : false;
      },
      isTaskStandard() {
        return this.standard.length ? true : false;
      },
      _tasksetting() {
        return 'task-setting'
      },
      role(){
        return this.$store.state.permission.project.role

      },
      themeName (){
        return this.$store.state.permission.project.themeName
      }
    },
    watch: {
      taskExecutor(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    },
    beforeRouteEnter: (to, from, next) => {
      if (from.path == "/appointMessager" && to.path == '/addTaskSetting') {;
        next((vm) => {
          console.log(vm.taskExecutor) //过滤选中的执行人
          vm.$refs.excutor.classList.add('active_')
          vm.getExcutors(vm.taskExecutor)
        })
      } else {
        next()
      }
    },
    methods: {
      changeIndex(index) {
        this.currentIndex = index;
        if (this.currentIndex == 0) {
          this.isPublic = true;
          this.allowedLook = false;
        }
        if (this.currentIndex == 1) {
          this.isPublic = false;
          this.allowedLook = true;
        }
      },
      getExcutors(members) {
        let selected = members.filter((item, i) => {
          return item.isSelected == true
        });
        this.executor = selected[0] && selected[0].nickname
      },
      ...mapMutations({
        'SET_TASK': "SET_TASK"
      }),
      editProgress() {
        this.$router.push({
          path: 'taskHistoryOrUpdate'
        }) //编辑项目节点
      },
      editSection(){
        this.$router.push({
          path: '/section?mode=edit'
        }) //编辑项目节点
      },
      confirm() {
        this.validate()
        if (this.check_pass) {
          this.SET_TASK({ //需要后台给个id
            id: 1, //先模拟id
            taskTheme: this.taskTheme,
            taskName: this.taskname,
            taskDesc: this.taskdesc,
            startTime: this.startTime,
            endTime: this.endTime,
            standard: this.standard,
            taskExecutor: this.executor,
            allowedCreate: this.allowCreate,
            ispublic: this.isPublic,
            membersCanSee: this.showMembers,
            othersCanSee: this.members
          });
          this.$router.push('conventEntry') //项目创建完毕
        }
      },
      validate() {
        let k;
        for (k in reflect_to_task) {
          if (this.$data.hasOwnProperty(k) && (this.$data[k].length === 0)) {
            console.log(k)
            this.$dialog.message({
              message: `请添加${reflect_to_task[k]}`
            });
            this.check_pass = false;
            return
          } else {
            this.check_pass = true;
          };
          // if (this.role === 'creator' && k === 'projectDeadLine') {//项目创建人可见
          //   if (!this.getProjectDeadLine) {
          //     this.$dialog.message({
          //       message: `请添加${reflect_to_task[k]}`
          //     });
          //     this.check_pass = false;
          //     return;
          //   } else {
          //     this.check_pass = true;
          //   }
          // };
        }
      },
      appointerManager() {
        this.$router.push('appointMessager')
      },
      selected(index, isAllowed) {
        this.members[index].isAllowed = !isAllowed;
      },
      inviteOthers() { //邀约他人可见
        this.showMembers = !this.showMembers;
        this.showMembers ? this.$refs.arrow.style.transform = 'rotate(90deg)' : this.$refs.arrow.style.transform =
          'rotate(0)'
      },
      allowCreateChange(status) {
        this.allowCreate = status;
      },
      isPublicChange(status) {
        this.isPublic = status;
      },
      allowedLookChange(status) {
        this.allowedLook = status;
      },
      startDate_change(val) {
        this.$refs.startDate.classList.add('active_');
        this.startTime = val;
      },
      endDate_change(val) {
        this.$refs.endDate.classList.add('active_')
        this.endTime = val;
      },
      setTaskTheme() {
        this.$refs.taskTheme.setAttribute('disabled', true);
        //this.taskTheme = this.getTaskTheme;

      },
      init() {
        //this.role != 'creator' ? this.setTaskTheme() : '';
        this.taskTheme = this.themeName
      }
    },
    created() {
      // this.role = 'taskManager'; //邀约他人可见
      //this.role = 'creator' //项目发起人编辑节点
      console.log(this.taskExecutor)
    },
    mounted() {
      this.$nextTick(() => {
        this.init()
      })
    }
  }

</script>
