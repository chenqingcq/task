<template>
  <div id="app">
    <headerbar :title="title" :height="height" ref="headbar">
        <div class="panel">
            <div class="back-container" @touchstart='back' @click="back">
                <div class=back-arrow>
                  <img :src="imgUrl" alt="back">
                </div>
                <div class="back">{{hint}}</div>
            </div>
            <div class="title" @touchstart='test' > {{title}}</div>
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
      title: "任务约定",
      imgUrl: require("./assets/img/icon-left slip03.png"), //测试
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
        placeholder: "添加新成员"
      });
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang='less' scoped>
.panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  .back-container {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      display: block;
      width: 9.6px;
      height: 17.5px;
      vertical-align: middle;
      margin-top: 4px;
    }
    .back-arrow {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .back {
      display: inline-block;
      margin-left: 4.4px;
      font-size: 16px;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .title {
    font-size: 18px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .more {
    width: 21px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 14px;
    span {
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #fff;
      &:nth-child(2),
      &:nth-child(3) {
        margin-left: 3px;
      }
    }
  }
}
</style>
