<style lang="less" scoped>
  .login-container {
    background: rgba(255, 255, 255, 1);
    opacity: 0.9024;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    header {
      width: 100%;
      height: 205*2px;
      display: flex;
      justify-content: center;
      img {
        display: inline-block;
        margin-top: 56*2px;
        width: 103*2px;
        height: 103*2px;
      }
    }
    section {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .task {
        margin-top: 26*2px;
        width: 270*2px;
        height: 44*2px;
        font-size: 18*2px;
        border-radius: 22*2px;
        font-size: 16*2px;
        text-align: center;
        font-family: PingFangSC-Regular;
        line-height: 44*2px;
        border: 2px solid #6DA9F3;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          display: inline-block;
          width: 128*2px;
          height: 16*2px;
          color: rgba(153, 153, 153, 1);
          text-align: center;
        }
      }
      .addTask {
        margin-top: 31*2px;
        width: 270*2px;
        height: 44*2px;
        font-size: 18*2px;
        border-radius: 22*2px;
        background: linear-gradient(180deg, rgba(134, 192, 248, 1), rgba(78, 140, 238, 1));
        box-shadow: 0px 4*2px 4*2px 0px rgba(140, 183, 243, 1);
        text-align: center;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 44*2px;
      }
    }
    footer {
      position: absolute;
      bottom: 0;
      ul {
        width: 100%;
        height: 50*2px;
        li {
          float: left;
          height: 100%;
          width: 40*2px;
          margin-left: 38*2px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          &:nth-child(1) {
            margin-left: 50*2px;
          }
          div {
            img {
              display: inline-block;
              width: 20*2px;
            }
          }
          span {
            font-size: 10*2px;
            font-family: PingFangSC-Regular;
            color: rgba(90, 169, 252, 1);
          }
        }
      }
      .footer-bg {
        margin-top: 10*2px;
        width: 100%;
        height: 54*2px;
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

</style>

<template>
  <div class="login-container">
    <header>
      <div class="logo">
        <img src="@/assets/img/image-logo.png">
      </div>
    </header>
    <section>
      <div class="task">
        <input type="text" v-model.trim="taskName" placeholder="填写项目主题名称" />
      </div>
      <div class="addTask" @touchstart='addTask'>添加任务</div>
    </section>
    <footer>
      <ul>
        <li>
          <div>
            <img src="@/assets/img/book.png">
          </div>
          <span>操作手册</span>
        </li>
        <li>
          <div>
            <img src="@/assets/img/delete.png">
          </div>
          <span>流程演示</span>
        </li>
        <li>
          <div>
            <img src="@/assets/img/manul.png">
          </div>
          <span>在线客服</span>
        </li>
        <li>
          <div>
            <img src="@/assets/img/comments.png">
          </div>
          <span>客户对话</span>
        </li>
      </ul>
      <div class="footer-bg">
        <img src="@/assets/img/icon8.png">
      </div>
    </footer>
  </div>
</template>
<script>
  import {
    mapMutations,
    mapGetters
  } from 'vuex';
  export default {
    name: 'appointment',
    data() {
      return {
        taskName: ''
      }
    },
    computed: {
      ...mapGetters(['getTaskTheme'])
    },
    methods: {
      ...mapMutations({
        'SET_TASKTHEME': 'SET_TASKTHEME'
      }),
      addTask() {
        if (!this.taskName.length) {
          this.$dialog.message({
            message: '填写项目主题名称!'
          })
        } else {
          this.SET_TASKTHEME(this.taskName);
          this.$router.push('conventEntry')
        }
        console.log(this.getTaskTheme)
      }
    }
  }

</script>
