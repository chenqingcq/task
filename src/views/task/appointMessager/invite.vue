<style lang="less" scoped>
  .invite-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(99, 99, 99, .8);
  }

</style>
<template>
  <div class="invite-container" v-show="showInvite"> 邀约</div>
</template>
<script>
  export default {
    props: {
      showInvite: {
        type: Boolean,
        default: false
      }
    }
  }

</script>
