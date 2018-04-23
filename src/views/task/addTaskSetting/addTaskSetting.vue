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
      padding: 20px 0;
      display: block;
      height: 100%;
      font-size: 14*2px;
      color: #666666;
      text-align: right;
      width: 112px*2;
      overflow-x: scroll;
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
  justify-content: flex-end;
  align-items: center;
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
  background-image: linear-gradient(-180deg, #86c0f8 0%, #4e8cee 100%);
  box-shadow: 0 2*2px 4px 0 rgba(0, 0, 0, 0.38);
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 16*2px;
  color: #ffffff;
  text-align: center;
  line-height: 44*2px;
}

.select {
  width: 16*2px;
  height: 16*2px;
  border-radius: 50%;
  border: 1*2px solid #dbdbdb;
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
    margin-right: 10*2px;
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
          <li v-if="role == 'creator'" @touchstart='editSection'>
            <img class="editpng" src="@/assets/img/task-edit.png" />
            <div class="editProgress">编辑项目节点</div>
            <div class="editmore">
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
          <input class="userInput" type="text" id="item0" v-model.trim="taskName" maxlength="20" placeholder="添加任务名称" />
        </li>
        <li class="task-item">
          <label class="task-desc" for="item1">
            <div class="icon">
              <img src="@/assets/img/icon-describe.png" />
            </div>
            <div :class="[_tasksetting,{active_:isTaskDesc}]"> 任务描述</div>
          </label>
          <input class="userInput" type="text" id="item1" v-model.trim="taskDesc" maxlength="20" placeholder="添加任务描述" />
        </li>
        <li class="task-item time-logo-container">
          <label class="task-desc" for="item2">
            <div class="icon">
              <img src="@/assets/img/icon-start time.png" />
            </div>
            <div ref="startDate" class="task-setting">开始时间<img class="time-logo" src="@/assets/img/icon-right-slide03.png"/></div>
          </label>

          <v-datetime ref="startTime" id="selectStartTime" class="userInput selectStartTime " format="YYYY.MM.DD" @on-change="startDate_change"
            placeholder="开始时间">
            <!-- 开始时间 -->
            <span :style='styleStart'>{{startTime}}</span>
          </v-datetime>

        </li>
        <li class="task-item time-logo-container">
          <label class="task-desc" for="item3">
            <div class="icon">
              <img src="@/assets/img/icon-end time.png" />
            </div>
            <div  ref="endDate" class="task-setting" >结束时间 <img class="time-logo" src="@/assets/img/icon-right-slide03.png"/></div>
          </label>
          <v-datetime ref="endTime" id="selectEndTime" class="userInput selectEndTime " v-model="endTime" format="YYYY.MM.DD" @on-change="endDatechange"
            placeholder="结束时间">
            <span :style='styleEnd'>
            {{endTime}}
            </span>
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
            <div class="task-setting" ref="exe">指定执行人</div>
          </label>
          <div id="appointer" @touchstart='appointerManager'>
            <span class="name" ref="executor">{{executor}}</span>
            <span class="arrow">
            <img src="@/assets/img/icon-right-slide03.png" />
          </span>
          </div>
        </li>
      </ul>

      <div class="permit-setting"><span>权限设置</span></div>
      <ul class="task-panel permission-setting">
        <li class="task-item">
          <div v-for="(item,index) in setting" :key="index" @touchstart='changeIndex(index,item)'>
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
<script>
import { mapMutations, mapGetters } from "vuex";
import { Convent } from "@/services";
let reflect_to_task = {
  taskTheme: "项目主题",
  taskName: "任务名称",
  taskDesc: "任务描述",
  startTime: "开始时间",
  endTime: "结束时间",
  standard: " 验收标准",
  executor: "执行人"
};
export default {
  data() {
    return {
      setting: [
        {
          title: "公开",
          detail: "所有成员可见",
          isPublic: true
        },
        {
          title: "项目成员可见",
          detail: "该项目的成员可见",
          isMembersCanSee: false
        }
      ],
      flag: false,
      toastDom: null,
      showToast: true,
      currentIndex: 0,
      projectId: "",
      taskId: "",
      taskTheme: "",
      taskName: "",
      taskDesc: "",
      startTime: "开始时间",
      endTime: "结束时间",
      standard: "",
      executor: "",
      allowCreate: false,
      isPublic: true,
      allowedLook: false,
      showMembers: false,
      members: [],
      check_pass: false
    };
  },
  computed: {
    ...mapGetters({
      getTaskExecutor: "getTaskExecutor",
      getTaskSetting: "getTaskSetting",
      getTaskTheme: "getTaskTheme"
    }),
    styleStart() {
      if (!!this.startTime && window.sessionStorage.getItem("flag")) {
        return {
          color: "#666"
        };
      } else {
        return {
          color: "#ACACAC"
        };
      }
    },
    styleEnd() {
      if (!!this.endTime && window.sessionStorage.getItem("flag")) {
        return {
          color: "#666"
        };
      } else {
        return {
          color: "#ACACAC"
        };
      }
    },
    isTaskTheme() {
      return this.taskTheme && this.taskTheme.length ? true : false;
    },
    isTaskName() {
      return this.taskName && this.taskName.length ? true : false;
    },
    isTaskDesc() {
      return this.taskDesc && this.taskDesc.length ? true : false;
    },
    isTaskStandard() {
      return this.standard && this.standard.length ? true : false;
    },
    _tasksetting() {
      return "task-setting";
    },
    role() {
      return this.$store.state.permission.project.role;
    },
    themeName() {
      return this.$store.state.permission.project.themeName;
    }
  },
  watch: {
    taskTheme(val) {
      if (!!val) {
        window.sessionStorage.setItem("taskTheme", val);
      }
    },
    taskName(val) {
      if (!!val) {
        window.sessionStorage.setItem("taskName", val);
      }
    },
    taskDesc(val) {
      if (!!val) {
        window.sessionStorage.setItem("taskDesc", val);
      }
    },
    startTime(val) {
      // console.log(val);
      if (!!val) {
        window.sessionStorage.setItem("startTime", val);
        this.$refs.startDate.classList.add("active_");
        this.startTime = val;
      } else {
        this.$refs.startDate.classList.remove("active_");
      }
    },
    endTime(val) {
      // console.log(val);
      if (!!val) {
        this.endTime = val;
        this.$refs.endDate.classList.add("active_");
        window.sessionStorage.setItem("endTime", val);
      } else {
        this.$refs.endDate.classList.remove("active_");
        // console.log(document.querySelector(".selectEndTime>.vux-cell-primary"));
      }
    },
    standard(val) {
      if (!!val) {
        window.sessionStorage.setItem("standard", val);
      }
    },
    executor(val) {
      if (!!val) {
        window.sessionStorage.setItem("executor", val);
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    if (from.path == "/appointMessager" && to.path == "/addTaskSetting") {
      next(vm => {
        // console.log(vm.getTaskExecutor); //过滤选中的执行人;
        vm.$refs.exe.classList.add("active_");
        vm.executor = vm.getTaskExecutor.username;
        window.sessionStorage.setItem("executor", vm.executor);
      });
    } else if (
      from.path !== "/appointMessager" &&
      to.path == "/addTaskSetting"
    ) {
      next(vm => {
        let executor = window.sessionStorage.getItem("executor");
        // console.log(executor);
        if (executor) {
          vm.$refs.exe.classList.add("active_");
          vm.$refs.executor.textContent = executor;
        }
      });
    }
  },
  methods: {
    changeIndex(index, item) {
      // console.log(item);
      this.currentIndex = index;
      if (this.currentIndex == 0) {
        this.isPublic = true;
        window.sessionStorage.setItem("isPublic", true);
        window.sessionStorage.setItem("allowedLook", false);
        this.allowedLook = false;
      }
      if (this.currentIndex == 1) {
        this.isPublic = false;
        window.sessionStorage.setItem("allowedLook", true);
        window.sessionStorage.setItem("isPublic", false);
        this.allowedLook = true;
      }
    },
    ...mapMutations({
      SET_TASK: "SET_TASK"
    }),
    editProgress() {
      this.$router.push({
        path: "taskHistoryOrUpdate"
      }); //编辑项目节点
    },
    editSection() {
      this.$router.push({
        path: "/section?mode=edit"
      }); //编辑项目节点
    },
    throttle(delay) {
      let me = this;
      return new Promise((resovle, reject) => {
        // console.log(window.location.hash);
        Convent.createTask({
          projectId: window.localStorage.getItem("projectId"),
          projectName: this.taskTheme,
          taskName: this.taskName,
          taskDesc: this.taskDesc,
          startTime: new Date(this.startTime).getTime(),
          endTime: new Date(this.endTime).getTime(),
          checkStandard: this.standard,
          taskExecutor: this.executor,
          isOpen: this.isPublic ? 1 : 0
        })
          .then(res => {
            console.log(res,111);
            if (res.code == 1) {
              me.taskId = res.data;
              me.$toast.show("任务创建完成!", 500);
            }
          })
          .catch(err => {
            // console.log(err)
          });
        setTimeout(() => {
          resovle("compelete");
        }, delay);
      });
    },
    confirm() {
      this.validate();
      //防抖和节流
      if (this.check_pass) {
        this.throttle(500).then(() => {});

        this.$router.push({
          path: "conventEntry",
          query: {
            projectId: window.localStorage.getItem("projectId"),
            taskId: this.taskId
          }
        }); //项目创建完毕
      }
    },
    validate() {
      let k;
      for (k in reflect_to_task) {
        // console.log(this.$data[k]);

        if (
          this.$data.hasOwnProperty(k) &&
          this.$data[k] &&
          this.$data[k].length
        ) {
          this.check_pass = true;
        } else {
          // console.log(k);
          this.$dialog.message({
            message: `请添加${reflect_to_task[k]}`,
            icon: "fail"
          });
          this.check_pass = false;
          return;
        }
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
      this.$router.push("appointMessager");
    },
    selected(index, isAllowed) {
      this.members[index].isAllowed = !isAllowed;
    },
    inviteOthers() {
      //邀约他人可见
      this.showMembers = !this.showMembers;
      this.showMembers
        ? (this.$refs.arrow.style.transform = "rotate(90deg)")
        : (this.$refs.arrow.style.transform = "rotate(0)");
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
      this.startTime = val;
    },
    endDatechange(val) {
      this.endTime = val;
    },
    setTaskTheme() {
      this.$refs.taskTheme.setAttribute("disabled", true);
      //this.taskTheme = this.getTaskTheme;
    },
    init() {
      this.flag;
      //this.role != 'creator' ? this.setTaskTheme() : '';
      this.taskTheme = window.sessionStorage.getItem("taskTheme");
      this.taskName = window.sessionStorage.getItem("taskName");
      this.taskDesc = window.sessionStorage.getItem("taskDesc");
      this.startTime = window.sessionStorage.getItem("startTime");
      this.endTime = window.sessionStorage.getItem("endTime");
      this.standard = window.sessionStorage.getItem("standard");
      this.isPublic = window.sessionStorage.getItem("isPublic");
      this.allowedLook = window.sessionStorage.getItem(" allowedLook");
    },
    setProjectId() {
      if (!window.location.hash.includes("projectId")) {
        this.$dialog.message({
          message: "请先创建项目!",
          icon: "fail"
        });
        this.$router.push("conventEntry");
      } else {
        let projectId = window.location.hash.split("?")[1].split("=")[1];
        window.localStorage.setItem("projectId", projectId);
      }
    }
  },
  created() {
    // this.role = 'taskManager'; //邀约他人可见
    //this.role = 'creator' //项目发起人编辑节点
    // console.log(this.taskExecutor);
    if (window.sessionStorage.getItem("flag")) {
      this.init();
    }
  },
  mounted() {
    window.sessionStorage.setItem("flag", true);
    this.setProjectId();
  }
};
</script>
