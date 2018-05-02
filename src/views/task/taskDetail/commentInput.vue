<template>
  <div class="allComments-container">
      <div class="comment-panel">
          <div class="close" @touchstart='close'>
              <img src="@/assets/img/icon-close.png" />
          </div>
          <textarea ref="ipt" autofocus=true  @keyup.enter='sendComments' name="userIpt" id="userIpt" placeholder="说点什么吧..." v-model.trim="usreInput" maxlength="200">
              
          </textarea>
          <div @touchstart='sendComments' class="comment-btn">评论</div>
      </div>
  </div>
</template>
<script>
import { Convent } from "@/services";

export default {
  data() {
    return {
      usreInput: ""
    };
  },
  props: {
    taskId: {
      type: String,
      default: ""
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    sendComments() {
      let self = this;
      if (this.usreInput.length && this.usreInput.length <= 200) {
        Convent.taskComments({
          taskId: self.taskId,
          message: self.usreInput
        })
          .then(res => {
            console.log(res, "----------->>>");
            if (res.code == 1 && res.status == 200) {
              self.$toast.show('评论成功！',1000);
              self.usreInput = '';
              //重新刷新列表
              self.$emit("close");
            } else if (res.code == 603) {
              self.$dialog.message({
                message: "任务未开启请勿评论!"
              });
              self.$emit("close");
            }
          })
          .catch(err => {
            console.log(err);
            if(err.code == 603){
              self.$toast.show("任务未开启请勿评论!",1000);
              self.usreInput = ''
            }
            self.$emit("close");
          });
      } else if (this.usreInput.length > 200) {
        debugger;
        this.$toast.show("评论字数不得超过200字!", 1500);
      }
    }
  },
  mounted(){
    
  }
};
</script>
<style scoped lang='less'>
.allComments-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  .comment-panel {
    width: 290px*2;
    height: 247px*2;
    background: rgba(244, 244, 244, 1);
    border-radius: 4px*2;
    padding: 14px 20px 20px 20px;
    position: relative;
    .close {
      height: 28px;
      margin-bottom: 34px;
      img {
        display: inline-block;
        width: 28px;
        height: 28px;
        float: right;
      }
    }
    textarea {
      display: block;
      width: 257*2px;
      height: 142*2px;
      background: #fff;
      border-radius: 4px *2;
      margin: 0 auto;
      font-size: 14px*2;
      font-family: PingFangSC-Regular;
      color: rgba(153, 153, 153, 1);
      line-height: 22*2px;
      text-indent: 20px;
    }
    .comment-btn {
      position: absolute;
      left: 10*2px;
      right: 10*2px;
      height: 44px*2;
      bottom: 20px;
      background: linear-gradient(
        180deg,
        rgba(134, 192, 248, 1),
        rgba(78, 140, 238, 1)
      );
      box-shadow: 0px 2px*2 4px 0px rgba(0, 0, 0, 0.38);
      border-radius: 2px*2;
      font-size: 16px*2;
      font-family: PingFangSC-Regular;
      color: rgba(255, 255, 255, 1);
      line-height: 44px*2;
      text-align: center;
    }
  }
}
</style>

