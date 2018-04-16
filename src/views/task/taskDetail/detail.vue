<style scoped lang='less'>
.taskDetailContainer {
  width: 100%;
  height: 100%;
  font-size: 10*2px;
  font-family: PingFangSC-Regular;
  color: rgba(102, 102, 102, 1);
  font-weight: 400;
  line-height: 14*2px;
  word-spacing: 5px;
  word-break: break-all;
  padding: 7*2px;
  line-height:14px*2;
  position: relative;
  z-index: 111111;
  .arrow {
    position: absolute;
    right: 7*2px;
    bottom: 7*2px;
    width: 10px*2;
    height:10*2px;
    img {
      position: absolute;
      width: 100%;
    }
  }
}
.towardsUp{
  transform: rotate(-180deg);
}
</style>

<template>
  <div class="taskDetailContainer">
    {{taskDesc}}
    <div class=" towardsUp arrow " @touchstart='close'>
      <img src="@/assets/img/04.png" />
    </div>
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
      this.$emit('close')
    }
  }
};
</script>
