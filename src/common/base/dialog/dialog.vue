<template>
  <transition name="fade" v-if="show">
    <div class="container">
      <div class="panel">
        <img class="close" @touchstart='close' src="../../../assets/img/icon-close.png" />
        <input class="b_FS-16" type="text" ref='input' v-model="text" :placeholder="placeholder" maxlength="20">
        <div class="bar"></div>
        <div @touchstart='close'>
          <div class="btn b_FS-16" @touchstart='operate(text)'>{{type}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    data() {
      return {
        text: ''
      }
    },
    methods: {
      close() {
        this.show = false;
      }
    },
  };

</script>
<style lang='less' scoped>
  .container {
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.44;
    background: #000;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .panel {
      width: 290px;
      height: 133px;
      background-color: #fff;
      border-radius: 4px;
      position: relative;
      display: flex;
      justify-content: center;
      img {
        display: block;
        position: absolute;
        width: 15px;
        height: 15px;
        right: 8px;
        top: 8px;
      }
      input {
        display: inline-block;
        border: none;
        outline: none;
        -webkit-appearance: none;
        border-radius: 0;
        text-align: center;
        font-size: 16px;
        color: #999999;
        position: absolute;
        bottom: 79px;
        width: 96px;
      }
      .bar {
        position: absolute;
        left: 36px;
        right: 36px;
        bottom: 69px;
        height: 2px;
        background: #f4f4f4;
      }
      .btn {
        height: 44px;
        background-image: linear-gradient(-180deg, #86c0f8 0%, #4e8cee 100%);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
        border-radius: 2px;
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 16px;
      }
    }
  }

</style>
