<template>
  <transition name="fade" >
    <div class="container" v-show="show">
      <div class="panel" >
          <img src="../../assets/img/loading.gif" alt="loading"> 
          <span>{{title}}</span>       
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      title: ""
    };
  }
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
  background-color: rgba(55, 55, 55, 0.4);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .panel {
    width: 100px;
    height: 100px;
    background-color: rgba(55, 55, 55, 1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      display: inline-block;
      width: 50%;
      height: 50%;
    }
    span {
      width: 100%;
      display: block;
      position: absolute;
      color: #fff;
      text-align: center;
      bottom: 5px;
    }
  }
}
</style>

