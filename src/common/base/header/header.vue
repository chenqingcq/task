<template>
    <div class="container" :style="Style">
       <slot></slot>
    </div>
</template>
<script>
export default {
  name: "titleBar",
  data() {
    return {};
  },
  props: {
    width: {
      type: [String, Number],
      default: "100%"
    },
    height: {
      type: [String, Number],
      default: 44
    }
  },
  computed: {
    Style() {
      return {
        width: this.width,
        height: this.height + "px"
      };
    }
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
.container {
  background: #36373a;
  position: fixed;
  z-index: 9999;
  top: 0;
  font-family: PingFangSC-Regular;
  color: #fff;
  .back-container {
    height: 100%;
    margin-left: 10px;
    display: flex;
    align-items: center;
  }
}
</style>
