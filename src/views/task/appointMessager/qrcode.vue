<style lang='less' scoped>
.qr_container {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.4);
  .qrcode_container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 370*2px;
    z-index: 99999;
    background: linear-gradient(left top, #68c5fd, #568bfe);
    background: -webkit-linear-gradient(left top, #68c5fd, #568bfe);
    background: -moz-linear-gradient(left top, #68c5fd, #568bfe);
    background: -o-linear-gradient(left top, #68c5fd, #568bfe);
    background: -ms-linear-gradient(left top, #68c5fd, #568bfe);
    display: flex;
    justify-content: center;
    align-items: center;
    .qrcode_panel {
      width: 321*2px;
      height: 316*2px;
      border-radius: 16*2px;
      background-color: #fff;
      .tilte {
        font-size: 20px*2;
        font-family: PingFangSC-Medium;
        color: rgba(51, 51, 51, 1);
        line-height: 28px*2;
        width: 100%;
        text-align: center;
        margin-top: 18*2px;
      }
      .qrcodeImg_container {
        width: 233*2px;
        height: 220*2px;
        margin: 0 auto;
        margin-top: 10*2px;
        display: flex;
        justify-content: center;
        align-items: center;
        .img {
          display: inline-block;
          width: 233px*2 !important;
          height: 220px*2 !important;
          color: #999;
        }
      }
      .countdown {
        width: 100%;
        height: 22*2px;
        text-align: center;
        margin-top: 10*2px;
        font-size: 14px*2;
        font-family: PingFangSC-Medium;
        color: #999;
        line-height: 2*22px;
      }
    }
  }
}
@keyframes showQrcode {
  from {
    bottom: -370*2px;
  }
  to {
    bottom: 0;
  }
}
.show-enter-active {
  animation: 0.5s showQrcode ease;
}
.show-leave-active {
  animation: 0.5s showQrcode ease reverse;
}
</style>

<template>
    <transition name="show">
        <div class="qr_container" v-show="showQrcode" @click='close'>
             <div class="qrcode_container" >
             <div class="qrcode_panel">
                 <div class="tilte">面对面分发</div>
                 <div class="qrcodeImg_container">
                     <canvas ref="canvas" class="img"></canvas>
                 </div>
                 <div class="countdown">有效期为60s</div>
             </div>
         </div>
        </div>
    </transition>
</template>
<script>
import { Convent } from "@/services";
import QRcode from "qrcode";
export default {
  props: {
    showQrcode: {
      type: Boolean,
      default: false
    },
    projectId: {
      type: String,
      default: ""
    },
    taskId: {
      type: String,
      default: ""
    },
    expires: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      showQrcode_: true,
      _projectId: "",
      _taskId: "",
      isInvalid: true,
      starter: false,
      startCount: false,
      countDowner: null,
      expire: 60,
      context: "",
      CreateWebSocket: "",
      webSocket: null
    };
  },
  watch: {
    showQrcode(newVal, oldVal) {
      if (newVal) {
        this.face();
      } else {
        this.webSocket && this.webSocket.close();
      }
    }
  },
  methods: {
    face() {
      let self = this;
      Convent.sharefacetoface({
        id: self.taskId ? self.taskId : self.projectId,
        type: self.taskId ? 0 : 1
      })
        .then(res => {
          console.log(res.data.shareUrl);
          if (res.code == 1 && res.status == 200) {
            QRcode.toCanvas(self.$refs.canvas, res.data.shareUrl, function(
              error,
              url
            ) {
              // if (!error) {
              /* 封装 WebSocket 实例化的方法  */
              var CreateWebSocket = (function() {
                return function(urlValue) {
                  if (window.WebSocket) return new WebSocket(urlValue);
                  if (window.MozWebSocket) return new MozWebSocket(urlValue);
                  return false;
                };
              })();
              console.log(res.data.key);
              /* 实例化 WebSocket 连接对象, 地址为 ws 协议 */
              self.webSocket = CreateWebSocket(
                `ws://dis.ccnfgame.com/taskapi/v1/socket/check/${res.data.key}`
                // `ws://${window.location.host}/taskapi/v1/socket/check${res.data.key}`
              );
              /* 关闭时 */
              self.webSocket.onclose = function() {
                console.log("关闭连接");
              };
              /* 错误时 */
              self.webSocket.onerror = function() {
                console.log("连接错误");
              };
              /* 接受信息 */

              self.webSocket.onmessage = function(msg) {
                console.log("服务端说:" + msg.data);
                if (msg.data === "failure") {
                  // self.$router.push({
                  //   path:'addTaskSetting',
                  //   [self.taskId?'taskId':undefined]:self.taskId,
                  //   projectId:self.projectIda
                  // })
                  // self.$router.push({
                  //   path:'/taskDetail',
                  //   query:{
                  //     taskId:self.taskId,
                  //     projectId:self.projectId
                  //   }
                  // })
                  self.$emit("updateMembers");
                  // self.$router.push({
                  //   path: "/conventEntry",
                  //   query: {
                  //     [self.taskId ? "taskId" : undefined]: self.taskId,
                  //     projectId: self.projectId
                  //   }
                  // });
                  self.$emit("closeQrcode");
                  // self.showQrcode_ = false;
                } else {
                  console.log("ok");
                }
              };
              //60s后刷新
              clearTimeout(self.countDowner);
              self.countDowner = setTimeout(() => {
                self.face();
                if (self.webSocket.readyState === 1) {
                  console.log("------------key-----------------");
                  /* 接收到服务端的消息时 */
                } else {
                  console.log("not ready");
                }
                // self.face();
              }, 60000);
              // self.countDown(window.location.host, self.key);
              // }
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    close($ev) {
      if ($ev.target.className == "qr_container") {
        this.$emit("closeQrcode");
        clearTimeout(this.countDowner);
        this.countDowner = null;
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.countDowner);
    this.countDowner = null;
  },
  mounted() {}
};
</script>

