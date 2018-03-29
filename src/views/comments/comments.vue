i<template>
  <div class="b-LR-10 comment-container">
    <div class="panel b-MT-10 " style="background:#fff">
      <div class="b-LR-10 b-T-5 between">
        <p class="middle b_FS-14"><span class="dot success"></span><span class="b-L-4 c_6 b_FS-14">审批留言</span></p>
        <div class=" b_FS-10 c_7 commenthint">
          评论<img class="comments-icon" :src='commentImgUrl' />
        </div>
      </div>
      <scroll class="comments-container" :height='height' >
        <ul class="comment-panel" v-if="items.length>1">
          <li v-for="(item,index) in items" :key="index" class="lisItem">
            <div class="left" >
              <!--测试-->
              <div class="icon">
                <img :src="item.imgUrl" alt="icon" class='iconImg'>
              </div>
            </div>
            <div class="right">
              <!--测试-->
              <div class="head">
                <div class="role b_FS-12 " >{{item.name}}({{item.role}})</div>
                <div class="time-panel" ><span>{{item.date}}</span><span>{{item.time}}</span></div>
              </div>
              <div class="comments-item" >{{item.comments}}</div>
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
        items: [{
            name: '张三',
            role: '发布者',
            date: 'x年x月x日',
            time: '2018.10.25',
            comments: '会管家app',
            imgUrl: require('@/assets/img/icon-nominee.png')
          }, {
            name: '李四',
            role: '执行者',
            date: 'x年x月x日',
            time: '2018.10.25',
            comments: '会管家app',
            imgUrl: require('@/assets/img/icon-nominee.png')
          }, {
            name: '王五',
            role: '观察者',
            date: 'x年x月x日',
            time: '2018.10.25',
            comments: '会管家app',
            imgUrl: require('@/assets/img/icon-nominee.png')
          },
          {
            name: '小六',
            role: '观察者',
            date: 'x年x月x日',
            time: '2018.10.25',
            comments: '会管家app',
            imgUrl: require('@/assets/img/icon-nominee.png')
          }
        ],
        height: 140 * 2 + "px"
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
      
    }
  }

</script>
<style lang="less" scoped>


  .commenthint {
    display: flex;
    align-items: center;
    .comments-icon {
      display: inline-block;
      width: 12*2px;
      height: 12px*2;
      margin-left: 4px;
    }
  }

  .comments-container {
    overflow: hidden;
    .lisItem {
      width: 100%;
      height: 70*2px;
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
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
            font-size: 16px;
            min-width: 94*2px;
            display: inline-block;
            span {
              margin-left: 5px;
            }
          }
        }
        .comments-item {
          color: #666;
          font-size: 20px;
        }
      }
    }
  }

</style>
