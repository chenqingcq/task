<template>
  <div class="slide_box">
    <div class="task-slide">
      <div class="arrow">
        <div class="left-arrow" @touchstart='minusIndex'>
          <img src="@/assets/img/icon-right-slide03.png" />
        </div>
        <div class="right-arrow" @touchstart='addIndex '>
          <img src="@/assets/img/icon-right-slide03.png" />
        </div>
      </div>
    </div>
    <div class="slide" ref="slider">
      <div class="slide-group" ref='slideGroup'>
        <slot>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll";
  export default {
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 1000
      }
    },
    data() {
      return {
        currentPageIndex: 1
      };
    },
    mounted() {
      setTimeout(() => {
        this.setSliderWidth(); //设置轮播图的宽度
        this.init();
        window.addEventListener("resize", () => {
          if (!this.scroll) {
            return;
          }
          this._setSliderWidth(true);
          this.scroll.refresh();
        });
      }, 20);
    },
    methods: {
      addIndex() {
        this.scroll && this.scroll.goToPage(++this.currentPageIndex, 0, 0);
        if (this.currentPageIndex == this.children.length - 1) {
          this.scroll.goToPage(1, 0, 0);
          setTimeout(() => {
            this.currentPageIndex = 1;
          }, 20);
        }
      },
      minusIndex() {
        this.scroll && this.scroll.goToPage(--this.currentPageIndex, 0, 0);
        if (this.currentPageIndex == 0) {
          this.scroll.goToPage(this.children.length - 2, 0, 0);
          setTimeout(() => {
            this.currentPageIndex = this.children.length - 2;
          }, 20);
        }
      },
      setSliderWidth(isResize) {
        this.children = this.$refs.slideGroup.children;
        this.dots = new Array(this.children.length);
        let width = 0;
        let sliderWidth = this.$refs.slider.clientWidth;
        for (let i = 0; i < this.children.length; i++) {
          width += sliderWidth;
        }
        // if (this.loop && !isResize) {
        //   width += 2 * sliderWidth;
        // }
        this.$refs.slideGroup.style.width = width + "px";
      },
      refresh() {
        this.scroll && this.scroll.refresh();
      },
      init() {
        var vm = this;
        // 实例化scroll
        this.scroll = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false, //关闭或者打开惯性运动的执行
          snap: true, //隔断（翻页）
          snapLoop: this.loop, //无限滚动
          snapThreshold: 0,
          snapSpeed: 400 //滑动的时间
        });
        this.scroll.goToPage(this.currentPageIndex, 0, 0);
        // setTimeout(() => {
        //   this.isShow = true;
        //   this.refresh();
        // }, 20);
        console.log(this.scroll.getCurrentPage().pageX, this.currentPageIndex);

        this.scroll.on("scrollEnd", () => {
          // -1实际上是最后一张图 最后一张图实际是第一张图 重复两张图
          let pageIndex = this.scroll.getCurrentPage().pageX;
          this.currentPageIndex = pageIndex;
          console.log("before" + this.currentPageIndex);
          if (this.currentPageIndex == 0) {
            this.scroll.goToPage(this.children.length - 2, 0, 0);
            // this.currentPageIndex = this.children.length - 2;
          }
          if (this.currentPageIndex == this.children.length - 1) {
            this.scroll.goToPage(1, 0, 0);
            this.currentPageIndex = 1;
          }
          console.log("next" + this.currentPageIndex);
        });
        this.scroll.on("beforeScrollStart", () => {
          if (vm.autoPlay) {
            clearTimeout(vm.timer);
          }
        });
      },
      play() {
        let pageIndex = this.currentPageIndex + 1;
        if (this.loop) {
          pageIndex += 1;
        }
        var vm = this;
        this.timer = setTimeout(() => {
          vm.scroll.goToPage(pageIndex, 0, 400); //跳转到的页数 初始化页数 滑动总时间
        }, vm.interval);
      }
    }
  };

</script>
<style lang='less' scoped>
  .slide_box {
    position: relative;
    margin-top: 17*2px;
  }

  .task-slide {
    width: 100%;
    height: 100%;
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

  .slide {
    overflow: hidden;
    margin: 0 auto;
    width: 608px;
    height: 382px;
    -webkit-box-shadow: 0 1*2px 5*2px 0 rgba(177, 177, 177, 0.60), inset 0 -1*2px 2*2px 0 rgba(135, 135, 135, 0.50);
    .slide-group {
      height: 100%;
    }
  }

</style>
