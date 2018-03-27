<template>
  <div class="switch">
    <div class="switch_main" @click="changeStatus" :class="{ 'turnFail' : selectStatus, 'turnSuccess': !selectStatus}">
      <div class="switch_btn" @transitionend="changeEnd"
           :class="{ 'turnLeft' : !selectStatus, 'turnRight': selectStatus}"></div>
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
        selectStatus: this.status
      }
    },
    watch: {
      status (val) {
        if (this.isTransitionEnd) {
          this.selectStatus = val//新增result的watch，监听变更并同步到myResult上
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
          this.selectStatus = !this.selectStatus
          this.$emit('getStatus', this.selectStatus)
        }
      }
    }
  }
</script>
<style type="stylesheet/less" lang="less" scoped>
  @import './index.less';
</style>
