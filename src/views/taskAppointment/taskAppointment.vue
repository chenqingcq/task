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
      .task {
        margin: 0 auto;
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
        margin: 0 auto;
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
      width: 100%;
      bottom: 0;
      ul {
        width: 100%;
        height: 50*2px;
        display: flex;
        justify-content: space-around;
        li {
          float: left;
          height: 100%;
          width: 40*2px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
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
        <li @touchstart='link_to_help' v-for="(item,index) in items" :key="index">
          <div>
            <img :src="item.imgUrl">
          </div>
          <span>{{item.content}}</span>
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
        taskName: '',
        items: [{
            imgUrl: require('@/assets/img/book.png'),
            content: '操作手册'
          },
          {
            imgUrl: require('@/assets/img/delete.png'),
            content: '流程演示'
          },
          {
            imgUrl: require('@/assets/img/manul.png'),
            content: '在线客服'
          },
          {
            imgUrl: require('@/assets/img/comments.png'),
            content: '客户对话'
          },
        ],
      }
    },
    computed: {
      ...mapGetters(['getTaskTheme'])
    },
    methods: {
      ...mapMutations({
        'SET_TASKTHEME': 'SET_TASKTHEME'
      }),
      link_to_help() {
        this.$router.push('help')
      },
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
