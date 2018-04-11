<template>
  <div class="share-container" v-show="showShare">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'share',
    props: {
      showShare: {
        default: false,
        type: Boolean
      }
    },
    data() {
      return {

      }
    },
    watch: {
      showShare(newVal, oldVal) {
        if (newVal) {
          document.querySelector('ul.share-items').classList.add('active');
          return;
        } else {
          document.querySelector('ul.share-items').classList.add('kill');
          return;
        }
      }
    },
    methods: {
      init() {}
    },
    mounted() {
      this.$nextTick(() => {
        this.init()
      })
    }
  }

</script>
<style lang="less" scoped>
  /*.fade-enter-active {
    animation: scale .5s ease;
  }

  .fade-leave-active {
    animation: scale .5s ease reverse;
  }*/

  .active {
    animation: scale .5s ease;
  }

  .kill {
    animation: scale .5s ease;
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
    top: 40*2px;
    right: 7*2px;
    z-index: 1111;
    ul {
      width: 120*2px;
      height: 82px*2;
      display: flex;
      flex-direction: column;
      position: relative;
      .arrow {
        width: 0;
        height: 0;
        position: absolute;
        top: -14*2px;
        right: 2*2px;
        z-index: 11111;
        border: 8*2px solid rgba(54, 55, 58, 1);
        border-top: 8*2px solid rgba(54, 55, 58, 0);
        border-right: 8*2px solid rgba(54, 55, 58, 0);
        border-left: 8*2px solid rgba(54, 55, 58, 0);
        margin-right: 8*2px;
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
        border-bottom: 3*2px solid #2A2A2A;
      }
    }
  }

</style>
