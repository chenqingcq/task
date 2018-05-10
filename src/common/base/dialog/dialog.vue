<template>
  <transition v-if="show">
    <div>
      <div class="container" style="position:fixed;z-index:1111111" v-if="type !=='message'">
        <template v-if="type ==='confirm'">
          <div class="confirm-container">
            <ul>
              <li>
                <div>
                  <img src="@/assets/img/image-notice.png" />
                </div>
                <div class="message">
                  {{message}}
                </div>
              </li>
              <li v-show="showBottom">
                <div @click='_concel'>取消</div>
                <div @click='_confirm'>确定</div>
              </li>
            </ul>
          </div>
        </template>
        <template v-if="type==='info'">
          <div class="panel-info">
            <img class="close" @click='close' src="../../../assets/img/icon-close.png" />
            <input id="userIpt" class="b_FS-16" type="text" ref='input' v-model="text" :placeholder="placeholder" :maxlength='length'>
            <label for="userIpt" v-show="btnName=='add'">
              <!--<img class="icon-edit" v-show="btnName=='add'" src="@/assets/img/icon-edit01.png" />            -->
            </label>
            <div class="bar"></div>
            <div @click='close'>
              <div class="btn b_FS-16" @click='operate(text)' ref="btn">
                <img v-if="btnName=='add'" src="@/assets/img/icon-add01.png" />
                <img v-if="btnName=='delete'" src="@/assets/img/icon-delete.png" />
                <div>{{btn}}</div>
              </div>
            </div>
          </div>
        </template>
        <template v-if="type==='notice'" v-show="showNotice">
          <div class="panel-notice">
            <!--<img class="close" @click='close' src="../../../assets/img/icon-close.png" />-->
            <div class="top">
              <div class="noticeIcon">
                <img class="noticeImg" :src="imgUrl" />
              </div>
              <p class="title b_FS-18" :style='styleTitle'>{{notice.title}}</p>
              <p class="task b_FS-14">{{notice.task}}</p>
            </div>
            <!--<div class="bottom  b_FS-12">
              <div class="charge"><span class="role">负责人:</span>{{notice.charge}}</div>
              <div class="partIn"><span class="role">参与人:</span>{{parts}}</div>
            </div>-->
          </div>
        </template>
      </div>
      <template v-show="type === 'message'">
        <div class="messageBox" @click='closeMessage($event)'>
          <div class="box">
            <div class="icon">
              <img :src='messageIcon' />
            </div>
            <div class="message">{{message}}</div>
          </div>
        </div>
      </template>
    </div>
  </transition>
</template>
<script>
  export default {
    data() {
      return {
        text: "",
        show: false,
        parts: "",
        btn: "",
        message : '' ,
      };
    },
    computed: {
      imgUrl() {
        if (this.notice.state === "pass") {
          return require("@/assets/img/image-pass.png");
        }
        if (this.notice.state === "fail") {
          return require("@/assets/img/image-notice.png");
        }
        if (this.notice.state === "warn") {
          return require("@/assets/img/image-notice.png");
        }
      },
      messageIcon(){
        if(this.icon =='fail'){
          return require('@/assets/img/image-notice.png')
        }
        if(this.icon == 'pass'){
          return require('@/assets/img/success.png')
        }
      },
      styleTitle() {
        if (this.notice.state === 'pass') {
          return {
            color: 'rgba(90,222,82,1)'
          }
        } else {
          return {
            color: 'rgba(255,115,100,1)'
          }
        }
      }
    },

    methods: {
      closeMessage(e){
        console.log(e.target);
        if(e.target.className == 'messageBox'){
          this.show = false
        }
      },
      close() {
        this.show = false;
      },
      initPartIn() {
        console.log(this.notice.partIn);
        this.parts = this.notice.partIn.join("丶");
        setTimeout(() => {
          this.show = false;
        }, 1500);
      },
      judgeBtn() {
        console.log(this.length);
        this.btn =
          this.btnName === "add" ?
          "添加" :
          this.btnName === "delete" ? "删除" : "";
        if (this.btnName == "delete") {
          this.$refs.btn.style[
            "background-image"
          ] = `linear-gradient(-180deg, #f1baaf 0%, #ea6e5d 100%)`;
        }
      },
      fadeOut() {
        console.log(this.icon)
        setTimeout(() => {
          this.show = false;
        }, 1000);
      },
      _confirm() {
        this.show = false;
        if (!!this.confirm) {
          this.confirm();
        }
      },
      _concel() {
        if (!!this.concel) {
          this.concel();
        }
        this.show = false;
      }
    },
    mounted() {
      this.type === "notice" ? this.initPartIn() : "";
      this.type === "info" ? this.judgeBtn() : "";
      this.type === "message" ? this.fadeOut() : "";
    }
  };

</script>

