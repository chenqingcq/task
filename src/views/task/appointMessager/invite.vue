<style lang="less" scoped>
.invite-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.4);
  .invite-panel {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    .invite-more,
    .invite-fast {
      font-size: 16*2px;
      font-family: PingFangSC-Regular;
      color: #6d8dc0;
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
      left: 130px;
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
  animation: rotateInDownLeft 0.5s linear;
}

.active_ {
  animation: rotateInDownLeft 1s ease;
}

@keyframes rotateInDownLeft {
  0% {
    -webkit-transform: rotate3d(0, 0, 1, -180deg);
    transform: scale(0.5, 0.5) rotate3d(0, 0, 1, -180deg);
    opacity: 0;
  }
  25% {
    -webkit-transform: rotate3d(0, 0, 1, -135deg);
    transform: scale(0.6, 0.6) rotate3d(0, 0, 1, -135deg);
    opacity: 0.5;
  }
  50% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: scale(1, 1) rotate3d(0, 0, 1, 0deg);
    opacity: 1;
  }
  75% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: scale(1, 1.2) rotate3d(0, 0, 1, 0deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: scale(1, 1) translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes scale {
  0% {
    transform: scale(1.5, 1.5);
    opacity: 0.5;
  }
  50% {
    transform: scale(0.6, 0.6);
    opacity: 0.8;
  }

  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}

@keyframes _scale {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
}

.rotate {
  animation: _scale 1s linear;
}
.inviteImg {
  pointer-events: none;
}
</style>
<template>
  <transition name="rotate">
    <div class="invite-container" v-show="showInvite">
      <div class="invite-panel">
        <div class="invite-img" ref="invite" @click='close'>
          <img @click='close' ref="close" class="close-img " src="@/assets/img/icon-close01.png" />
          <img class="inviteImg" src="@/assets/img/image-popup.png" />
          <div ref="invitemore" class="invite-more">点击邀请更多好友</div>
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
      this.$emit("closeInvite");
      this.$refs.invite.classList.add("active_");
    },
    init() {
      this.$refs.invite.classList.add("active");
      this.$refs.invitemore.classList.add("_scale");
    }
  },
  created() {},
  mounted() {
    if (this.showInvite) {
      this.init();
    }
  },
  beforeDestroy() {
    this.timer = null;
  }
};
</script>
