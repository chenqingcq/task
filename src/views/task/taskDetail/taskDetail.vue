<style lang="less" scoped>
  .task-detail-slide {
    padding: 4*2px 10*2px 0 10*2px;
    .panel {
      height: 345*2px;
      padding: 10*2px;
      position: relative;
      .task-slide {
        margin-top: 17*2px
      }
      .task-slide-top {
        height: 57*2px;
        display: flex;
        .user-icon {
          width: 57*2px;
          height: 57*2px;
          background: gray;
          border-radius: 50%;
        }
        .right {
          flex: 1;
          margin-left: 15*2px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .show-task-detail {
            flex: 1;
            height: 100%;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .task-name {
              font-size: 14*2px;
              color: #666666;
              margin-top: 2*2px;
            }
            .task-detail {
              margin-top: 2*2px;
              font-size: 12px*2;
              color: #666666;
              letter-spacing: 0;
            }
            .progress {
              margin-top: 2*2px;
            }
          }
          .task-focus {
            width: 80*2px;
            height: 32*2px;
            .focus-star {
              height: 100%;
              width: calc(50%+1px);
              display: inline-block;
              &:nth-child(2) {
                float: right;
              }
              img {
                display: inline-block;
                height: 100%;
              }
            }
          }
        }
      }
      .task-progress {
        position: absolute;
        bottom: 0;
        right: 10*2px;
        height: 50*2px;
        bottom: 10*2px;
        left: 10*2px;
        justify-content: center;
        .task-desc {
          display: inline-block;
          width: 100%;
          text-align: center;
          font-family: PingFangSC-Light;
          font-size: 12px*2;
          color: #666666;
        }
        .detail-btn {
          width: 124*2px;
          height: 28*2px;
          text-align: center;
          line-height: 28*2px;
          background-image: linear-gradient(0deg, #0093FF 0%, #1DE0FD 100%);
          box-shadow: 0 2px 4px 0 rgba(23, 209, 254, 0.46);
          border-radius: 28*2px;
          color: #fff;
          font-family: PingFangSC-Regular;
          font-size: 14*2px;
          margin: 0 auto;
          margin-top: 9*2px;
        }
      }
    }
  }

  .task-slide {
    position: relative;
    .arrow {
      position: absolute;
      height: 21*2px;
      top: 50%;
      z-index: 0;
      transform: translateY(-50%);
      width: 100%;
      /*background: red;*/
      .left-arrow {
        float: left;
        height: 21*2px;
        width: 21*2px;
        img {
          display: inline-block;
          height: 100%;
          transform: rotate(-180deg);
        }
      }
      .right-arrow {
        float: right;
        height: 21*2px;
        width: 21*2px;
        img {
          display: inline-block;
          height: 100%;
          float: right;
        }
      }
    }
  }

</style>
<template>
  <div class="task-detail-container">
    <div class="task-detail-slide">
      <div class="panel c-1 c_white-bg">
        <div class="task-slide-top">
          <div class="user-icon"></div>
          <div class="right">
            <div class="show-task-detail">
              <div class="task-name">任务名名称</div>
              <div class="task-detail">任务详情</div>
              <div class="progress">
                <div class="b_status pending">进行中</div>
              </div>
            </div>
            <div class="task-focus">
              <div class="focus-star">
                <img src="@/assets/img/icon-set up.png" />
              </div>
              <div class="focus-star">
                <img class="focus-star" src="@/assets/img/icon-collection-highlight.png" />
              </div>
            </div>
          </div>
        </div>
        <!--轮播图-->
        <div class="task-slide">
          <div class="arrow">
            <div class="left-arrow" @touchstart='minusIndex'>
              <img src="@/assets/img/icon-right-slide03.png" />
            </div>
            <div class="right-arrow" @touchstart='addIndex '>
              <img src="@/assets/img/icon-right-slide03.png" />
            </div>
          </div>
          <slide :loop='loop' :autoPlay='autoPlay' :height='height' :width='width' @slideChange='changeIndex'>
            <div class="slider-item" v-for="(item,index) in items" :key="index">
              <img :src="item.imgUrl">
            </div>
          </slide>
        </div>
        <div class="task-progress">
          <span class="task-desc">展台基础已布置完毕</span>
          <div class="detail-btn">
            查看上传历史
          </div>
        </div>
      </div>
    </div>
    <div class="detail-progress">

    </div>
    <div class="project-party"></div>
    <comments></comments>
  </div>
</template>
<script>
  import comments from '@/views/comments/comments';
  import Slide from '@/common/base/slide/slide.vue';
  export default {
    data() {
      return {
        loop: true,
        currentIndex: 0,
        autoPlay: false,
        height: 382,
        width: 608,
        items: [{
            imgUrl: 'http://img.htmleaf.com/1712/201712211424.jpg'
          }, {
            imgUrl: 'http://pic.sc.chinaz.com/files/pic/webjs1/201705/jiaoben5070.jpg'
          },
          {
            imgUrl: 'http://img.htmleaf.com/1801/2018011440.jpg'
          },
          {
            imgUrl: 'http://img.htmleaf.com/1801/201801061437.jpg'
          },
          {
            imgUrl: 'http://img.htmleaf.com/1712/201712211424.jpg'
          },
          {
            imgUrl: 'http://pic.sc.chinaz.com/files/pic/webjs1/201705/jiaoben5070.jpg'
          }

        ]
      }
    },
    components: {
      comments,
      Slide
    },
    methods: {
      changeIndex(index) {
        console.log(index)
      },
      addIndex() {
        this.currentIndex = ++this.currentIndex;
      },
      minusIndex() {
        this.currentIndex = --this.currentIndex;
      }
    },
    watch: {
      currentIndex(newVal) {
        console.log(newVal)
      }
    }
  }

</script>
<style lang="less" scoped>
  .slider-item {
    width: 608px;
    height: 382px;
    float: left;
    img {
      display: block;
      height: 100%;
      width: 100%;
      box-shadow: 0 5px rgb(135, 135, 135);
    }
  }

</style>
