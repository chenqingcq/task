<style lang="less" scoped>
    .comment-box{
        &.is-fixed{
           bottom: 0;
           position: fixed;
        }
        // 弹起键盘后 改成absolute ,不然scrollIntoView失效
        &.no-fixed{
           position: absolute;
           //bottom: 0;
           bottom: -76px;
        }
        width: 100%;
        /*top: auto ;*/
        z-index: 3000;
        .comment-input-wrap{
          border: 1px solid red;
          .comment-input{
            border:none ;
            padding: 10px ;
            color: yellow;
          }
        }
    }
    .comment-mask{
      position: fixed ;
      top: 0 ;
      background-color: transparent;
      width: 100vw;
      height: 100vh ;
      z-index : 2999;
    }
</style>
<template>
    <div style="position: relative">
      <div class="b-LR-10 b-T-10">
        <v-switch :status="isOpen" @getStatus="statusChange" ></v-switch>
      </div>
      <div class="b-LR-10 b-T-10">
        <v-calendar :status="isOpen" @getStatus="statusChange" ></v-calendar>
      </div>
      <div class="btn-warp">
        <div class="btn-full-warn b-MT-10 ">
          .btn-full-warn
        </div>
        <div class="btn-full-success b-MT-10 ">
          .btn-full-success
        </div>
      </div>
      <div class="btn-warp b-LR-8 clearfix">
          <div class="btn-normal-success b_left b-MT-10">
            .btn-normal-success
          </div>
          <div class="btn-normal-warn b_right b-MT-10">
            .btn-normal-warn
          </div>
      </div>
      <div class="btn-warp b-LR-8 b-MT-10">
        <div class="btn-normal-info b_center ">
          .btn-normal-info
        </div>
      </div>
      <div class="btn-warp b-MT-10">
        <div class="btn-small-success">
          .btn-small-success
        </div>
      </div>
      <div class="btn-warp b-MT-10">
        .btn-small-success
        <div @click="openPop" class="btn-small-primary">
          打开popUp
        </div>
      </div>
      <div class="btn-warp b-MT-10">
        <div @click="showToast" class="btn-small-primary">
          toast
        </div>
      </div>
      <div class="b-LR-10 b-MT-10">
        <div class="panel c-1 c_white-bg">
          asdfasfdas
          adsfasdfasf
          fasdf
        </div>
      </div>

      <div class="b-LR-10">
         <div class="panel b-MT-10 c_white-bg">
           <div class="b-LR-10 b-T-5 between">
             <p class="middle b_FS-14"><span class="dot success"></span><span class="b-L-4">审批留言</span></p>
             <div class=" b_FS-14">
               评论
             </div>

           </div>
         </div>
      </div>


      <!--信号灯-->

      <div class="dot success"></div>
      <div class="dot warn"></div>
      <div class="dot info"></div>

      <!--status-->

      <div class="b_status complete">已完成</div>
      <div class="b_status pending">进行中</div>
      <div class="b_status out-date">已超时</div>

      <input type="file"  accept=".png,.jpg,.gif,.jpeg" @change ="uploadImage($event)" multiple="multiple">
      <v-pop ref="popup" animate="left" @onHide="hideCb" >
        <div class="bottom c_white-bg">
          121adl;kfskjflasjklfjlkasdjfljsad
        </div>
      </v-pop>
      <v-swipeout>
        <div slot="content" style = 'width : 200px;padding: 20px'>
          http://0.0.0.0:8080/#/conventEntry
        </div>
        <div slot = 'right-menu' class="b_FS-14">
          <v-swipe-btn type="warn" >
            删除
          </v-swipe-btn>
        </div>
      </v-swipeout>

      <div v-if="isFocus" class="comment-mask"
           @touchmove.prevent
           @scroll.prevent
           @touchstart.prevent="blurInput">
      </div>
      <div class="comment-box" :class="[ !isFocus? 'is-fixed' : 'no-fixed']">
        <div class="comment-input-wrap" >
          <input
            ref="text"
            @focus = 'setPageToBottom'
            @blur="clearIpt" class="comment-input" type="text" >
        </div>
      </div>


      <!--<Toast></Toast>-->
    </div>
</template>
<script type="text/babel">


    import { Demo, Convent } from '@/services'
    import  boardfix from '@/mixins/keyboardfix'

    //import Toast from '@/common/base/toast/toast.vue'
    import Toast from '@/common/base/toast/toast.js'
    export default{

        data(){
            return{
              isOpen : false ,
              title : 0
            }
        },
        mixins:[boardfix],
        mounted(){
//          Demo.devUserLogin({
//            userId : '21212'
//          },true).then(()=>{})
//
//          var timer = setInterval(()=>{
//            console.log( this.title )
//
//            if( this.title++ > 10 ){
//              console.log( this.title )
//              this.$loadingClose()
//              clearInterval( timer )
//            }
//            else{
//              this.$loading({
//                title : `${this.title}` ,
//              })
//            }
//
//          },1000)




          //this.$toast.show('操作成功')
//          Toast({
//            message: '操作成功',
//            position: 'bottom'
//          });

        },
        components:{
          //Toast
        },
        methods:{
          statusChange(status){
            this.isOpen = status
            console.log(status, this.isOpen)
          },
          openPop(){
            this.$refs.popup.open()
          },
          closePop(){
            this.$refs.popup.close()
          },
          hideCb(){
            console.log('do sthing..')
          },
          showToast(){
            this.$toast.show('操作成功')
          },

        },
    }
</script>
