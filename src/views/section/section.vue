<style lang="less" scoped>
  .section{
    min-height: 982px;
    position:relative;
    .header{
      height: 12px;
      width: 100%;
      background: #0BAFFE;
    }
    .bottom-bg{
      display: block;
      width: 100%;
    }
    position:relative ;
    .left{
      position: absolute;
      width: 93*2px;
      left: 0 ;
      top: 132px ;
      z-index : 1 ;
    }

    .right-panel{
      position: relative;
      z-index : 2 ;
      .timer-shaft {
        /*display: inline-block;*/
        width: 93*2px;
      }

      .panel-conf{
        display: inline-block;
        width: 516px;
        height: 107.00000025px;
        .text{
          margin-left: 20px;
          margin-top: 14px;
          width: 490px;
          height: 88px ;
          line-height:40px;
          font-size: 28px;
        }
        &.edit{
           height: 192px;
            .input{
              width: 238*2px;
              height:   88px;
              font-size: 28px;
              color:#C7C7C7;
              line-height: 40px;
              margin-left: 20px;
              margin-top: 18px;
            }
        }
      }
      .start-section{
          margin-top: 34px;
      }
      .end-section{

      }
      .doing-section{

      }
    }


  }
  /*信号灯*/
  .light{
    width: 8.6*2px;
    height: 8.6*2px;
    border-radius: 100%;
    border-width: 6.4px ;
    border-style : solid ;
    box-sizing : content-box;
    border-color: rgba(255,255,255,0.8);
    margin:  4*2px auto;
    &.start{
       background: #80EA69;


       /*border-color: (r:0.50 g:0.92 b:0.41 a:1.00);*/
    }
    &.doing{
       background: #09ACFE;
    }
    &.pass{
      background: #fff;
       border-color: #09ACFE ;
        opacity: 0.28;
    }
    &.end{
       background: #EA7B69;
    }
  }
  .link-dot{
    width: 7*2px;
    height: 7*2px;
    background: #E7EBEF;
    margin: 10px auto;
    /*margin-bottom: 5*2px;*/
    border-radius: 100% ;;
    box-sizing : content-box;
  }


</style>
<template>
    <div class="section">
      <div class="header" ></div>
      <div class="left" >

      </div>
      <div class="right-panel">

          <div class="start-section b_d-flex ">
            <div class="timer-shaft">
              <div class="c_7 b_FS-18 b_font-PFR text-center">
                起点
              </div>
              <div class="light start"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
            </div>
          </div>
        <div class="edit-section b_d-flex b_flex-center">
          <div class="timer-shaft">
            <div class="c_white-bg c_7 b_FS-18 b_font-PFR text-center">
              {{ todayDate }}
            </div>
            <div class="light doing"></div>
            <div class="link-dot"></div>
            <div class="link-dot"></div>
            <div class="link-dot"></div>
            <div class="link-dot b-MB-0"></div>
            <!--<div class="light start"></div>-->
          </div>
          <div class="panel panel-conf edit">
            <textarea class="input" name="" placeholder="这里填写节点" id="" cols="30" ></textarea>
            <div class="btn-small-primary b-MT-5">提交</div>
          </div>
        </div>
        <div class="timer-shaft">
          <div class="link-dot b-MT-0"></div>
          <div class="link-dot"></div>
          <div class="link-dot b-MB-0"></div>
        </div>
        <div class="complete-section b_d-flex b_flex-center">
          <div class="timer-shaft">
            <div class="link-dot b-MT-0"></div>
            <div class="link-dot"></div>

            <div class="c_white-bg c_7 b_FS-18 b_font-PFR text-center">
              01/16
            </div>
            <div class="link-dot"></div>
            <div class="link-dot b-MB-0"></div>
            <!--<div class="light start"></div>-->
          </div>
          <div class="panel panel-conf">
            <div class="text c_6">
              建筑的修饰布置工作，建筑的修饰布置工作。
            </div>
          </div>
        </div>
        <div class="timer-shaft">
          <div class="link-dot b-MT-0"></div>
          <div class="link-dot"></div>
          <div class="link-dot b-MB-0"></div>
        </div>
        <div class="doing-section b_d-flex b_flex-center">
          <div class="timer-shaft">
            <div class="c_white-bg c_7 b_FS-18 b_font-PFR text-center">
              01/16
            </div>
            <div class="b_FS-10 c_7 b_font-PFR text-center">运行中</div>
            <div class="light doing"></div>
          </div>
          <div class="panel panel-conf">
          </div>
        </div>
        <div class="timer-shaft">
          <div class="link-dot b-MT-0"></div>
          <div class="link-dot"></div>
          <div class="link-dot"></div>
          <div class="link-dot"></div>
          <div class="link-dot b-MB-0"></div>
        </div>
          <div class="complete-section b_d-flex b_flex-center">
            <div class="timer-shaft">
              <!--<div class="link-dot b-MT-0"></div>-->
              <!--<div class="link-dot"></div>-->

              <div class="c_white-bg c_7 b_FS-18 b_font-PFR text-center">
                01/16
              </div>
              <div class="light pass"></div>
              <!--<div class="link-dot"></div>-->
              <!--<div class="link-dot b-MB-0"></div>-->

              <!--<div class="light start"></div>-->
            </div>
            <div class="panel panel-conf">
            </div>


          </div>
        <div class="timer-shaft">
          <div class="link-dot b-MT-0"></div>
          <div class="link-dot"></div>
          <div class="link-dot"></div>
          <div class="link-dot"></div>
          <div class="link-dot b-MB-0"></div>
        </div>

        <div class="complete-section b_d-flex b_flex-center">
          <div class="timer-shaft">
            <!--<div class="link-dot b-MT-0"></div>-->
            <!--<div class="link-dot"></div>-->

            <div class="c_white-bg c_7 b_FS-18 b_font-PFR text-center">
              01/16
            </div>
            <div class="light pass"></div>
            <!--<div class="link-dot"></div>-->
            <!--<div class="link-dot b-MB-0"></div>-->

            <!--<div class="light start"></div>-->
          </div>
          <div class="panel panel-conf">
          </div>
        </div>


          <div class="end-section">

            <div class="timer-shaft">
              <div class="link-dot b-MT-0"></div>
              <div class="link-dot"></div>
              <div class="c_7 b_FS-18 b_font-PFR text-center">
                终点
              </div>
              <div class="light end"></div>
            </div>
        </div>
      </div>
      <img src="../../assets/img/image-background.png" alt="" class="bottom-bg">
    </div>
</template>
<script>
    export default{
        data(){
            return{
              mode: 'edit', // look
              todayDate: ''
            }
        },
        components:{

        },
        mounted(){
          this.todayDate = this.initDate()
        },
        methods:{
          initDate(){
            var d = new Date()
            var m = d.getMonth()+1
            var day = d.getDate()
            console.log(( m <10 ? ('0'+ m ): m )+ '/' + (day < 10 ? ('0' + day) : day))
            return ( m <10 ? ('0'+ m ): m )+ '/' + (day < 10 ? ('0' + day) : day)
          }
        }

    }
</script>
