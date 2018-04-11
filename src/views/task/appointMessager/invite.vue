<style lang="less" scoped>
  .invite-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: rgba(99, 99, 99, 0.6);
    .invite-panel {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      .invite-more,
      .invite-fast {
        font-size: 16*2px;
        font-family: PingFangSC-Regular;
        color: #6D8DC0;
      }
      .invite-more {
        color: #fff;
        position: absolute;
        left: 55*2px;
        top: 125*2px;
        transform: rotate(-2deg);
      }
      .invite-fast {
        position: absolute;
        left: 40*2px;
        top: 215*2px;
      }
      .invite-img {
        position: absolute;
        width: 260*2px;
        top: 40*2px;
        .close-img {
          position: absolute;
          left: -8*2px;
          top: 100*2px;
          width: 25*2px;
          z-index: 1;
        }
        img {
          display: inline-block;
          width: 100%;
        }
      }
    }
  }

  .active {
    animation: scale 1s ease;
  }

  .active_ {
    animation: scale 1s ease reverse;
  }

  @keyframes scale {
    0% {
      transform: scale(1.5, 1.5);
      opacity: .5;
    }
    50% {
      transform: scale(.8, .8);
      opacity: .8;
    }

    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }

</style>
<template>
  <transition >
    <div class="invite-container" v-show="show">
      <div class="invite-panel">
        <div class="invite-img" ref="invite">
          <img @touchstart='close' class="close-img" src="@/assets/img/icon-close01.png" />
          <img src="@/assets/img/image-popup.png" />
          <div class="invite-more">点击邀请更多好友</div>
          <div class="invite-fast">还不是好友赶快邀请</div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    data() {
      return {
        show: false
      };
    },
    props: {
      showInvite: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close() {
          this.show = !this.show;
      },
      init() {
        this.$refs.invite.classList.add('active')
      },
    },
    created() {
      this.show = this.showInvite;
    },
    mounted() {
      this.init()
    },
    beforeDestroy(){
      this.timer = null
    }
  };

</script>
