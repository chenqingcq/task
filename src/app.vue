<template>
  <div  :style = '[appContainerCss]'  >
    <keep-alive exclude="conventEntry">
      <transition name="fade">
          <router-view class="wrapper Router" />
      </transition>
    </keep-alive>
    <!--底部 会展 logo - 会管家-展会应用商店-->
    <v-bottom-sign v-if="isShowBottomSign"></v-bottom-sign>
  </div>
</template>

<script type="text/babel">
import { User } from "@/services";

import userModel from "@/common/js/model/userModel";
export default {
  name: "App",
  data() {
    return {
      // 是否显示底部 logo 介绍
      isShowBottomSign: false,
      // app.vue 外层盒子样式
      appContainerCss: {
        backgroundColor: "#f4f4f4",
        minHeight: "100%"
      },
      transitionName: "slide-right" // 默认动态路由变化为slide-right
    };
  },
  created() {
    this.getToken();
    const loading = document.getElementById('loading-panel')
    loading.style.display = 'none'
  },
  mounted() {
  },
  methods: {
    getToken() {
      // 在url 上面截取token
      if (location.hash.indexOf("token=") > -1) {
        const token = location.hash.split("token=")[1].replace("token=", "");
        // set token
        this.$store.commit("setToken", token);
      }
      User.getUserInfo({}).then(res => {
        console.log(res);
        this.$store.commit("user", res.data);
      });
    }
  },
  watch: {
    $route(to, from) {
      var title = document.getElementsByTagName("title")[0];
      if (to.meta && to.meta.title) title.innerHTML = to.meta.title;

      this.isShowBottomSign = to.meta.isShowBottomSign ? true : false;
      this.appContainerCss.backgroundColor = to.meta.isWhiteBg
        ? "#fff"
        : "#f4f4f4";

      let isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
      // 把所有页面 回到顶部
      window.scrollTo(0,0);
    }
  }
};
</script>

<style lang='less'  >
@import "./assets/css/theme/theme.less";
@import "./assets/css/normalize.less";
@import "./assets/css/animate.less";
@import "./assets/css/common.less";
#app {
  min-height: 100% !important;
}
.wrapper {
  min-height: 629*2px;
}

/*路由过渡效果*/
/*.Router {*/
/*!*position: absolute;*!*/
/*width: 100%;*/
/*transition: all .8s ease;*/
/*}*/

/*.slide-left-enter,*/
/*.slide-right-leave-active {*/
/*position: absolute;*/
/*opacity: 0;*/
/*-webkit-transform: translate3d(100%, 0,0);*/
/*transform: translate3d(100%, 0,0);*/
/*}*/

/*.slide-left-leave-active,*/
/*.slide-right-enter {*/
/*position: absolute;*/
/*opacity: 0;*/
/*-webkit-transform: translate3d(-100%, 0,0);*/
/*transform: translate3d(-100% 0,0);*/
/*}*/
/*.slide-left-enter-to,.slide-right-enter-to{*/
/*position: relative!important;*/
/*}*/

.Router {
  margin: 0 auto;
  /*background-color: #f0f0f0;*/
  width: 100%;
  height: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
