<style lang="less" scoped>
    .bg{
      display: block;
      width: 211*2px;
      margin: auto;
      padding-top: 100*2px;
      margin-bottom: 25px;
    }
    .bg2{
      display: block;
      width: 344px;
      margin: auto;
      padding-top: 100*2px;
      margin-bottom: 25px;
    }
    .btn-small-success{
      line-height: 20*2px;
    }
    .flexible-text{
      position: absolute;
      margin: auto;

      left: 50% ;
      transform: translateX(-50%);
      top: 320*2px ;
    }
    .flexible-text-701{
      margin: auto;
      /*margin-top:62px;*/
      margin-bottom: 59px;
    }
</style>
<template>
    <div class="text-center " style="position: relative">
      <img v-if="type==701" class='bg2' src="../../assets/img/error701.png" alt="">
      <img v-else-if="type==702" class='bg2' src="../../assets/img/error702.png" alt="">
      <img v-else class='bg' src="../../assets/img/image-background02.png" alt="">
      <div class=" b_FS-16 c_7" :class=" type==701 ?'flexible-text-701':'flexible-text'">
        {{text}}
      </div>

      <div class="btn-warp">
        <div @click="backToEntry" class="btn-small-success b_FS-14">
           {{ type== -1? '返回项目管理':'' }}
           {{ type== 1? '返回项目管理':'' }}
           {{ type== 2? '返回参展管理':'' }}
           {{ type== 701? '返回':'' }}
           {{ type== 702? '返回':'' }}
        </div>
      </div>

    </div>
</template>
<script>
    export default{
        data(){
            return{
              type : -1 ,
              text: '提交成功哦'
            }
        },
        mounted(){
          const type = this.$route.query.type
          if(type) this.type = type

          var titleEl = document.getElementsByTagName('title')[0]
          switch (type){
            case '-1' : this.text = '任务关闭成功哦';titleEl.innerHTML = '任务关闭';break ;
            case '1' : this.text = '提交成功哦';titleEl.innerHTML = '提交';break ;
            case '2' : this.text = '提交成功哦';titleEl.innerHTML = '任务约定';break ;
            case '701' : this.text = '该任务已经被领取';titleEl.innerHTML = '任务约定';break ;
            case '702' : this.text = '不能给自己指派任务';titleEl.innerHTML = '任务约定';break ;
            default : this.text = '提交成功哦';titleEl.innerHTML = '该任务已经被领取';break ;
          }
        },
        methods:{
          backToEntry(){
            if(this.type == 1 || this.type == -1){
              this.$router.push('/conventEntry')
            }else{

            }

          }
        }
    }
</script>
