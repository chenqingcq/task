<style lang="less" scoped>
    .bg{
      display: block;
      width: 211*2px;
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
</style>
<template>
    <div class="text-center " style="position: relative">
      <div class="flexible-text b_FS-16 c_7">
        {{text}}
      </div>
      <img class='bg' src="../../assets/img/image-background02.png" alt="">
      <div class="btn-warp">
        <div @click="backToEntry" class="btn-small-success b_FS-14">
           {{ type== -1? '返回项目管理':'' }}
           {{ type== 1? '返回项目管理':'' }}
           {{ type== 2? '返回参展管理':'' }}
        </div>
      </div>

    </div>
</template>
<script>
    export default{
        data(){
            return{
              type : 1 ,
              text: '提交成功哦'
            }
        },
        components:{

        },
        mounted(){
          var type = this.$route.query.type
          this.type = type
          var titleEl = document.getElementsByTagName('title')[0]
          switch (type){
            case '-1' : this.text = '任务关闭成功哦';titleEl.innerHTML = '任务关闭';break ;
            case '1' : this.text = '提交成功哦';titleEl.innerHTML = '提交';break ;
            case '2' : this.text = '提交成功哦';titleEl.innerHTML = '任务约定';break ;
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
