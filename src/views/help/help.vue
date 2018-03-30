<style lang="less" scoped>
  .panel{
    line-height: 1.5;
  }
  .power-img-wrap{
    height: 602px;
    .power-img1{

      float: left ;
      width: 338px;
      height: 602px;
    }
    .power-img2{

      float: right ;
      width: 338px;
      height: 602px;
    }
    .power-img-center{
      width: 338px;
      height: 602px;
    }

  }
  .power-desc{
    padding : 20px 41px 10px;
    .icon{

      height: 32px;
    }
    .box-shadow{
      box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.17);
      div:first-child{
        margin-bottom: 2px;
      }
    }
  }
  .im-logo{
    height: 34px;
    padding-left: 8px;
  }

</style>
<template>
    <div>
      <div class="b-LR-10 b-T-10" >
        <div class="panel  c_white-bg">
          <div class="b-LR-10 b-TB-5 between">
            <p class="middle b_FS-14"><span class="dot success"></span><span class="b-L-4 c_6">1.权限管理添加人员，人员权限添加权限</span></p>
          </div>
        </div>
      </div>
      <div class="b-LR-10 b-MT-10 power-img-wrap">
        <img class="power-img1" src="../../assets/img/image-help01.png" alt="">
        <img class="power-img2" src="../../assets/img/image-help02.png" alt="">
      </div>
      <div class="b-LR-10 b-T-10" >
        <div class="panel  c_white-bg">
          <div class="b-LR-10 b-TB-5 between">
            <p class="middle b_FS-14"><span class="dot success"></span><span class="b-L-4 c_6">2.添加决策人、执行人</span></p>
          </div>
        </div>
      </div>
      <div class="power-desc">
        <div class=" box-shadow">
           <div class="c_white-bg b-LR-10 b-TB-15 b_d-flex b_flex-between-col b_flex-center-row ">
              <span>
                决策人
              </span>
             <img class="icon" src="../../assets/img/icon-right-slide02.png" alt="">
           </div>
           <div class="c_white-bg b-LR-10 b-TB-15 b_d-flex b_flex-between-col b_flex-center-row">
              <span>
                决策人
              </span>
              <img class="icon" src="../../assets/img/icon-right-slide02.png" alt="">
           </div>
        </div>

      </div>

      <div class="b-LR-10 b-T-10" >
        <div class="panel  c_white-bg">
          <div class="b-LR-10 b-TB-5 between">
            <p class="middle b_FS-14"><span class="dot success"></span><span class="b-L-4 c_6">3.项目管理添加项目，管理项目</span></p>
          </div>
        </div>
      </div>
      <div class="b-MT-10 power-img-wrap text-center">
        <img src="../../assets/img/image-help-03.png" class="power-img-center" alt="">
      </div>
      <div class="btn-warp b-T-15 b-B-10">
        <div class="btn-full-success b_d-flex text-center b_flex-center b_flex-center-col">
          人工客服 <img class="im-logo" src="../../assets/img/icon-customer service.png" alt="">
        </div>
      </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
