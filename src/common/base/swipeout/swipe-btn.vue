<template>
  <button class="v-swipeout-button"
          :class="{'v-swipeout-button-primary': type === 'primary', 'v-swipeout-button-warn': type === 'warn', 'v-swipeout-button-default': type === 'default'}" :style="{width: `${width}px`, backgroundColor: backgroundColor}" @click="onButtonClick" type="button">
    <slot>{{text}}</slot>
  </button>
</template>
<style scoped lang="less">

    @button-warn-bg-color: #E64340;
    @button-primary-bg-color: #1AAD19;

    @swipeout-button-primary-bg-color:      @button-primary-bg-color;
    @swipeout-button-warn-bg-color: @button-warn-bg-color;
    @swipeout-button-default-bg-color: #c8c7cd;

    @swipeout-content-bg-color: #FFF;
    @swipeout-button-font-color: #FFF;
  .v-swipeout-button-box {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 0;
    text-align: right;
  }
  .v-swipeout-button-box-left {
    text-align: left;
  }
  .v-swipeout-button-box > div {
    height: 100%;
  }
  .v-swipeout-button {
    height: 100%;
    text-align: center;
    font-size: 28px;
    color: @swipeout-button-font-color;
    border: none;
    border-right: 1px solid #fff;
  }
  .v-swipeout-content {
    position: relative;
    background: @swipeout-content-bg-color;
  }
  .v-swipeout-content.v-swipeout-content-animated {
    transition: transform 0.2s;
  }
  .v-swipeout-button-primary {
    background-color: @swipeout-button-primary-bg-color;
  }
  .v-swipeout-button-warn {
    background-color: @swipeout-button-warn-bg-color;
  }
  .v-swipeout-button-default {
    background-color: @swipeout-button-default-bg-color;
  }
</style>
<script>
  export default {
    name: 'v-swipe-btn',
    props: {
      text: String,
      backgroundColor: String,
      type: {
        type: String,
        default: 'default'
      },
      width: {
        type: Number,
        default: 80
      }
    },
    methods: {
      onButtonClick () {
        // 选择之后关闭父组件的右边 nav
        if (this.$parent.$options._componentTag === 'v-swipeout') {
          this.$parent.onItemClick(this.text)
          setTimeout(()=>{
            this.$parent.render()
          },1000)
        }
        this.$emit('click')
      }
    }
  }
</script>
