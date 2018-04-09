<style lang="less" scoped>
  // 编写当前页面的样式
  .switch{
    width: 30.4*2px;
    position: relative;
    height: 16.5*2px;
    display: inline-block;
  //border: 2px solid #e1e1e1;
    border-radius: 100px;
    transition: background-color 0.1s, border 0.1s;
  }
  .switch_main{
    width: 100%;
    height: 100%;
    display: inline-block;
    .week-days-content{
      position: absolute;
      left: 0;
      width: 100%;
      height: 16.5*2px;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      >span:first-child{
        padding-left: 3*2px;
      }
      >span:last-child{
        padding-right: 3*2px;
      }
    }
  }
  .turnRight{
    transition: transform cubic-bezier(0.4, 0.4, 0.25, 1.35) 0.28s;
    transform:translateX(15*2px);
  }
  .turnLeft{
    transition: transform cubic-bezier(0.4, 0.4, 0.25, 1.35) 0.28s;
    transform:translateX(-6px);
  }
  .switch_btn{
    height: 18*2px;
    position: absolute;
    z-index: 1;
    top: -3px;
    background: #fff;
    width: 18*2px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    box-shadow: 2px 4px 6px 0 rgba(87,87,87,0.50), inset 0 2px 6px 0 rgba(187,187,187,0.50);
    border-radius: 50%;
  }
  .turnSuccess{
    /*background-color: #979797;*/
    background-image: linear-gradient(-90deg, #0CC5FD 0%, #68BFFF 100%);
    border-radius: 16.5*2px;
    height: 16.5*2px;
    transition-property: background-color;
    transition-duration: 0.2s;
    transition-timing-function: border;
  }
  .turnFail{
    background-image: linear-gradient(-90deg, #0CC5FD 0%, #68BFFF 100%);
    /*background-color: #448AFF;*/
    border-radius: 16.5*2px;
    height: 16.5*2px;
    transition-property: background-color;
    transition-duration: 0.2s;
    transition-timing-function: border;
  }

</style>
<template>
  <div class="switch">
    <div class="switch_main" @click="changeStatus" :class="{ 'turnFail' : isMonth, 'turnSuccess': !isMonth}">
      <div class="week-days-content">
        <span class="b_d-inline-block text-center b_FS-10 c_white">月</span><span class="  text-center b_FS-10 c_white">周</span>
      </div>

      <div class="switch_btn" @transitionend="changeEnd"
           :class="{ 'turnLeft' : !isMonth, 'turnRight': isMonth}"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'vSwitch',
    props: {
      status: {
        type: Boolean
      }
    },
    data () {
      return {
        isTransitionEnd: true,
        isMonth: this.status
      }
    },
    watch: {
      status (val) {
        if (this.isTransitionEnd) {
          this.isMonth = val//新增result的watch，监听变更并同步到myResult上
        }
      }
    },
    methods: {
      changeEnd () {
        this.isTransitionEnd = true
      },
      changeStatus (event) {
        if (this.isTransitionEnd) {
          this.isTransitionEnd = false
          this.isMonth = !this.isMonth
          this.$emit('getStatus', this.isMonth)
        }
      }
    }
  }
</script>
