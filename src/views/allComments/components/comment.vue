<template>
    <div class="_comments-container"
         :style="{minHeight: isIOS() ? '110vh' : '100vh'  }"
         v-infinite-scroll="getCommentsList" infinite-scroll-disabled="hasMore" infinite-scroll-distance="60"
         ref="scroll" >
         <div class="b-LR-10 comment-container">
            <div class="panel b-P-10 " style="background:#fff;overflow-x: hidden;">
              <!--scroll-->
            <div class="comments-container"
                  >
                <ul class="comment-panel">
                <li v-for="(item,index) in members" :key="index" class="lisItem">
                    <div class="left">
                    <!--测试-->
                    <div class="icon">
                        <img :src="item.headImage" alt="icon" class='iconImg'>
                    </div>
                    </div>
                    <div class="right">
                    <!--测试-->
                    <div class="head">
                        <div class="role b_FS-12 ">{{item.nickname}}({{ role2Str(item.role)  }})</div>
                        <!--{{ item.createTime }}-->
                        <div class="time-panel"><span>{{dateFormatInChinese(item.createTime)}}</span></div>
                    </div>
                    <div class="comments-item">{{item.message}}</div>
                    <div class="comments-callback" v-if="level != 'second'" >
                        <span @click='_look_all_reply(item)'>{{ item.replyNum }}条回复</span>
                        <div @click="doLike(item)" v-if="item.isThumbs">
                          <!--<img @click='add_praise(index)'   :src="imgUrl"/>-->
                          <img  src="../../../assets/img/iocn-good2.png" alt="">
                          <span class="active" >{{ item.thumbsNum }}</span>
                        </div>
                        <div @click="doLike(item)" v-else>
                          <img src="../../../assets/img/iocn-good.png" alt="">
                          <span>{{ item.thumbsNum }}</span>
                        </div>

                    </div>
                    </div>
                    <i class="footbar"></i>
                </li>
                <li class="lisItem _all-comments" >
                     <div class="comment-content">{{ noDataText }}</div>
                </li>
                </ul>
              <!--scroll-->
            </div>
            </div>
        </div>
      <div v-if="isFocus"
           class="user-input-mask"
           @touchmove.prevent
           @scroll.prevent
           @touchstart.prevent="blurInput">
      </div>
      <div class="user-input" :class="[ !isFocus? 'is-fixed' : 'no-fixed']">
        <input  type="text" :placeholder="placeholder" class="comment_input" v-model="comments"
                ref="text"
                @focus = 'setPageToBottom'
                maxlength="200"
                @blur="clearIpt, blurInput"
        >
        <img @click.prevent="addComments" class="send-comment" src="@/assets/img/iocn.png" />
      </div>
    </div>
</template>
<script type="text/babel">
//import scroll from "@/common/base/scroll/scroll";
import  boardfix from '@/mixins/keyboardfix'
// services
import { Convent } from '@/services'

import { dateFormatInChinese } from '@/utils/transform'
export default {
  name: "allComments",
  mixins : [boardfix],
  data() {
    return {

      isOnstar : false ,
      listenScroll: true,
      state: false,
      showUserInput: false,
      currentState: {},
      comments: "",
      page: {
        pageNum : 1 ,
        pageSize : 10 ,
        hasMore : true,
      },
      placeholder: '赶快评论吧~' ,
      members: [] ,
      current_commentId : 0 ,
      noDataText : '上拉加载更多'
    }
  },
  props: {
    level :{
      type : String ,
      default: 'first'
    }
  },
  components: {
  },
  mounted(){

    if( this.level == 'second' ){
      const current_commentId = this.$route.query.commentPid
      this.current_commentId = current_commentId
      const nickName = this.$route.query.nickName
      this.placeholder = `回复${ nickName }`
    }

  },
  computed: {
    hasMore(){
      return !this.page.hasMore
    },
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
    dateFormatInChinese : dateFormatInChinese ,
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
    // 评论列表
    getCommentsList( ){
      const { pageNum, pageSize ,hasMore } = this.page
      if( !hasMore ){
        return
      }
      this.page.hasMore = false
      this.noDataText = '加载中'
      const taskId = this.$route.query.taskId
      let submitData = {
        taskId ,
        pageNum ,
        pageSize
      }
      if( this.level == 'second' ){
        // 二级评论 传commentPid
        submitData.commentPid = this.current_commentId
      }
      Convent.getTaskComments(submitData).then(res=>{
        let oldList = this.members , newList = []

        if(res.data.length){
          newList = oldList.concat( res.data )
          this.members = newList
        }
        else{
          this.page.hasMore = false
          this.noDataText = '已显示全部留言'
          return
        }
        this.page.hasMore = res.page.isLoaded
        if( this.page.hasMore ){
          this.page.pageNum++
          this.noDataText = '上拉加载更多'
        }
        else{
          this.noDataText = '已显示全部留言'
        }
      })
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
    // commentPid 二级评论
    addComments(  ){
      let commentPid = null
      if( this.level == 'second' ) commentPid = this.current_commentId
      console.log(commentPid)
      const taskId = this.$route.query.taskId
      const message	 = this.comments
      Convent.taskComments({
        commentPid ,
        taskId ,
        message
      })
      .then(res=>{
        this.successComment()
        this.page = {
          pageNum : 1 ,
            pageSize : 10 ,
            hasMore : true,

        }
        this.noDataText = '上拉加载更多'
        this.members = []
        this.getCommentsList()
        // 重新加载列表
      }).catch(res=>{
        this.$toast.show(res.msg, 2000)
      })
    },
    _look_all_reply(item) {
      this.$router.push({
        path: "/allReply",
        query:{
          commentPid : item.commentId ,
          taskId: this.$route.query.taskId ,//测
          nickName : item.nickname
        }
      });
    },
    successComment() {
      this.comments = '';
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
._all-comments{
  height: 44*2px !important;
  color: #999;
  font-size: 24px;
  width: 100%;
  .comment-content{
    text-indent: 22*2px;
    width:100%;
    height: 100%;
    line-height: 88px;
  }
}
._comments-container {
  width: 100%;
  min-height: 110vh;
  overflow-y: auto;
  position: relative;
  /*top: 0;*/
  .comment-container {
    position: relative;
    /*top: 20px;*/
    margin-bottom: 120px;
    padding-top: 20px;
  }
  .comment-panel {
    /*overflow: hidden;*/
    background: #07a5ff;
  }
  .user-input-mask {
    position: fixed ;
    top: 0 ;
    background-color: transparent;
    width: 100vw;
    height: 100vh ;
    z-index : 8;
  }
  .user-input {
    &.is-fixed{
       bottom: 0;
       position: fixed;
     }
    &.no-fixed{
       position: absolute;
       bottom: 0px;
    }
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
    /*min-height: 280px;*/
    /*max-height: 667*2px-60px*3;*/
    background: rgb(244, 244, 244);
    /*72*3*2*/

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
        min-height: 80*2px;
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
}
</style>
