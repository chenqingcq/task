<style scoped lang='less'>
.taskDetailContainer {
  width: 100%;
  height: auto;
  font-size: 10*2px;
  font-family: PingFangSC-Regular;
  color: rgba(102, 102, 102, 1);
  font-weight: 400;
  line-height: 14*2px;
  word-spacing: 5px;
  word-break: break-all;
  padding: 7*2px 9*2px 9*2px 7*2px;
  line-height: 14px*2;
  position: relative;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20*2px rgba(177, 177, 177, 0.6);
  z-index: 11111;
  img {
    position: absolute;
    height: 10*2px;
    right: 8px;
    bottom: -8px;
    box-sizing: content-box;
    padding: 10px;
    transform: rotate(-90deg)
  }
}

.towardsUp {
  transform: rotate(-180deg);
}
</style>

<template>
  <div class="taskDetailContainer" @touchstart='close'>
    {{taskDesc}}
      <img  src="@/assets/img/icon-right-slide03.png" >
  </div>
</template>
<script>
export default {
  name: "detail",
  props: {
    taskDesc: {
      default: "",
      type: String
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
