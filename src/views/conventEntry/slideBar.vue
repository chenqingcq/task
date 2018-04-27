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
      z-index: 1;
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
        z-index: 10;
      }
      .panel{
        /*height: 780px;*/
        height: 800px;
        overflow-y: auto;
        position:relative;

        .item{
          &.is-radius{
            border-radius: 0 40px 0 0 ;
          }
          &.is-first{
            margin-top: 45px;
          }
           /*padding: 20px 22px;*/
          padding:20px 20px;
          margin: 0 2px;
          display: flex ;
          align-items: center;
          background:#fff ;
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
  .new-project-btn{
    width: 36px;height: 34px;padding-right:4px;
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
    <!--<div v-show="isShow" >-->
      <v-pop ref="slide" animate ="left" >
        <div v-show="isShow" class="slide-wrap c_white-bg" >
          <img class="banner" src="../../assets/img/image-background01.png" alt="">
          <img @click="skipToHelp" class="help" src="../../assets/img/icon-help.png" alt="">
          <div class="nav-container b_d-flex c_white-bg" >
            <div @touchstart="changeNav(0), getProjectList()" class="nav" :class="[navTab == 0 ? 'active' : 'default c_7' ]"  >
              <p class="b_FS-12" >全部</p>
              <div class="line" ></div>
            </div>
            <div @touchstart="changeNav(1), getProjectList()" class="nav" :class="[navTab == 1 ? 'active' : 'default c_7' ]" >
              <p  class="b_FS-12" >我发布</p>
              <div class="line" ></div>
            </div>
            <div @touchstart="changeNav(2), getProjectList()" class="nav" :class="[navTab == 2 ? 'active' : 'default c_7' ]"  >
              <p  class="b_FS-12" >我执行</p>
              <div class="line" ></div>
            </div>
          </div>
          <div class="main ">
            <!--todo-->
                  <span @click="reverseList"
                        class="c_7 b_FS-24 positive" style="color:#979FAE" >

                    <i :class="[ isPositive ? 'c_primary' : '']">↓</i><i :class="[ !isPositive ? 'c_primary' : '']">↑</i>
                  </span>

            <div class="panel c_white-bg"
                 v-infinite-scroll="getProjectList"
                 infinite-scroll-disabled="hasMore"
                 infinite-scroll-distance="30"
                 infinite-scroll-throttle-delay="300"
                 @scroll.self
            >

              <template v-for="(project, key) in projectList">
                <v-swipeout contentBg="#f4f4f4" >
                  <div slot="content" class="item" :class="[ key == 0 && 'is-first']" @click = "selectProject(project)" >
                    <p class="left-photo"  >
                      <img :src="project.headImage" alt="">
                    </p>
                    <p class="c_11 b_FS-14">
                      {{ project.projectName }}
                    </p>
                  </div>
                  <div slot = 'right-menu' class="b_FS-14">
                    <v-swipe-btn :width="70" type="warn" >
                      删除
                    </v-swipe-btn>
                  </div>
                </v-swipeout>
                <div class="c_white-bg text-center" style="position: relative;z-index: 2">
                  <div class="bar"></div>
                </div>

              </template>
            </div>
            <div class="btn-warp m-t-64">
              <div class="btn-small-success b_FS-28  ">
                <div class="b_d-flex b_flex-center-col b_flex-center-row" @touchstart = 'newAproject' >
                  <img class="new-project-btn" src="../../assets/img/icon-add02.png" alt=""> 新增项目
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-pop>
    <!--</div>-->

    <!--</transition>-->

  </div>

</template>
<script type="text/babel">
    // ajax
    import { Convent } from '@/services'
    // 引入vuex操作
    import { mapGetters, mapActions } from 'vuex'
    export default{
        props: {

        },
        data(){
            return{
                navTab : 0,//  全部. 0:全部 1: 我创建 2: 我执行
                isShow : false,
                isPositive: true , // 顺序
                allList: [{
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
                }],
//                myCreateList: [] ,
//                myActionList: [] ,
                all : {
                  list: [],
                  page: {
                    pageNum : 1 ,
                    pageSize : 10 ,
                    isLoaded : true
                  }
                },
                myCreate : {
                  list: [],
                  page: {
                    pageNum : 1 ,
                    pageSize : 10 ,
                    isLoaded : true
                  }
                },
                myAction : {
                  list: [],
                  page: {
                    pageNum : 1 ,
                    pageSize : 10 ,
                    isLoaded : true
                  }
                },
                // scroll 分页
                listenScroll: false ,

            }
        },
        computed:{
          hasMore(){
            return this.projectHasMore || this.listenScroll
          },
          projectHasMore(){
              if(this.navTab == 0 ) return !this.all.page.isLoaded
              if(this.navTab == 1 ) return !this.myCreate.page.isLoaded
              if(this.navTab == 2 ) return !this.myAction.page.isLoaded
          },
          projectList(){
            const type = this.navTab
            if(type == 0 ) return  this.all.list
            if(type == 1 ) return  this.myCreate.list
            if(type == 2 ) return  this.myAction.list
          }
        },
        components:{
        },
        mounted(){
          this.getProjectList()
        },
        methods:{
          ...mapActions([
            'setCurrentProject'
          ]),
          changeNav(tab){
            this.navTab = tab
            const page =  {
              pageNum : 1 ,
              pageSize : 10 ,
              isLoaded : true
            }
            if(this.navTab == 0 ) this.all.page = page
            if(this.navTab == 1 ) this.myCreate.page = page
            if(this.navTab == 2 ) this.myAction.page = page
          },
          test_getProjectList(){
            if(this.navTab == 0 ) var { pageNum ,pageSize } = this.all.page
            if(this.navTab == 1 ) var { pageNum ,pageSize } = this.myCreate.page
            if(this.navTab == 2 ) var { pageNum ,pageSize } = this.myAction.page
            this.listenScroll = true
            console.log(pageNum ,pageSize)
            setTimeout(()=>{
              var data = [{
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
                  themeName : '我是执行者' ,
                  id: '2' ,
                  role : 'operator'
                },
                {
                  themeName : '我是执行者' ,
                  id: '2' ,
                  role : 'operator'
                },
                {
                  themeName : '我是执行者' ,
                  id: '2' ,
                  role : 'operator'
                },
                {
                  themeName : '我是执行者' ,
                  id: '2' ,
                  role : 'operator'
                },
                {
                  themeName : '我是执行者' ,
                  id: '2' ,
                  role : 'operator'
                },
                {
                  themeName : '我是执行者' ,
                  id: '2' ,
                  role : 'operator'
                },
                {
                  themeName : '我是执行者' ,
                  id: '2' ,
                  role : 'operator'
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

              const oldList = this.projectList
              const newList = oldList.concat( data )
              if( this.navTab == 0 ){ this.all.list = newList  }
              if( this.navTab == 1 ){ this.myCreate.list = newList  }
              if( this.navTab == 2 ){ this.myAction.list = newList  }
              this.all.page.isLoaded = true ;
              this.myCreate.page.isLoaded = true ;
              this.listenScroll = false

            },100)
            return
          },
          getProjectList(){
            if(this.navTab == 0 ) var { pageNum ,pageSize ,isLoaded } = this.all.page
            if(this.navTab == 1 ) var { pageNum ,pageSize ,isLoaded } = this.myCreate.page
            if(this.navTab == 2 ) var { pageNum ,pageSize ,isLoaded } = this.myAction.page
            if( !isLoaded ){
              return
            }
            this.listenScroll = true
            Convent.projectList({
              type : this.navTab ,
              pageNum : pageNum ,
              pageSize : pageSize ,
              sort : this.isPositive ? 0 : 1
            }).then((res)=>{
                const oldList = this.projectList
                const arr = res.data
                const page = res.page
                var  newList = []
                if( page.isLoaded ){
                  // 还有下一页
                  page.pageNum++
                }
                if(res.data.length){
                  newList = oldList.concat(arr)
                }
                else{
                  //newList = oldList
                  if( this.navTab == 0 ){ this.all.page.isLoaded = false }
                  if( this.navTab == 1 ){ this.myCreate.page.isLoaded = false }
                  if( this.navTab == 2 ){ this.myAction.page.isLoaded = false }
                  return
                }
               if( this.navTab == 0 ){ this.all.list = newList ;this.all.page.pageNum++ ;this.all.page.isLoaded = page.isLoaded }
               if( this.navTab == 1 ){ this.myCreate.list = newList ;this.myCreate.page.pageNum++ ; this.myCreate.page.isLoaded = page.isLoaded }
               if( this.navTab == 2 ){ this.myAction.list = newList ;this.myAction.page.pageNum++ ;this.myAction.page.isLoaded = page.isLoaded }
              this.listenScroll = false
            })
          },
          open(){
            this.$refs.slide.open()
            this.isShow = true
          },
          close(){
            this.$refs.slide.close()
            this.isShow = false
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
            project.role = project.isCreate ? 'creator': 'visitor'
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
            else if( text && text.length  > 10 ) {
              this.$dialog.message({
                message: `项目名称不能超过10个字符`
              })
            }
            else{
              Convent.createProject({
                  projectName : text
              })
              .then(res=>{
                // update state
                // string
                this.setCurrentProject({
                  projectId : res.data , // id
                  projectName : text ,
                  role : 'creator'
                })
                this.$router.push('/addTaskSetting')
              })
            }

          },
          reverseList(){
            this.isPositive = !this.isPositive
            const page =  {
                pageNum : 1 ,
                pageSize : 10 ,
                isLoaded : true
            }
            this.all.page = page
            this.all.list = []
            this.myCreate.page = page
            this.myCreate.list = []
            this.myAction.page = page
            this.myAction.list = []
            this.getProjectList()


          }
        }
    }
</script>
