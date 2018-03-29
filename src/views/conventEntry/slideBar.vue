<style lang="less" scoped>
  .slide-wrap{
    position: fixed;
    /*switch 的z-index 是99*/
    z-index : 100;
    left: 0 ;
    top: 0;
    height: 100vh;
    width: 281*2px;
  }
</style>
<template>
    <div v-if="isShow">
      <div class="slide-wrap c_white-bg">

      </div>
    </div>
</template>
<script>
    export default{
        props: {
          isShow: {
            type: Boolean,
            default:false
          }
        },
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
