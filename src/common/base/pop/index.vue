<style lang="less" scoped>
    @import "../../../assets/css/animate.less";
    .mask{
      position: fixed;
      top: 0 ;
      left: 0 ;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,.6);
      z-index : 99;
    }
    .pop-wrap{
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      -webkit-overflow-scrolling: touch;
      outline: 0;
      /*switch 的z-index 是99*/
      z-index: 100 ;
      .pop-main{
        position: absolute;
        z-index : 100;
        &.left{
           left: 0 ;
            top: 0 ;
         }
        &.bottom{
           bottom:  0;
           width: 100%;
         }
        &.top{
           top: 0 ;
           width: 100%;
         }
        &.right{
           right: 0 ;
         }
        &.middle{
           left: 50% ;
           top: 50% ;
           transform: translate(-50%,-50%);
         }
      }

    }


  .left-enter-active {
    .animate-slideInLeft ;
  }
  .left-leave-to{
    .animate-slideOutLeft ;
  }

  .top-enter-active {
    .animate-slideInTop ;
  }
  .top-leave-to{
    .animate-slideOutTop ;
  }

  .down-enter-active {
    .animate-slideInDown ;
  }
  .down-leave-to{
    .animate-slideOutDown ;
  }

  .right-enter-active {
    .animate-slideInRight ;
  }
  .right-leave-to{
    .animate-slideOutRight ;
  }

  /*.middle-enter-active {*/
    /*.animate-slideInTop ;*/
  /*}*/
  /*.middle-leave-to{*/
    /*.animate-slideOutDown ;*/
  /*}*/

  .mask-enter-active {
    .animate-fadeIn ;
  }
  .mask-leave-to{
    .animate-fadeOut ;
  }

</style>
<style>
  .noscroll {
    position: fixed!important
  }
</style>
<template>
    <div>
      <transition name="mask" >
        <div v-if="isShow" class="mask" @touchstart="isShow = false" ></div>
      </transition>
      <transition :name = 'animateName' >
        <div v-if="isShow" class="pop-wrap" @touchmove.self.prevent @click.self="close" >
          <div :class="[animateName]" class="pop-main">
            <slot ></slot>
          </div>
        </div>
      </transition>
    </div>
</template>
<script type="text/babel">
    export default{
        name : 'VPop' ,
        props:{
          animate: {
            type: String ,
            default: 'center',
          }
        },
        data(){
            return{
              isShow : false ,
              scrollTop : 0
            }
        },
        computed:{
          animateName(){
            return this.animate == 'center' ? 'middle' : this.animate
          }
        },
        methods:{
          open(){
            this.isShow = true
            this.scrollTop = window.scrollY
            var page = document.getElementsByTagName('body')[0]
//禁止页面滚动
            page.classList.add('noscroll')

          },
          close(){
            this.isShow = false
            var page = document.getElementsByTagName('body')[0]
            //恢复页面滚动
            page.classList.remove('noscroll')
            //setTimeout(()=>{
              console.log(222)
              window.scrollTo( 0, this.scrollTop )
            //}, 1000)

            this.closeCb()
          },
          closeCb(){
            this.$emit('onHide')
          },
        },
        components:{

        }
    }
</script>
