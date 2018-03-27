<template>
  <div id="app">
    <router-view class="wrapper b_FS-12" />
  </div>
</template>

<script>
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
        placeholder: "添加新成员"
      });
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less">
  @import "./assets/css/common.less";
  @import "./assets/css/normalize.less";
  @import "./assets/css/theme/theme.less";

</style>
