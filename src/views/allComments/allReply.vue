<template>
    <div class="_comments-container">
         <div class="b-LR-10 comment-container">
            <div class="panel b-P-10 " style="background:#fff">
            <div class="comments-container" ref="scroll" :listenScroll='listenScroll' @scrollEnd="refresh" v-if="members.length>1">
                <ul class="comment-panel">
                <li v-for="(item,index) in members" :key="index" class="lisItem">
                    <div class="left">
                    <!--测试-->
                    <div class="icon">
                        <img :src="item.imgUrl" alt="icon" class='iconImg'>
                    </div>
                    </div>
                    <div class="right">
                    <!--测试-->
                    <div class="head">
                        <div class="role b_FS-12 ">{{item.name}}({{item.role}})</div>
                        <div class="time-panel"><span>{{item.date}}</span><span>{{item.time}}</span></div>
                    </div>
                    <div class="comments-item">{{item.comments}}</div>
                    <div class="comments-callback">
                        <span @touchstart='_look_all_reply'>回复6</span>
                        <div>
                        <span ref="goods">赞50</span>
                        </div>
                    </div>
                    </div>
                    <i class="footbar"></i>
                </li>
                <li class="lisItem _all-comments">
                     <div class="comment-content">已显示全部回复</div>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <div class="user-input">
          <input  type="text" placeholder="赶快评论吧~" class="comment_input" v-model="comments">
          <img @touchstart='sendComment' class="send-comment" src="@/assets/img/iocn.png" />
      </div>
    </div>
</template>
<script>
//import scroll from "@/common/base/scroll/scroll";
export default {
  name: "allComments",
  data() {
    return {
      listenScroll: true,
      state: false,
      showUserInput: false,
      currentState: {},
      comments: "",
      members: [
        {
          //审批留言
          name: "张三",
          role: "发布者",
          date: "x年x月x日",
          time: "2018.10.25",
          comments: `关注“失控奔驰车”事件的最新进展。上周，央视新闻频道《法治在线》栏目连续两天播出了针对这一事件调查。`,
          imgUrl:
            "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
        },
        {
          name: "李四",
          role: "执行者",
          date: "x年x月x日",
          time: "2018.10.25",
          comments: "会管家",
          imgUrl:
            "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
        },
        {
          name: "王五",
          role: "观察者",
          date: "x年x月x日",
          time: "2018.10.25",
          comments: "会管家",
          imgUrl:
            "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
        },
        {
          name: "小六",
          role: "观察者",
          date: "x年x月x日",
          time: "2018.10.25",
          comments: "会管家",
          imgUrl:
            "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
        },
        {
          name: "小六",
          role: "观察者",
          date: "x年x月x日",
          time: "2018.10.25",
          comments: "会管家",
          imgUrl:
            "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
        },
        {
          name: "小六",
          role: "观察者",
          date: "x年x月x日",
          time: "2018.10.25",
          comments: "会管家",
          imgUrl:
            "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
        },
        {
          name: "小六",
          role: "观察者",
          date: "x年x月x日",
          time: "2018.10.25",
          comments: "会管家",
          imgUrl:
            "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
        },
        {
          name: "小六",
          role: "观察者",
          date: "x年x月x日",
          time: "2018.10.25",
          comments: "会管家",
          imgUrl:
            "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
        },
        {
          name: "小eee",
          role: "观察者",
          date: "x年x月x日",
          time: "2018.10.25",
          comments: "会管家",
          imgUrl:
            "https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b"
        }
      ]
    };
  },
  props: {},
  components: {
//    scroll
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
  methods: {
    refresh() {
      console.log("下拉加载");
    },
    _look_all_reply() {
      this.$router.push({
        path: "/comment",
        query: {
          taskId: 0,
          userId: 0,
          commentsClass: 2
        }
      });
    },
    sendComment() {
      console.log(this.comments);
      this.$dialog.message({
        message: "评论成功!",
        icon: "pass"
      });
    },
    add_praise(index) {
      console.log(index, this.$refs.goods[index]);
      if (!this.$refs.goods[index].getAttribute("class")) {
        this.$refs.goods[index].classList.add("active");
        this.$refs.goods[
          index
        ].parentNode.children[0].src = require("@/assets/img/iocn-good2.png");
        console.log(this.$refs.goods[index].parentNode.children[0]);
      } else {
        this.$refs.goods[index].classList.remove("active");
        this.$refs.goods[
          index
        ].parentNode.children[0].src = require("@/assets/img/iocn-good.png");
      }
    }
  },
  created() {
    console.log("comment");
  }
};
</script>
<style lang="less" scoped>
._all-comments {
  height: 44*2px !important;
  color: #999;
  font-size: 8*2px;
  width: 100%;
  .comment-content {
    text-indent: 22*2px;
    width: 100%;
    height: 100%;
    line-height: 88px;
  }
}
._comments-container {
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  .comment-container {
    position: relative;
    top: 20px;
  }
  .comment-panel {
    overflow: hidden;
  }
  .user-input {
    width: 100%;
    height: 54*2px;
    padding: 10*2px 20*2px;
    // overflow: hidden;
    position: absolute;
    bottom: 0;
    z-index: 9;
    background: #fff;
    .comment_input {
      display: inline-block;
      height: 34*2px;
      width: 100%;
      padding-left: 18*2px;
      padding-right: 35*2px;
      background: rgba(244, 244, 244, 1);
      border-radius: 19px*2;
      color: rgba(186, 186, 186, 1);
    }
    .send-comment {
      display: inline-block;
      height: 26*2px;
      width: 26*2px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 28*2px;
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
    height: auto;
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
    max-height: 667*2px-60px*2;
    background: rgb(244, 244, 244);
    /*72*3*2*/
    overflow: hidden;
    border-top-right-radius: 10*2px;
    .lisItem {
      width: 100%;
      height: auto;
      display: flex;
      position: relative;
      background: #fff;
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
          color:rgba(153,153,153,1);
          line-height: 17px*2;
          margin-top: 8px;
          margin-bottom: 20px;
          z-index: -1;
          > span {
           min-width: 40*2px;
            height: 50px;
            display: inline-block;
            line-height: 40px;
          }
          div {
            display: inline-block;
            margin-left: 18*2px;
            > span {
              font-size: 12px*2;
              font-family: PingFangSC-Regular;
              display: inline-block;
              height: 20*2px;
              line-height: 40px;
              margin-left: 2px;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
}
</style>
