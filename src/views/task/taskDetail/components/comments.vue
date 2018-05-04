<template>
  <div class="b-LR-10 comment-container">
    <div class="panel b-MT-10 " style="background:#fff">
      <div class="b-LR-10 b-T-5 between " ref="banner">
        <p class="middle b_FS-14"><span class="dot success"></span><span class="b-L-4 c_6 b_FS-14">审批留言</span></p>
        <div class=" b_FS-10 c_7 commenthint" @click='link_to_allComments'>
          查看全部<img class="comments-icon" :src='commentImgUrl' />
        </div>
      </div>
      <div class="comments-container_" v-if="members.length<=0">
        <i></i>
        <span>暂无评论,点击抢沙发</span>
        <i></i>
      </div>
      <div class="comments-container" v-if="members.length">
        <ul class="comment-panel">
          <li v-for="(item,index) in members" :key="index" class="lisItem" :commentPid ='item.commentPid' :commentId ="item.commentId" ref='item'>
            <div class="left">
              <!--测试-->
              <div class="icon">
                <img :src="item.headImage" class='iconImg'>
              </div>
            </div>
            <div class="right">
              <!--测试-->
              <div class="head">
                <div class="role b_FS-12 ">{{item.nickname}}({{ role2Str( item.role ) }})</div>
                <div class="time-panel"><span>{{defineDate(item.createTime)}}</span><span>{{defineTime(item.createTime)}}</span></div>
              </div>
              <div class="comments-item">{{item.message}}</div>
              <div class="comments-callback">
                <span @click='_link_to_secondary_comments( item )'>{{item.replyNum }}条回复 </span>
                <div @click="doLike(item)" v-if="item.isThumbs">
                  <!--<img @touchstart='add_praise(index)'   :src="imgUrl"/>-->
                  <img  src="@/assets/img/iocn-good2.png" alt="">
                  <span class="active" >{{ item.thumbsNum }}</span>
                </div>
                <div @click="doLike(item)" v-else>
                  <img src="@/assets/img/iocn-good.png" alt="">
                  <span>{{ item.thumbsNum }}</span>
                </div>
              </div>
            </div>
            <i class="footbar"></i>
          </li>
          <li class="all-comment">
            <div class="comment-content">已显示全部留言</div>
          </li>
        </ul>
      </div>
      <div class="user-input" @click="userInput">
          <input  type="text" placeholder="赶快评论吧~" class="comment_input" disabled>
          <img class="icon-input" src="@/assets/img/iocn-pen.png" />
      </div>
    </div>
      <user-input v-show="showUserInput" @close='closeUserInput' :taskId='taskId'></user-input>
  </div>
