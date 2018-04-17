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

      <input type="file" @change.native ="uploadImage" multiple="multiple"  >
      <v-pop ref="popup" animate="left" @onHide="hideCb" >
        <div class="bottom c_white-bg">
          121adl;kfskjflasjklfjlkasdjfljsad
        </div>
      </v-pop>
      <!--<Toast></Toast>-->
    </div>
</template>
<script>


    import { Demo } from '@/services'
    //import Toast from '@/common/base/toast/toast.vue'
    import Toast from '@/common/base/toast/toast.js'
    export default{
        data(){
            return{
              isOpen : false ,
            }
        },
        mounted(){
          Demo.devUserLogin({
            userId : '21212'
          },true).then(()=>{})

          this.$toast.show('操作成功')
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
          uploadImage(e){
            //上传图片
            // this.option.img
            let file = e.target.files[0]
            console.log(file)
            if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
              this.$toast.show('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
              return false
            }
            let reader = new FileReader()
            reader.onload = (e) => {
              let data
              if (typeof e.target.result === 'object') {
                // 把Array Buffer转化为blob 如果是base64不需要
                data = new Blob([e.target.result], {type: file.type})
              }
              debugger
//              this.addImageCell({
//                text: "",
//                imgData: data,
//                imgUrl: window.URL.createObjectURL(data)
//              })
            }
            // 转化为blob
            reader.readAsArrayBuffer(file)
          }
        },
    }
</script>
