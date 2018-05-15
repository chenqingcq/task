<template>
  <div class="share-container" v-if="showShare">
    <slot name="share"></slot>
  </div>
</template>
<script>
export default {
  name: "share",
  props: {
    showShare: {
      default: false,
      type: Boolean
    }
  }
};
</script>
<style lang="less" scoped>
/*.fade-enter-active {
    animation: scale .5s ease;
  }

  .fade-leave-active {
    animation: scale .5s ease reverse;
  }*/

.active {
  animation: scale 0.5s ease;
}

.kill {
  animation: scale 0.5s ease;
}

@keyframes scale {
  from {
    transform: scale(1.3, 1.3);
    opacity: 0;
  }
  to {
    transform: scale(1, 1);
    opacity: 1;
  }
}

@keyframes kill {
  from {
    transform: scale(1.3, 1.3);
    opacity: 1;
  }
  to {
    transform: scale(1, 1);
    opacity: 0;
  }
}

.share-container {
  position: absolute;
  top: 50*2px;
  right: 7*2px;
  z-index: 1111;
  ul {
    width: 120*2px;
    height: 82px*2;
    display: flex;
    flex-direction: column;
    position: relative;
    #arrow {
      width: 0;
      height: 0;
      position: absolute;
      right: 16px;
      top: -28px;
      z-index: 9;
      border-width: 16px;
      border-style: solid;
      border-color: transparent transparent rgba(54, 55, 58, 1) transparent;
    }
    li {
      flex: 1;
      font-size: 14px*2;
      font-family: PingFangSC-Regular;
      color: rgba(255, 255, 255, 1);
      background: rgba(54, 55, 58, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        display: inline-block;
        height: 14*2px;
        margin-right: 7*2px;
      }
    }
    li:first-of-type {
      border-bottom: 3*2px solid #2a2a2a;
    }
  }
}
</style>
