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
    width: 100%;
    height: 370*2px;
    background-image: linear-gradient(left top, #68c5fd, #568bfe);
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
          width: 100%;
          height: 100%;
          color: #999;
        }
      }
      .countdown {
        width: 100%;
        height: 22*2px;
        text-align: center;
        margin-top: 10*2px;
        font-size: 16px*2;
        font-family: PingFangSC-Medium;
        color: rgba(255, 115, 100, 1);
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
        <div class="qr_container" v-show="showQrcode" @touchstart='closeQRcode'>
             <div class="qrcode_container" >
             <div class="qrcode_panel">
                 <div class="tilte">面对面分发</div>
                 <div class="qrcodeImg_container">
                     <canvas class="img"></canvas>
                 </div>
                 <div class="countdown">{{expires}}s</div>
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
    }
  },
  data() {
    return {
      _projectId: "",
      _taskId: "",
      isInvalid: true,
      startCount: false,
      timer: null,
      expires: 60
    };
  },
  watch: {
    projectId(newVal) {
      console.log("qr" + newVal);
      this._projectId = newVal;
    },
    taskId(newVal) {
      this._taskId = newVal;
    },
    showQrcode(newVal) {
      if (newVal) {
        let self = this;
        Convent.sharefacetoface({
          id: this._projectId ? this._projectId : this._taskId,
          type: this._projectId ? 1 : 0
        })
          .then(res => {
            console.log(res.shareUrl);
            if (res.code == 1 && res.status == 200) {
              self.key = res.data.key;
              QRcode.toCanvas(
                document.querySelector("canvas.img"),
                res.data.shareUrl,
                function(error, url) {
                  if (!error) {
                    self.countDowner = setInterval(() => {
                      console.log("------------->>>");
                      let self = this;
                      self.expires -= 1;
                      if (self.expires <= 0 || !self.isInvalid) {
                        self.expires = "";
                        clearInterval(self.countDowner);
                        self.$emit("closeQrcode");
                      }
                      Convent.checkValid({
                        key: self.key
                      })
                        .then(res => {
                          console.log(res);
                          if (res.code == 1 && res.status == 200) {
                            self.isInvalid = res.data.isValid;
                          }
                          if (!self.isInvalid) {
                            self.$emit("closeQrcode");
                            self.$toast.show("二维码已失效请重新刷新！", 1000);
                          }
                        })
                        .catch(err => {
                          console.log(err);
                        });
                    }, 1000);
                  }
                }
              );
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    isInvalid(newVal) {
      if (!newVal) {
        clearInterval(this.timer);
        clearInterval(this.countDowner);
      }
    }
  },
  methods: {
    closeQRcode($ev) {
      if ($ev.target.className == "qr_container") {
        this.$emit("closeQrcode");
      }
    },
    count(_res) {}
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.countDowner);
  },
  mounted() {}
};
</script>

