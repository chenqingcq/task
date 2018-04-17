<style lang="less" scoped>
  @import "animate.less";
  .mask{
    position: fixed;
    top: 0 ;
    left: 0 ;
    width: 100vw ;
    height: 100vh ;
    background: rgba(0,0,0,.6);
    z-index : 99;
  }
  .m-t-64{
    margin-top: 64px;
  }
  .slide-wrap{
    position: absolute;
    /*switch 的z-index 是99*/
      z-index : 100;
    left: 0 ;
    top: 0;
    height: 100vh;
    width: 281*2px;
    background: #F4F4F4;
    .banner{
      width: 562;
      height: 196px;
    }
    .help{
      position: absolute;
      top: 120px;
      left: 512px;
      width: 30px;
      height: 30px;
    }
    .nav-container{
      top: 172px;
      position: absolute;
      left: 50% ;
      transform: translateX(-50%);
      width: 490px;
      height: 62px;
      margin: auto;
      justify-content: space-around;
      box-shadow: 0 2px 10px 0 rgba(177,177,177,0.60), inset 0 -1px 2px 0 rgba(135,135,135,0.50);
      .nav{

        &.active{

          >p{
             padding: 14px ;
            color: #4A89ED;
          }
        }
        &.default{
          >p{
            padding: 14px ;
          }
          .line{

            display: none;
          }
        }
        .line{
          width:64px ;
          height: 6px;
          margin: auto  ;
          background:linear-gradient(180deg,rgba(153,241,255,1),rgba(74,137,237,1));
        }
      }

    }
    .main{
      padding: 56px 18px 0px ;
      position:relative;
      .positive{
        position: absolute;
        right: 30px ;
        top: 76px ;
        z-index: 1;
      }
      .panel{
        height: 780px;
        overflow-y: scroll;
        position:relative;

        .item{
          padding:20px 22px;
          display: flex ;
          align-items: center;
          .left-photo{
            position: relative;
            margin-right: 28px;
            border-radius: 100%;
            border: 2px solid transparent;

          >img{
             display: inline-block;
             position: relative;
             width: 68px;
             height: 68px;
             border-radius: 100%;
             z-index: 3;

           }
           // 外边框渐变
           &::after{
              position: absolute;
              top: -3px; bottom: 2.5px;
              left: -3px; right: -4px;
              background: linear-gradient(#14C9FE, #0094FF);
              content: '';
              z-index: 2;
              border-radius: 70px;
            }

          }

        }
        .bar{
          height: 4px;
          width: 435px;
          margin: auto;
          background-color: #F4F4F4;
        }

      }
    }
  }
  .content-enter-active, {
    .animate-slideInLeft ;

  }
  .content-leave-to{
    .animate-slideOutLeft ;
  }

  .mask-enter-active {
    .animate-fadeIn ;
  }
  .mask-leave-to{
    .animate-fadeOut ;
  }

</style>
<template>
  <div>
    <!--<transition name="mask">-->
      <!--<div v-if="isShow" class="mask" @touchstart="isShow = false" ></div>-->
    <!--</transition>-->
    <!--<transition name="content" >-->
    <v-pop ref="slide" animate ="left" >
        <div  v-if="isShow"  class="slide-wrap c_white-bg">
          <img class="banner" src="../../assets/img/image-background01.png" alt="">
          <img @click="skipToHelp" class="help" src="../../assets/img/icon-help.png" alt="">
          <div class="nav-container b_d-flex c_white-bg" >
            <div @click="navTab = 0" class="nav" :class="[navTab == 0 ? 'active' : 'default c_7' ]"  >
              <p class="b_FS-12" >全部</p>
              <div class="line" ></div>
            </div>
            <div @click="navTab = 1" class="nav" :class="[navTab == 1 ? 'active' : 'default c_7' ]" >
              <p class="b_FS-12" >我发布</p>
              <div class="line" ></div>
            </div>
            <div @click="navTab = 2" class="nav" :class="[navTab == 2 ? 'active' : 'default c_7' ]"  >
              <p class="b_FS-12" >我执行</p>
              <div class="line" ></div>
            </div>
          </div>
          <div class="main ">
            <!--todo-->
                  <span @click="reverseList"
                        class="c_7 b_FS-24 positive" style="color:#979FAE" >

                    <i :class="[ isPositive ? 'c_primary' : '']">↓</i><i :class="[ !isPositive ? 'c_primary' : '']">↑</i>
                  </span>

            <div class="panel c_white-bg">

              <template v-for="(project, key) in projectList">
                <div class="item" @click = "selectProject(project)" >
                  <p class="left-photo"  >
                    <img src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" alt="">
                  </p>
                  <p class="c_11 b_FS-14">
                    {{ project.themeName }}
                  </p>
                </div>
                <div class="bar"></div>
              </template>
            </div>
            <div class="btn-warp m-t-64">
              <div class="btn-small-success b_FS-28  ">
                <div class="b_d-flex b_flex-center-col b_flex-center-row" @touchstart = 'newAproject' >
                  <img style="width: 36px;height: 34px;padding-right:4px" src="../../assets/img/icon-add02.png" alt=""> 新增项目
                </div>
              </div>
            </div>
          </div>
        </div>
    </v-pop>
    <!--</transition>-->

  </div>

</template>
<script type="text/babel">
    // 引入vuex操作
    import { mapGetters, mapActions } from 'vuex'
    export default{
        props: {

        },
        data(){
            return{
                navTab : 0,// 12
                isShow : false,
                isPositive: false , // 顺序
                projectList: [{
                  themeName : '我是创建者' ,
                  id: '1' ,
                  role : 'creator'
                },
                {
                  themeName : '我是执行者' ,
                  id: '2' ,
                  role : 'operator'
                },
                {
                  themeName : '我是访问者' ,
                  id: '3' ,
                  role : 'visitor'
                }]
            }
        },
        components:{
          ...mapGetters({

          })
        },
        mounted(){

        },
        methods:{
          ...mapActions([
            'setCurrentProject'
          ]),


          open(){
            this.$refs.slide.open()
            this.isShow = true
          },
          close(){
            this.$refs.slide.close()

            console.log(this)
          },
          closeCb(){

          },
          // 跳转到帮助页面
          skipToHelp(){
            this.$router.push('/help')
          },
          // 选择项目
          selectProject(project = {}){
            console.log(project)
            this.setCurrentProject( project )
            this.close()
            this.$emit( 'changeProject' )
          },
          // 弹出新建项目弹窗
          newAproject(){
            this.$dialog.info({
              placeholder : '请填写项目名称' ,
              btnName : 'add',
              operate: this.doSubmitNewAproject
            })
          },
          doSubmitNewAproject(text){
            console.log(22222, text)

            if(!text)  this.$dialog.message({
                message: `项目名称不能为空`
              })
            else{
              setTimeout(()=>{
                const project = {
                  id : '2',
                  themeName : text ,
                  role : 'creator'
                }
                // update state
                this.setCurrentProject(project)
                this.$router.push('/addTaskSetting')
              },100)
            }

          },
          reverseList(){
            this.isPositive = !this.isPositive
          }
        }
    }
</script>
