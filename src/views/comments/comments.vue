<template>
  <div class="b-LR-10 comment-container">
    <div class="panel b-MT-10 " style="background:#fff">
      <div class="b-LR-10 b-T-5 between " ref="banner">
        <p class="middle b_FS-14"><span class="dot success"></span><span class="b-L-4 c_6 b_FS-14">审批留言</span></p>
        <div class=" b_FS-10 c_7 commenthint">
          评论<img class="comments-icon" :src='commentImgUrl' />
        </div>
      </div>
      <div class="comments-container_" v-if="members.length<=0">
        <i></i>
        <span>暂无留言,赶快评论吧~</span>
        <img src="@/assets/img/cry.png" />        
        <i></i>
      </div>
      <scroll class="comments-container" ref="scroll" :listenScroll='listenScroll' @scroll='scrolling' @scrollEnd='scrollEnd' v-if="members.length>1">
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
            </div>
            <i class="footbar"></i>
          </li>
        </ul>
      </scroll>
    </div>
  </div>
</template>
<script>
  import scroll from '@/common/base/scroll/scroll'
  export default {
    name: 'comments',
    data() {
      return {
        listenScroll: true
      }
    },
    props: {
      members: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      scroll
    },
    computed: {
      commentImgUrl() {
        return require('@/assets/img/icon-comment.png')
      }
    },
    methods: {
      scrolling() {
        console.log(' listenScroll');
        this.$refs.banner.classList.add('banner');
        this.$refs.scroll.refresh()
      },
      scrollEnd() {
        console.log('scrollEnd');
        this.$refs.banner.classList.remove('banner')
      }
    }
  }

</script>
<style lang="less" scoped>
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
    span{
      font-size: 24px;
    }
    img{
      display: inline-block;
      height: 40px;
    }
  }

  .comments-container {
    min-height: 280px;
    max-height: 576px;
    overflow: auto;
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
        background: rgba(151, 151, 151, .21);
      }
      .left {
        width: 64*2px;
        height: auto;
        display: flex;
        margin-top: 20*2px;
        justify-content: center;
        /*align-items: center;*/
        .icon {
          background: #D8D8D8;
          display: inline-block;
          width: 43px*2;
          height: 43px*2;
          border-radius: 50%;
          display: flex;
          border: 1*2px solid #14C9FE;
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
        min-height: 72*2px;
        .head {
          margin-top: 19*2px;
          height: 17*2px;
          .role {
            color: #07A5FF;
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
      }
    }
  }

</style>
