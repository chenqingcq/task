<template>
  <transition name="fade" v-if="show">
    <div class="container">
      <div class="panel">
        <img class="close" @touchstart='close' src="../../../assets/img/icon-close.png" />
        <input class="b_FS-16" type="text" ref='input' v-model="text" :placeholder="placeholder" maxlength="20">
        <div class="bar"></div>
        <div @touchstart='close'>
          <div class="btn b_FS-16" @touchstart='operate(text)'>{{btnName}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    data() {
      return {
        text: '',
        show:false
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
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(99, 99, 99,.8);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .panel {
      width: 290px*2;
      height: 133px*2;
      background-color: #fff;
      border-radius: 4px*2;
      position: relative;
      display: flex;
      justify-content: center;
      img {
        display: block;
        position: absolute;
        width: 15px*2;
        height: 15px*2;
        right: 8px*2;
        top: 8px*2;
      }
      input {
        display: inline-block;
        border: none;
        outline: none;
        -webkit-appearance: none;
        border-radius: 0;
        text-align: center;
        font-size: 16px*2;
        color: #999999;
        position: absolute;
        bottom: 79px*2;
        width: 96px*2;
      }
      .bar {
        position: absolute;
        left: 36px*2;
        right: 36px*2;
        bottom: 69px*2;
        height: 2px*2;
        background: #f4f4f4;
      }
      .btn {
        height: 44px*2;
        background-image: linear-gradient(-180deg, #86c0f8 0%, #4e8cee 100%);
        box-shadow: 0 2px*2 4px*2 0 rgba(0, 0, 0, 0.38);
        border-radius: 2px*2;
        position: absolute;
        bottom: 10px*2;
        left: 10px*2;
        right: 10px*2;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 16px*2;
      }
    }
  }

</style>
