<template>
  <div class="allComments-container">
      <div class="comment-panel">
          <div class="close" @touchstart='close'>
              <img src="@/assets/img/icon-close.png" />
          </div>
          <textarea name="userIpt" id="userIpt" placeholder="说点什么吧..." v-model.trim="usreInput" >
              
          </textarea>
          <div @touchstart='sendComments' class="comment-btn">评论</div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usreInput: ""
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    sendComments() {
      if (!!this.usreInput) {
        console.log(this.usreInput);
        //提示上传成功刷新页面
        this.setComment()
          .then(() => {
            this.$dialog.message({
              message: "评论成功!",
              icon: "pass"
            });
          })
          .catch(err => {
            console.log(err);
          });
        this.usreInput = "";
      }
    },
    setComment() {
      let me = this;
      return new Promise((resolve, reject) => {
        //上传评论
        if (true) {
          me.$emit("close"); //关闭评论框
          resolve();
        }
      });
    }
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

