<style>

</style>
<template>
    <div>
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
      <div class="b-LR-10 b-MT-10">
        <div class="panel c-1 c_white-bg">
          asdfasfdas
          adsfasdfasf
          fasdf
        </div>
      </div>
      <!--<div class="b-LR-10 b-MT-10">-->
        <!--<div class="panel-dot">-->
          <!--dasfd12121-->
        <!--</div>-->
      <!--</div>-->
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

      <v-pop ref="popup" animate="left" @onHide="hideCb" >
        <div class="bottom c_white-bg">
          121adl;kfskjflasjklfjlkasdjfljsad
        </div>
      </v-pop>

    </div>
</template>
<script>
    export default{
        data(){
            return{
              isOpen : false ,
            }
        },
        components:{

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
          }

        },
    }
</script>
