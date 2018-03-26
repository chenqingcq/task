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
      .back {
        display: inline-block;
        margin-left: 4.4px;
        font-size: 16px;
        height: 100%;
        display: flex;
        align-items: center;
        vertical-align: middle;
      }
    }
    .title {
      font-size: 18px;
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
}
</style>