</template>
<script>
import scroll from "@/common/base/scroll/scroll";
import userInput from "@/views/task/taskDetail/commentInput.vue";
import { Convent } from "@/services";
export default {
  name: "comments",
  data() {
    return {
      isOnstar : false , // 是否点赞时提交

      listenScroll: true,
      state: false,
      showUserInput: false,
      currentState: {},
      isThumbs: 0,
      flag: false
    };
  },
  props: {
    members: {
      type: Array,
      default() {
        return [];
      }
    },
    status: {
      type: [String,Number] ,
      default : ""
    },
    taskId: {
      type: String,
      default: ""
    }
  },
  components: {
    scroll,
    userInput
  },
  computed: {
    commentImgUrl() {
      return require("@/assets/img/icon-comment.png");
    },
    imgUrl(currentState) {
      if (currentState) {
        return require("@/assets/img/iocn-good.png");
      } else {
        return require("@/assets/img/iocn-good2.png");
      }
    }
  },
  watch: {},
  methods: {
    // 权限转中文字符串
    role2Str( role ){
      let str = ''
      switch (role) {
        case 0 : str = '访客' ; break ;
        case 1 : str = '执行者' ; break ;
        case 2 : str = '发布者' ; break ;
      }
      return str
    },
    defineDate(date) {
      date = parseInt(date);
      return (
        new Date(date).getFullYear() +
        "年" +
        (new Date(date).getMonth() + 1) +
        "月" +
        new Date(date).getDate() +
        "日"
      );
    },
    defineTime(date) {
      date = parseInt(date);
      return (
        new Date(date).getHours() +
        ":" +
        new Date(date).getMinutes() +
        ":" +
        new Date(date).getSeconds()
      );
    },
    _link_to_secondary_comments( item ) {
//      if( item.replyNum == 0 ){
//        this.$toast.show('暂无评论')
//        return
//      }
      this.$router.push({
        path: "/allReply",
        query: {
          taskId: this.taskId ,
          commentPid: item.commentId
        }
      })
    },
    link_to_allComments() {
      const status = this.status
      if( status == 0 ){
        this.$toast.show('任务未开始')
        return
      }
      else if( status == 2 ){
        this.$toast.show('任务已关闭')
        return
      }

      if( this.members.length == 0 ){
        this.$toast.show('暂无评论', 1000)
        return
      }
      this.$router.push("comment?taskId=" + this.taskId );
    },
    closeUserInput() {
      this.showUserInput = false;
      //this.$emit("close");
    },
    userInput() {
      const status = this.status
      if( status == 0 ){
        this.$toast.show('任务未开始')
      }
      else if( status == 2 ){
        this.$toast.show('任务已关闭')
      }
      else{
        this.showUserInput = true;
      }

    },



    // 点赞或者取消点赞
    doLike( item, index ){
      if( this.isOnstar  ){
        this.$toast.show('1秒后才能再次点击', 2000)
        return
      }
      else{
        this.isOnstar = true
      }
      const isThumbs = !item.isThumbs ? 1 : 0
      const commentId = item.commentId

      Convent.thumbs({
        isThumbs ,commentId
      }).then(res=>{
          item.isThumbs = isThumbs
        setTimeout(()=>{
          this.isOnstar = false
        }, 500)

        if( isThumbs == 1 ){
          this.$toast.show('点赞成功')
          item.thumbsNum++
        }
        else{
          this.$toast.show('取消点赞')
          item.thumbsNum--
        }
      })
    },



    add_praise(e, isThumbs, commentId) {
      let thumbs = e.target.getAttribute("isthumbs");
      console.log(thumbs);
      if (thumbs == 0) {
        e.target.setAttribute("isthumbs", 1);
        e.target.src = require("@/assets/img/iocn-good2.png");
        e.target.parentNode.classList.add("active");
        //点赞
        this.thumb(commentId, 1, true);
      } else {
        e.target.setAttribute("isthumbs", 0);
        e.target.src = require("@/assets/img/iocn-good.png");
        e.target.parentNode.classList.remove("active");
        this.thumb(commentId, 0, false);
      }
    },

    thumb(commentId, isThumbs, mode) {
      Convent.thumbs(commentId, {
        commentId: commentId,
        isThumbs: parseInt(isThumbs)
      })
        .then(res => {
          console.log(res);
          if ((res.code = 1 && res.status == 200)) {
            if (mode) {
              this.$toast.show("点赞成功!");
            } else {
              this.$toast.show("取消点赞!");
            }
            //刷新评论列表
            //评论成功
            this.$emit("close");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    scrolling() {
      console.log(" listenScroll");
      this.$refs.banner.classList.add("banner");
      // this.$refs.scroll.refresh()
    },
    scrollEnd() {
      console.log("scrollEnd");
      this.$refs.banner.classList.remove("banner");
    }
  },
  mounted() {
    console.log(this.members, this.taskId, "-----一级评论组件------");
  }
};
</script>
<style lang="less" scoped>
.banner {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.all-comment {
  color: #999;
  height: 40*2px;
  text-align: left;
  .comment-content {
    margin-left: 22*2px;
    line-height: 80px;
    height: 100%;
    width: 100%;
  }
}
.zoom-enter-active {
  animation: zoom 0.5s ease;
}
.zooom-leave-active {
  animation: zoom 0.5s ease reverse;
}
@keyframes zoom {
  from {
    transform: scale(0.9, 0.9);
  }
  50% {
    transform: scale(1.1, 1.1);
  }
  to {
    transform: scale(1, 1);
  }
}
.user-input {
  width: 100%;
  height: 44*2px+18px;
  padding: 0 15*2px 14*2px 14*2px;
  position: relative;
  z-index: 9;
  .comment_input {
    display: inline-block;
    height: 30*2px;
    width: 100%;
    margin-top: 18px;
    padding-left: 16*2px+19*2px;
    background: rgba(244, 244, 244, 1);
    border-radius: 19px*2;
    color: rgba(186, 186, 186, 1);
  }
  .icon-input {
    display: inline-block;
    height: 15*2px;
    position: absolute;
    top: 18px+15px;
    left: 31*2px;
    z-index: 9;
  }
}
.active {
  color: rgba(255, 0, 0, 1);
}
.commenthint {
  display: flex;
  align-items: center;
  ont-family: PingFangSC-Medium;
  font-size: 10*2px;
  color: #999999;
  .comments-icon {
    display: inline-block;
    width: 12*2px;
    /*height: 12px*2;*/
    margin-left: 4px;
  }
}

.comments-container_ {
  height: 50px*2px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  span {
    font-size: 24px;
  }
  img {
    display: inline-block;
    height: 40px;
  }
}

.comments-container {
  min-height: 280px;
  /*max-height: 465px;*/
  /*72*3*2*/
  /*overflow: hidden;*/
  .lisItem {
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    .footbar {
      display: inline-block;
      position: absolute;
      left: 22*2px;
      right: 21*2px;
      bottom: 0;
      height: 2px;
      background: rgba(151, 151, 151, 0.21);
    }
    .left {
      width: 64*2px;
      height: auto;
      display: flex;
      margin-top: 20*2px;
      justify-content: center;
      /*align-items: center;*/
      .icon {
        background: #d8d8d8;
        display: inline-block;
        width: 43px*2;
        height: 43px*2;
        border-radius: 50%;
        display: flex;
        border: 1*2px solid #14c9fe;
        justify-content: center;
        align-items: center;
      }
      img {
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .right {
      flex: 1;
      min-height: 100*2px;
      .head {
        margin-top: 19*2px;
        height: 17*2px;
        .role {
          color: #07a5ff;
          display: flex;
          font-size: 24px;
          align-items: center;
          display: inline-block;
        }
        .time-panel {
          height: 100%;
          color: #666;
          float: right;
          font-size: 15px;
          min-width: 94*2px;
          display: inline-block;
          margin-right: 10*2px;
          font-family: PingFangSC-Regular;
          span {
            margin-left: 5px;
          }
        }
      }
      .comments-item {
        font-family: PingFangSC-Medium;
        word-break: break-all;
        text-align: left;
        color: #666;
        font-size: 24px;
        height: auto;
        padding: 0 10*2px 10px 0;
        line-height: 34px;
      }
      .comments-callback {
        height: 50px;
        font-size: 12px*2;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 17px*2;
        margin-top: 8px;
        margin-bottom: 20px;
        z-index: -1;
        > span {
          width: 150px;
          height: 50px;
          background: rgba(244, 244, 244, 1);
          border-radius: 13px*2;
          display: inline-block;
          text-align: center;
          line-height: 50px;
        }
        div {
          display: inline-block;
          float: right;
          margin-right: 20px;
          > img {
            display: inline-block;
            height: 25*2px;
            padding: 12px 0 13px 0;
            vertical-align: middle;
          }
          > span {
            font-size: 12px*2;
            font-family: PingFangSC-Regular;
            display: inline-block;
            height: 25*2px;
            line-height: 50px;
            margin-left: 2px;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>