<style lang='less' scoped>
  .confirm-container {
    /*position: absolute;*/
    left: 50%;
    top: 50% ;
    position: absolute;
    transform: translate(-50%,-50%);
    font-family: PingFangSC-Regula;
    z-index: 99999999;
    width: 208*2px;
    height: 115*2px;
    background-color: #fff;
    border-radius: 9*2px;
    font-size: 14*2px;
    overflow: hidden;
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      flex-direction: column;
      li {
        &:first-of-type {
          height: 77*2px;
          width: 100%;
          border-bottom: 1px solid #999;
          display: flex;
          align-items: center;
          div:nth-child(1) {
            width: 80*2px;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            img {
              display: inline-block;
              height: 40*2px;
            }
          }
          div:nth-child(2) {
            flex: 1;
            text-align: center;
            font-weight: 500;
            font-size: 14*2px;
            color: rgba(153, 153, 153, 1);
            /*line-height: 20px;*/
            line-height: normal;
          }
        }
        &:last-of-type {
          display: flex;
          flex: 1;
          width: 100%;
          div {
            width: 50%;
            padding:28px 0 ;
            /*height: 100%;*/
            justify-content: center;
            display: flex;
            align-items: center;
            font-weight: 500;
            font-size: 16*2px;
            line-height: normal;
            &:first-of-type {
              border-right: 1px solid rgba(153, 153, 153, 1);
              color: rgba(102, 102, 102, 1);
            }
            &:last-of-type {
              color: rgba(107, 167, 243, 1);
            }
          }
        }
      }
    }
  }

  .fade-enter-active {
    animation: zoom 1s ease;
  }

  .fade-leave-active {
    animation: zoom 1s ease reverse;
  }

  @keyframes zoom {
    from {
      transform: scale(0.5, 0.5);
      opacity: 0.5;
    }
    to {
      transform: scale(1, 1);
      opacity: 1;
    }
  }

  @keyframes scale {
    0% {
      transform: scale(0.8, 0.8);
      opacity: 0;
    }
    50% {
      transform: scale(1.2, 1.2);
      opacity: 0.8;
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }

  input:disabled {
    background: #fff;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .messageBox {
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    font-weight: 500;
    left: 0;
    background: rgba(99, 99, 99, 0.6);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .box {
      width: 208*2px;
      height: 80*2px;
      background: #ffffff;
      box-shadow: 0 1px 5px 0 rgba(177, 177, 177, 0.6),
      inset 0 -1px 2px 0 rgba(135, 135, 135, 0.5);
      border-radius: 12px;
      display: flex;
      flex-wrap: nowrap;
      .icon {
        width: 80*2px;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        img {
          display:inline-block;
          width: 60*2px;
        }
      }
      .message {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: PingFangSC-Regular;
        font-size: 14*2px;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  img.icon-edit {
    display: inline-block;
    width: 22*2px !important;
    height: 22*2px !important;
    position: absolute;
    bottom: 76*2px;
    right: 71*2px;
  }

  .container {
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(99, 99, 99, 0.5);
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    .panel-notice {
      animation: scale 0.5s ease;
      min-width: 212*2px;
      min-height: 201*2px;
      background-color: #fff;
      border-radius: 18px;
      position: relative;
      display: flex;
      justify-content: center;
      img.close {
        display: block;
        position: absolute;
        z-index: 9999;
        width: 15px*2;
        height: 15px*2;
        right: 8px*2;
        top: 8px*2;
      }

      .top {
        width: 100%;
        height: 190*2px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        p.title {
          position: absolute;
          bottom: 30px*2;
          margin-top: 14px;
          color: #5ade52;
        }
        p.task {
          position: absolute;
          bottom: 10px*2;
          color: #666;
        }
        .noticeIcon {
          /*height: 171px*2;*/
          position: absolute;
          top: 0;
          img.noticeImg {
            margin-top: 27*2px;
            display: inline-block;
            width: 145px*2;
          }
        }
      }
      .bottom {
        color: #999;
        width: 171*2px;
        min-height: 83*2px;
        border-top: 2px solid #f4f4f4;
        position: absolute;
        bottom: 0;
        .role {
          margin-right: 10*2px;
        }
        .charge {
          min-height: 17*2px;
          margin-top: 9*2px;
        }
        .partIn {
          margin-top: 2px;
          min-height: 17*2px;
        }
      }
    }
    .panel-info {
      width: 290px*2;
      height: 133px*2;
      background-color: #fff;
      border-radius: 4px*2;

      top: 50% ;
      left: 50% ;
      position: absolute;
      transform: translate(-50%, -50%);

      display: flex;
      justify-content: center;
      img.close {
        display: block;
        position: absolute;
        width: 15px*2;
        height: 15px*2;
        right: 8px*2;
        top: 8px*2;
      }
      input {
        display: inline-block;
        border: none;
        outline: none;
        -webkit-appearance: none;
        border-radius: 0;
        text-align: center;
        font-size: 16px*2;
        color: #999999;
        /*position: relative;*/
        position: absolute;
        left: 0;
        width: 100%;
        margin: auto;
        height: 39px;
        bottom: 79px*2;
      }
      .bar {
        position: absolute;
        left: 36px*2;
        right: 36px*2;
        bottom: 69px*2;
        height: 2px*2;
        background: #f4f4f4;
      }
      .delete-btn {
        background-image: linear-gradient(-180deg, #f1baaf 0%, #ea6e5d 100%);
      }
      .btn {
        height: 44px*2;
        background-image: linear-gradient(-180deg, #86c0f8 0%, #4e8cee 100%);
        box-shadow: 0 2px*2 4px*2 0 rgba(0, 0, 0, 0.38);
        border-radius: 2px*2;
        position: absolute;
        bottom: 10px*2;
        left: 10px*2;
        right: 10px*2;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 16px*2;
        img {
          display: inline-block;
          width: 16*2px;
          margin-right: 4*2px;
        }
        div {
          height: 100%;
          line-height: 44px*2;
        }
      }
    }
  }

</style>
