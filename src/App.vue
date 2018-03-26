<template>
  <div id="app">
    <headerbar :title="title" :height="height" ref="headbar">
        <div class="panel">
            <div class="back-container" @touchstart='back' @click="back">
                <img :src="imgUrl" alt="back">
                <div class="back">{{hint}}</div>
            </div>
            <div class="title" @touchstart='test' @click='test'> {{title}}</div>
            <div class="more"><span></span><span></span><span></span></div>
        </div>
    </headerbar>
    <router-view class="wrapper" :style="padding"/>
  </div>
</template>

<script>
import Headerbar from "./common/base/header/header.vue";
export default {
  name: "App",
  data() {
    return {
      title: "私人订制",
      imgUrl: require("./assets/img/icon-left slip03.png"),
      hint: "返回",
      height: 44
    };
  },
  components: {
    Headerbar
  },
  computed: {
    padding() {
      return {
        ["padding-top"]: this.height + "px"
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
  }
};
</script>

<style lang='less' scoped>
.wrapper {
  padding-top: 44px;
}
</style>
