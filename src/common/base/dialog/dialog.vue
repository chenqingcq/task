<template>
  <transition name="fade" v-if="show">
    <div class="container" v-if="type !=='message'">
      <template v-if="type==='info'">
        <div class="panel-info">
          <img class="close" @touchstart='close' src="../../../assets/img/icon-close.png" />
          <input disabled id="userIpt" class="b_FS-16" type="text" ref='input' v-model="text" :placeholder="placeholder" maxlength="20">
          <label for="userIpt" v-show="btnName=='add'">
            <!--<img class="icon-edit" v-show="btnName=='add'" src="@/assets/img/icon-edit01.png" />            -->
         </label>
          <div class="bar"></div>
          <div @touchstart='close'>
            <div class="btn b_FS-16" @touchstart='operate(text)' ref="btn">
              <img v-if="btnName=='add'" src="@/assets/img/icon-add01.png" />
              <img v-if="btnName=='delete'" src="@/assets/img/icon-delete.png" />
              <div>{{btn}}</div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="type==='notice'" v-show="showNotice">
        <div class="panel-notice">
          <!--<img class="close" @touchstart='close' src="../../../assets/img/icon-close.png" />-->
          <div class="top">
            <div class="noticeIcon">
              <img class="noticeImg" :src="imgUrl" />
            </div>
            <p class="title b_FS-18">{{notice.title}}</p>
            <p class="task b_FS-14">{{notice.task}}</p>
          </div>
          <!--<div class="bottom  b_FS-12">
            <div class="charge"><span class="role">负责人:</span>{{notice.charge}}</div>
            <div class="partIn"><span class="role">参与人:</span>{{parts}}</div>
          </div>-->
        </div>
      </template>
    </div>
    <template v-if="type === 'message'">
      <div class="messageBox">
        <div class="box">
          <div class="icon">
            <img src='@/assets/img/image-notice01.png' />
          </div>
          <div class="message">{{message}}</div>
        </div>
      </div>
    </template>
  </transition>
</template>
<script>
  export default {
    data() {
      return {
        text: "",
        show: false,
        parts: "",
        btn: ""
      };
    },
    computed: {
      imgUrl() {
        //根据state判断那种图标,三种:pass,fail,warn
        if (this.notice.state === "pass") {
          return require("@/assets/img/image-pass.png");
        }
        if (this.notice.state === "fail") {
          return require("@/assets/img/image-not through.png");
        }
        if (this.notice.state === "warn") {
          return require("@/assets/img/image-notice.png");
        }
      }
    },

    methods: {
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
        this.btn =
          this.btnName === "add" ?
          "添加" :
          this.btnName === "delete" ? "删除" : "";
        if (this.btnName == 'delete') {
          this.$refs.btn.style['background-image'] = `linear-gradient(-180deg, #f1baaf 0%, #ea6e5d 100%)`
        }
      },
      fadeOut() {
        setTimeout(() => {
          document.querySelector(".messageBox").parentNode.removeChild(this.$el);
          this.show = false;
        }, 1500);
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
  input:disabled{
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
    left: 0;
    background: rgba(99, 99, 99, 0.8);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .box {
      width: 192*2px;
      height: 59*2px;
      background: #ffffff;
      box-shadow: 0 1px 5px 0 rgba(177, 177, 177, 0.6),
      inset 0 -1px 2px 0 rgba(135, 135, 135, 0.5);
      border-radius: 3px;
      display: flex;
      flex-wrap: nowrap;
      .icon {
        width: 50*2px;
        height: 100%;
        position: relative;
        img {
          position: absolute;
          width: 27*2px;
          height: 27*2px;
          top: 16*2px;
          right: 7*2px;
          bottom: 16*2px;
          left: 16*2px;
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
        color: #333;
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
    background: rgba(99, 99, 99, 0.8);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .panel-notice {
      min-width: 252*2px;
      min-height: 252*2px;
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
      position: relative;
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
        position: absolute;
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
