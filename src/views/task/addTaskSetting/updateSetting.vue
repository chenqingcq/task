<style lang="less" scoped>
.task-container {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  // height: 100vh;
  // width: 100vw;
  overflow: scroll;
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
      // width: 112px*2;
      overflow-x: auto;
      flex: 1;
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
        height: 100%;
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
  margin-right: 30px !important;
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
  margin: 100px 16px 0px 16px;
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
  flex: 1;
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
    // margin-right: 10*2px;
  }
  span.arrow_ {
    // transform: translateY(-50px);
    display: inline-block;
    margin-right: 10*2px;
    width: 20px;
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
          <input class="userInput" ref="taskTheme" type="text" id="taskTheme"  v-model.trim="taskTheme" maxlength="10" placeholder="添加项目主题"
          />
        </li>
        <ul class="editDeadTime">
          <li v-if="role == 'creator'" @click='editSection'>
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
              <img src="@/assets/img/icon-task.png" />
            </div>
            <div :class="[_tasksetting,{active_:isTaskName}]"> 任务名称</div>
          </label>
          <input ref="_taskName" class="userInput" type="text" id="item0" v-model.trim="taskName" maxlength="10" placeholder="添加任务名称" />
        </li>
        <li class="task-item">
          <label class="task-desc" for="item1">
            <div class="icon">
              <img src="@/assets/img/icon-describe.png" />
            </div>
            <div :class="[_tasksetting,{active_:isTaskDesc}]"> 任务描述</div>
          </label>
          <input class="userInput" type="text" id="item1" v-model.trim="taskDesc" maxlength="120" placeholder="添加任务描述" />
        </li>
        <li class="task-item time-logo-container">
          <label class="task-desc" for="item2">
            <div class="icon">
              <img src="@/assets/img/icon-start time.png" />
            </div>
            <div ref="startDate" class="task-setting">开始时间<img class="time-logo" style="display:none" src="@/assets/img/icon-right-slide03.png"/></div>
          </label>

          <!-- <v-datetime ref="startTime" id="selectStartTime" class="userInput selectStartTime " format="YYYY.MM.DD" @on-change="startDate_change"
            placeholder="开始时间">
            <span :style='styleStart'>{{startTime}}</span>
          </v-datetime> -->
          <div id="selectStartTime" class="userInput selectStartTime ">
            <span :style='styleStart'>{{startTime}}</span>
          </div>

        </li>
        <li class="task-item time-logo-container">
          <label class="task-desc" for="item3">
            <div class="icon">
              <img src="@/assets/img/icon-end time.png" />
            </div>
            <div  ref="endDate" class="task-setting" >结束时间 <img class="time-logo"  style="display:none" src="@/assets/img/icon-right-slide03.png"/></div>
          </label>
          <!-- <v-datetime ref="endTime" id="selectEndTime" class="userInput selectEndTime " v-model="endTime" format="YYYY.MM.DD" @on-change="endDatechange"
            placeholder="结束时间">
            <span :style='styleEnd'>
            {{endTime}}
            </span>
          </v-datetime> -->
          <div  id="selectEndTime" class="userInput selectEndTime " >
            <span :style='styleEnd'>
            {{endTime}}
            </span>
          </div>
        </li>
        <li class="task-item">
          <label class="task-desc" for="item4">
            <div class="icon">
              <img src="@/assets/img/icon-standard.png" />
            </div>
            <div :class="[_tasksetting,{active_:isTaskStandard}]">验收标准</div>
          </label>
          <input class="userInput" type="text" id="item4" v-model.trim="standard" maxlength="120" placeholder="添加验收标准" />
        </li>
        <li class="task-item">
          <label class="task-desc" for="item5">
            <div class="icon">
              <img src="@/assets/img/icon-nominee.png" />
            </div>
            <div class="task-setting" ref="exe">指定执行人</div>
          </label>
          <div id="appointer" @click='appointerManager'>
            <span class="name" ref="executor">{{executor}}</span>
            <span class="arrow_">
            <img src="@/assets/img/icon-right-slide03.png" />
          </span>
          </div>
        </li>
      </ul>

      <div class="permit-setting"><span>权限设置</span></div>
      <ul class="task-panel permission-setting">
        <li class="task-item">
          <div v-for="(item,index) in setting" :key="index" @click='changeIndex(index,item)'>
            <p :class="{active_:currentIndex == index}">{{item.title}} </p>
            <p>
              <span :class='{active :currentIndex == index}'>{{item.detail}}</span>
            </p>
          </div>
        </li>
      </ul>
      <div @click='confirm' class="confirm">确定</div>
    </div>
  </div>

</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import { Convent } from "@/services";
let reflect_to_task = {
  taskName: "任务名称",
  startTime: "开始时间",
  endTime: "结束时间"
};
export default {
  data() {
    return {
      setting: [
        {
          title: "公开",
          detail: "所有成员可见"
        },
        {
          title: "项目成员可见",
          detail: "该项目的成员可见"
        }
      ],
      flag: false,
      lockTime: true,
      hasProjectId: false,
      toastDom: null,
      showToast: true,
      currentIndex: 0,
      projectId: "",
      taskId: "",
      taskTheme: "",
      taskName: "",
      taskDesc: "",
      startTime: "",
      endTime: "",
      standard: "",
      executor: "  ",
      allowCreate: false,
      isPublic: true,
      allowedLook: false,
      showMembers: false,
      members: [],
      check_pass: false,
      isOpen: true,
      cantSetTime: true,
      hasTaskId: false
    };
  },
  computed: {
    ...mapGetters({
      getTaskSetting: "getTaskSetting",
      getProjectId: "getProjectId",
      getTaskId: "getTaskId",
      getProjectThemeName: "getProjectThemeName",
      getUserId: "getUserId",
      getUserRole: "getUserRole"
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
      return this.$store.state.permission.project.role || "";
    },
    themeName() {
      return this.$store.state.permission.project.themeName || "";
    }
  },
  watch: {
    endTime(newVal) {
      if (newVal) {
        this.$refs.endDate.classList.add("active_");
        this.check_time();
      } else {
        this.$refs.endDate.classList.remove("active_");
      }
    },
    startTime(newVal) {
      if (newVal) {
        this.$refs.startDate.classList.add("active_");
        this.check_time();
      } else {
        this.$refs.startDate.classList.remove("active_");
      }
    },
    executor(newVal) {
      if (newVal) {
        this.$refs.exe.classList.add("active_");
      } else {
        this.$refs.exe.classList.remove("active_");
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log(to, from);
    if (from.path == "/appointMessager" && to.path == "/updateTaskSetting") {
      next(vm => {
        // console.log(vm.getTaskExecutor); //过滤选中的执行人;
        vm.taskId = to.query.taskId;
        vm.projectId = to.query.projectId;
        // vm.executor = vm.getTaskExecutor.executor;
        console.log(vm.taskId, vm.projectId, "------------------------------");
        vm.$refs.taskTheme.setAttribute("disabled", true);        
        try {
          vm.getData();
          vm.setExcutor();
        } catch (err) {}
      });
    }
    if (to.path == "/updateTaskSetting" && from.path == "/taskDetail") {
      next(vm => {
        // console.log(executor);
        vm.projectId = to.query.projectId;
        vm.taskId = to.query.taskId;
        vm.$refs.taskTheme.setAttribute("disabled", true);

        try {
          vm._updateTask(); //重新设置任务
        } catch (err) {}
      });
    }
    if (to.path == "/updateTaskSetting" && from.path == "/section") {
      next(vm => {
        // console.log(executor);
        vm.projectId = to.query.projectId;
        vm.taskId = to.query.taskId;
        vm.$refs.taskTheme.setAttribute("disabled", true);        
        try {
          vm.getData(); //重新获取数据
        } catch (err) {}
      });
    }
  },
  methods: {
    setData() {
      //缓存已填写的数据
      let self = this;
      window.sessionStorage.setItem(
        "updatting",
        JSON.stringify(
          Object.assign(
            {
              taskId: self.taskId,
              projectId: self.projectId,
              projectName: self.projectName,
              taskTheme: self.taskTheme
            },
            {
              taskName: self.taskName,
              taskDesc: self.taskDesc,
              startTime: self.startTime,
              endTime: self.endTime,
              standard: self.standard,
              executor: self.executor,
              isOpen: self.currentIndex == 0 ? 1 : 0
            }
          )
        )
      );
    },
    getData() {
      let settings = window.sessionStorage.getItem("updatting");
      if (settings.length) {
        settings = JSON.parse(settings);
        (this.projectId = settings.projectId),
          (this.taskTheme = settings.taskTheme),
          (this.taskName = settings.taskName);
        this.taskDesc = settings.taskDesc;
        this.startTime = settings.startTime;
        this.endTime = settings.endTime;
        this.standard = settings.standard;
        this.executor = settings.executor;
        this.currentIndex = settings.isOpen == 1 ? 0 : 1;
      }
      console.log(settings);
    },
    setExcutor() {
      let self = this;
      if (this.executor) {
        return;
      }
      // debugger;
      Convent.getTaskBasicInfo(self.taskId)
        .then(res => {
          console.log("---基本任务信息--", res);
          if (res.code == 1 && res.status == 200) {
            // debugger;
            if (res.data.executorNickName && res.data.executorNickName.length) {
              this.$refs.exe.classList.add("active_");
              this.executor = res.data.executorNickName;
              self.$refs._taskName.setAttribute("disabled", true);
              self.$refs.taskTheme.setAttribute("disabled", true);
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeIndex(index, item) {
      // console.log(item);
      this.currentIndex = index;
      console.log(this.currentIndex, "----------now Index--------");
    },
    ...mapMutations({
      SET_TASKID: "SET_TASKID",
      SET_TASK_SETTINGS: "SET_TASK_SETTINGS"
    }),
    editProgress() {
      this.$router.push({
        path: "taskHistoryOrUpdate"
      }); //编辑项目节点
    },
    editSection() {
      this.setData();
      this.$router.push({
        path: "/section?mode=edit"
      }); //编辑项目节点
    },
    _getTaskId() {
      let self = this;
      return new Promise((resovle, reject) => {
        // console.log(window.location.hash);
        Convent.createTask({
          projectId: self.getProjectId,
          projectName: self.taskTheme,
          taskName: self.taskName,
          taskDesc: self.taskDesc,
          startTime: +new Date(this.startTime.replace(/\./g, "/")),
          endTime: +new Date(this.endTime.replace(/\./g, "/")),
          checkStandard: self.standard,
          isOpen: self.isPublic ? 1 : 0
        })
          .then(res => {
            this.SET_TASKID(res.data);
            resovle(res.data);
          })
          .catch(err => {
            console.log(err);
            self.$toast.show("创建任务失败!", 500);
            reject();
          });
      });
    },
    _updateTask() {
      let self = this;
      //任务名称 开始时间结束时间不可更改
      Convent.getTaskBasicInfo(this.taskId)
        .then(res => {
          console.log(res);
          if (res.code == 1 && res.status == 200) {
            self.updateTime(res.data.startTime, res.data.endTime);
            self.taskName = res.data.taskName;
            self.$refs._taskName.setAttribute("disabled", true);
            self.executor = res.data.executorNickName
              ? res.data.executorNickName
              : undefined;
            if (self.executor) {
              self.$refs.exe.classList.add("active_");
            }
            self.taskDesc = res.data.taskDesc;
            self.standard = res.data.checkStandard;
            self.taskTheme = res.data.projectName;
            if (self.taskTheme) {
              self.$refs.taskTheme.setAttribute("disabled", true);
            }
            self.currentIndex = res.data.isOpen == 1 ? 0 : 1;
            // debugger;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //重新刷新时间
    updateTime(start, end) {
      console.log(start, end);
      start = parseInt(start);
      end = parseInt(end);
      let s_y = new Date(start).getFullYear(),
        s_m =
          new Date(start).getMonth() + 1 < 10
            ? `0${new Date(start).getMonth() + 1}`
            : new Date(start).getMonth() + 1,
        s_d =
          new Date(start).getDate() < 10
            ? `0${new Date(start).getDate()}`
            : new Date(start).getDate(),
        e_y = new Date(end).getFullYear(),
        e_m =
          new Date(end).getMonth() + 1 < 10
            ? `0${new Date(end).getMonth() + 1}`
            : new Date(end).getMonth() + 1,
        e_d =
          new Date(end).getDate() < 10
            ? `0${new Date(end).getDate()}`
            : new Date(end).getDate();
      this.startTime = `${s_y}.${s_m}.${s_d}`;
      this.endTime = `${e_y}.${e_m}.${e_d}`;
      this.cantSetTime = false;
      console.log(
        this.startTime,
        this.endTime,
        "-----------------------<<<>>>"
      );
    },

    dateFixedIos(str) {
      if (typeof str == "number") {
        return str;
      }
      return str.replace(/\.|\-/g, "/");
    },
    confirm() {
      let self = this;
      Convent.updateTask(self.taskId, {
        taskId: self.taskId,
        taskDesc: self.taskDesc,
        checkStandard: self.standard,
        isOpen: self.currentIndex == 0 ? 1 : 0
      })
        .then(res => {
          if (res.code == 1 && res.status == 200) {
            this.$router.push({
              path: "/taskDetail",
              query: {
                taskId: self.taskId,
                projectId: self.projectId
              }
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    check_time() {
      if (this.startTime && this.endTime) {
        if (
          new Date(this.dateFixedIos(this.endTime)).getTime() <=
          new Date(this.dateFixedIos(this.startTime)).getTime()
        ) {
          this.$toast.show("结束应大于开始时间！", 1000);
          this.endTime = "";
        }
      }
    },
    _createTask() {
      let self = this;
      this._getTaskId()
        .then(taskId => {
          this.$router.push({
            path: "/convententry",
            query: {
              taskId: taskId,
              projectId: self.getProjectId
            }
          }); //项目创建完毕
          // debugger;
        })
        .catch(err => {
          console.log(err);
          // debugger;
        });
    },
    validate() {
      let k;
      for (k in reflect_to_task) {
        if (
          this.$data.hasOwnProperty(k) &&
          this.$data[k] &&
          this.$data[k].length
        ) {
          this.check_pass = true;
          console.log(this.check_pass);
        } else {
          this.check_pass = false;
          console.log(this.check_pass);
          return;
        }
      }
    },
    _validate() {
      let k;
      for (k in reflect_to_task) {
        if (
          this.$data.hasOwnProperty(k) &&
          this.$data[k] &&
          this.$data[k].length
        ) {
          this.check_pass = true;
          console.log(this.check_pass);
        } else {
          this.check_pass = false;
          this.$toast.show(`请添加${reflect_to_task[k]}`, 500);
          console.log(this.check_pass);
          return;
        }
      }
    },
    appointerManager() {
      let self = this;
      if (this.executor) {
        this.$toast.show("执行人已存在!");
        return;
      }

      this.validate();
      //验证必选项
      if (!this.check_pass) {
        this._validate();
        return;
      }
      if (self.taskId) {
        this.setData();
        self.$router.push({
          path: "/appointMessager",
          query: {
            taskId: self.taskId,
            projectId: self.getProjectId
          }
        });
      } else if (this.check_pass && !this.taskId) {
        this.setData();
        this._getTaskId()
          .then(taskId => {
            self.taskId = taskId;
            this.$router.push({
              path: "/appointMessager",
              query: {
                taskId: taskId,
                projectId: self.getProjectId
              }
            }); //项目创建完毕
            // debugger;
          })
          .catch(err => {
            console.log(err);
            // debugger;
          });
      }
    },
    _createProject() {
      this.validate();
      if (this.check_pass) {
        Convent.createProject({
          projectName: this.taskTheme
        })
          .then(res => {
            console.log(res, "-------------pid----------");
            if (res.code == 1 && res.status == 200) {
              this.projectId = res.data;
              this._createTask();
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
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
      this.taskTheme = this.getTaskTheme; //分为两种方式一种首页创建任务；另一直接创建任务直接;
    },
    init() {
      //this.role != 'creator' ? this.setTaskTheme() : ''
      this.taskTheme = this.getProjectThemeName;
    }
  },
  created() {
    // this.role = 'taskManager'; //邀约他人可见
    //this.role = 'creator' //项目发起人编辑节点
    // console.log(this.taskExecutor);
    // if (this.getProjectId && this.getProjectId.length) {
    //   this.init();
    // } else {
    //   this.$dialog.message({
    //     message: "请创建项目名称",
    //     icon: "fail"
    //   });
    //   this.$router.push("conventEntry");
    // }
  },
  mounted() {
    console.log("=============update====================");
    this.$refs.taskTheme.setAttribute("disabled", true);
  }
};
</script>
