<template>
  <div class="allComments-container">
      <div class="comment-panel">
          
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped lang='less'>
.allComments-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  .comment-panel {
    width: 290px*2;
    height: 247px*2;
    background: rgba(244, 244, 244, 1);
    border-radius: 4px*2;
  }
}
</style>

