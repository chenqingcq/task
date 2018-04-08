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
      p {
        height: 30*2px;
        position: relative;
        width: 300*2px;
        &:last-of-type {
          margin-top: 40*2px;
        }
        label {
          display: inline-block;
          margin-right: 5*2px;
          margin-top: 5*2px;
          img {
            display: inline-block;
            width: 14*2px;
          }
        }
        .countDown {
          position: absolute;
          right: 6*2px;
          bottom: 6*2px;
          min-width: 60*2px;
          max-width: 72*2px;
          font-size: 12*2px;
          font-family: PingFangSC-Regular;
          color: rgba(100, 160, 242, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: none;
          height: auto;
        }
        input {
          width: 274*2px;
          display: inline-block;
          height: 100%;
          padding-bottom: 6*2px;
          border-bottom: 1*2px solid #71ABF3;
          font-size: 16*2px;
          font-family: PingFangSC-Regular;
          color: rgba(153, 153, 153, 1);
          padding: 0 4*2px;
        }
      }
      .submit {
        margin-top: 26*2px;
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
      <p>
        <label for="telephone">
              <img src="@/assets/img/phone-ios.png">
          </label>
        <input type="text" id="telephone" v-model.trim="telephone" placeholder="请输入手机号" maxlength="20">
      </p>
      <p>
        <label for="checkCode">
              <img src="@/assets/img/password.png">
          </label>
        <input type="text" id="checkCode" v-model.trim="checkCode" placeholder="验证码" maxlength="10">
        <input type="button" class="countDown" v-model="checkcode" @touchstart='settime' ref="checkCodeText" />
      </p>
      <div class="submit" @touchstart='login'>登录</div>
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
  export default {
    name: 'login',
    data() {
      return {
        telephone: '',
        checkCode: '',
        checkcode: '获取验证码',
        timer: null,
        count: 60
      }
    },
    methods: {
      login() {
        this.$router.push('appointment')
      },
      settime(e) {
        // while (this.count > 0) {
        //   setTimeout(() => {
        //     this.count--;
        //     this.checkcode = this.count
        //   }, 1000)
        // }
      }
    },
    beforeDestroy() {
      this.timer = null;
    }
  }

</script>
