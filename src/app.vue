<template>
  <div  :style = '[appContainerCss]'  >
    <!--<keep-alive>-->
      <transition :name="transitionName">
        <router-view class="wrapper Router" />
     </transition>
    <!--</keep-alive>-->
    <!--底部 会展 logo - 会管家-展会应用商店-->
    <v-bottom-sign v-if="isShowBottomSign"></v-bottom-sign>
  </div>
</template>

<script>

  export default {
    name: "App",
    data() {
      return {
        // 是否显示底部 logo 介绍
        isShowBottomSign: false ,
        // app.vue 外层盒子样式
        appContainerCss:{
          backgroundColor : '#f4f4f4',
          minHeight: '100%'
        },

        transitionName: 'slide-right'  // 默认动态路由变化为slide-right


      };
    },
    watch: {
      '$route'(to, from){
        var title = document.getElementsByTagName('title')[0]
        if(to.meta && to.meta.title) title.innerHTML = to.meta.title

        this.isShowBottomSign  = to.meta.isShowBottomSign ? true : false
        this.appContainerCss.backgroundColor = to.meta.isWhiteBg ? '#fff' : '#f4f4f4'

        let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
        if(isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false


      }
    }
  };
</script>

<style lang='less'  >
  @import "./assets/css/theme/theme.less";
  @import "./assets/css/normalize.less";
  @import "./assets/css/animate.less";
  @import "./assets/css/common.less";
  #app{
    min-height: 100%!important;
  }
  .wrapper{
    min-height: 629*2px;
  }


  .Router {
    /*position: absolute;*/
    width: 100%;
    transition: all .8s ease;
    /*top: 40px;*/
  }

  .slide-left-enter,
  .slide-right-leave-active {
    position: absolute;
    opacity: 0;
    -webkit-transform: translate3d(100%, 0,0);
    transform: translate3d(100%, 0,0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    position: absolute;
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0,0);
    transform: translate3d(-100% 0,0);
  }
  .slide-left-enter-to,.slide-right-enter-to{
    position: relative!important;
  }



</style>
