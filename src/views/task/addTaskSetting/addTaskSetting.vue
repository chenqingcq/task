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
      img.editpng {
        display: inline-block;
        height: 26*2px;
        margin-right: 13*2px;
      }
      img.editmore {
        display: inline-block;
        height: 12*2px;
        position: absolute;
        right: 14*2px;
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
        <input class="userInput" type="text" id="item0" v-model="item0" maxlength="20" placeholder="添加任务名称" />
      </li>
      <li class="task-item">
        <label class="task-desc" for="item1">
          <div class="icon">
            <img src="@/assets/img/icon-describe.png" />
          </div>
          <div class="task-setting"> 任务描述</div>
        </label>
        <input class="userInput" type="text" id="item1" v-model="item1" maxlength="20" placeholder="添加任务描述" />
      </li>
      <li class="task-item time-logo-container">
        <label class="task-desc" for="item2">
          <div class="icon">
            <img src="@/assets/img/icon-start time.png" />
          </div>
          <div class="task-setting">开始时间<img class="time-logo" src="@/assets/img/icon-right-slide03.png"/></div>
        </label>

        <v-datetime class="userInput selectStartTime " v-model="item2" format="YYYY.MM.DD" @on-change="startDate_change" placeholder="开始时间">
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
        <v-datetime class="userInput selectEndTime " v-model="item3" format="YYYY.MM.DD" @on-change="endDate_change" placeholder="結束时间">
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
        <input class="userInput" type="text" id="item4" v-model="item4" maxlength="20" placeholder="添加验收标准" />
      </li>
      <li class="task-item">
        <label class="task-desc" for="item5">
          <div class="icon">
            <img src="@/assets/img/icon-nominee.png" />
          </div>
          <div class="task-setting">指定执行人</div>
        </label>
        <input class="userInput" type="text" id="item5" v-model="item5" maxlength="20" placeholder="添加执行人" />
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
    <ul class="editDeadTime" v-if="role == 'taskCreater'">
      <li>
        <img class="editpng" src="@/assets/img/icon-edit.png" />
        <div class="editProgress">编辑项目节点</div>
        <img class="editmore" src="@/assets/img/icon-right-slide03.png">
      </li>
    </ul>
    <div class="confirm">确定</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: '...',
        taskTheme: '',
        item0: '',
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        allowCreate: true,
        isPublic: false,
        allowedLook: true,
        role: ''
      }
    },
    computed: {

    },
    methods: {
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
        console.log('startDate: ' + val)
      },
      endDate_change(val) {
        console.log('endDate: ' + val)
      }
    },
    created() {
      this.role = 'taskCreater'; //如果是项目发起人可见
    }
  }

</script>
