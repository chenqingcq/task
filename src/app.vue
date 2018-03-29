<template>
  <div id="app" :style = '[appContainerCss]' >
    <router-view class="wrapper" :style="padding"/>
    <!--底部 会展 logo - 会管家-展会应用商店-->
    <v-bottom-sign v-if="isShowBottomSign"></v-bottom-sign>
  </div>
</template>

<script>

  export default {
    name: "App",
    data() {
      return {
        title: "私人订制",
        imgUrl: require("./assets/img/icon-left-slip03.png"),
        hint: "返回",
        height: 44 ,
        // 是否显示底部 logo 介绍
        isShowBottomSign: false ,
        // app.vue 外层盒子样式
        appContainerCss:{
          backgroundColor : '#f4f4f4'
        }

      };
    },
    components: {

    },
    computed: {
      padding() {
        return {

        };
      }
    },
    methods: {
      test() {
        this.$dialog({
          type: "添加",
          operate() {
            console.log("delete");
          },
          placeholder:'添加新成员'
        });
      },
      back() {
        this.$router.go(-1);
      }
    },
    watch: {
      '$route'(to, from){
        var title = document.getElementsByTagName('title')[0]
        if(to.meta && to.meta.title) title.innerHTML = to.meta.title

        this.isShowBottomSign  = to.meta.isShowBottomSign ? true : false
        this.appContainerCss.backgroundColor = to.meta.isWhiteBg ? '#fff' : '#f4f4f4'
      }
    }
  };
</script>

<style lang='less'  >
  @import "./assets/css/theme/theme.less";
  @import "./assets/css/normalize.less";
  @import "./assets/css/common.less";
  .wrapper{
    min-height: 629*2px;
  }
</style>
