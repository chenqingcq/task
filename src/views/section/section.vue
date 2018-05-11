<style lang="less" scoped>

  /*common*/
  .b_lineH-28{
    line-height: 28px;
  }
  .bottom-bg{
    display: block;
    height: 224px;
    width: 100%;
  }
  .section{
    min-height: 1100px;
    position:relative;
    .header{
      height: 12px;
      width: 100%;
      background: #0BAFFE;
    }

    position:relative ;
    .left{
      position: absolute;
      width: 93*2px;
      left: 0 ;
      top: 132px ;
      z-index : 1 ;
    }

    .section-main{
      margin-top: 34px;
      position: relative;
      z-index : 2 ;
      .timer-shaft {
        /*display: inline-block;*/
        width: 93*2px;
      }

      .panel-conf{
        display: inline-block;
        width: 516px;
        height: 108px;
        .text{
          margin-left: 20px;
          margin-top: 14px;
          width: 470px;
          line-height:40px;
          font-size: 28px;
          font-family: PingFangSC;
          font-weight: 500;
        }
        &.edit{
           height: 192px;
           position:relative ;
            .input:-webkit-input-placeholder{
              color:#C7C7C7;
            }
            .input{
              width: 238*2px;
              height:   88px;
              font-size: 28px;
              color:#333;
              line-height: 40px;
              margin-left: 20px;
              margin-top: 18px;
            }
            .placeholder-icon{
              width: 30px;
              position: absolute;
              left : 190px;
              top: 24px;
            }
        }
      }
      .start-section{
          /*margin-top: 34px;*/
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
    <div>
      <div class="section">
        <div class="header" ></div>
        <div class="section-main" v-if="mode =='look'">
          <!------- begin status ------->
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
          <template v-for="(section,key) in sectionDataLook">
            <div class=" b_d-flex b_flex-center" :class="[ section.isDoing ? 'doing-section' : 'complete-section' ]">
              <div class="timer-shaft">
                <div class="c_white-bg  b_FS-18 b_font-PFR text-center" :class="[section.isDoing ? 'c_primary' : 'c_7']">
                  {{ formatDate(section.pointTime) }}
                </div>
                <div class="b_FS-10 c_7 b_font-PFR text-center b_lineH-28" v-if="section.isDoing">进行中</div>
                <div class="light" :class="[section.isDoing? 'doing': 'pass']"></div>
              </div>
              <div class="panel panel-conf">
                <div class="text " :class="[section.isDoing ? 'c_11' : 'c_6']" >
                  {{ section.pointDesc }}
                </div>
              </div>
            </div>
            <div class="timer-shaft" v-if="key != (sectionDataLook.length -1)">
              <div class="link-dot b-MT-0"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot b-MB-0"></div>
            </div>
          </template>


          <!------- end status ------->
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
        <div class="section-main" v-if="mode =='edit'">
          <!------- begin status ------->
          <div class="edit-section b_d-flex b_flex-center">
            <div class="timer-shaft">
              <v-datetime  v-if="mode =='edit'" v-model="todayDate" format="YYYY-MM-DD"  >
                <div class="c_white-bg c_7 b_FS-18 b_font-PFR text-center">
                  {{ formatDate(todayDate) }}
                </div>
              </v-datetime>

              <div class="light doing"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot b-MB-0"></div>
              <!--<div class="light start"></div>-->
            </div>
            <div class="panel panel-conf edit">
              <textarea class="input" v-model="newSectionVal" name="" maxlength="30" placeholder="这里填写节点  （限制30字）" id="" cols="30" ></textarea>
              <img v-if="newSectionVal.length ==0" class="placeholder-icon" src="../../assets/img/icon-edit02.png" alt="">

              <div @click="newSection" class="btn-small-primary b-MT-5">添加节点</div>
            </div>
          </div>
          <div class="timer-shaft">
            <div class="link-dot b-MT-0"></div>
            <div class="link-dot"></div>
            <div class="link-dot b-MB-0"></div>
          </div>
          <template v-for="(section,key) in sectionDataLook">
            <div class=" b_d-flex b_flex-center" :class="[ section.isDoing ? 'doing-section' : 'complete-section' ]">
              <div class="timer-shaft">
                <div class="c_white-bg b_FS-18 b_font-PFR text-center" :class="[section.isDoing ? 'c_primary' : 'c_7']" >
                  {{ formatDate(section.pointTime) }}
                </div>
                <div class="b_FS-10 c_7 b_font-PFR text-center b_lineH-28" v-if="section.isDoing">进行中</div>
                <div v-if="key != (sectionDataLook.length -1)" class="light" :class="[section.isDoing? 'doing': 'pass']"></div>
              </div>
              <div class="panel panel-conf">
                <img @click="deleteSect( key, section.pointId )" class = "delete"  src="../../assets/img/icon-close.png" alt="">
                <div class="text " :class="[section.isDoing ? 'c_11' : 'c_6']" >
                  {{ section.pointDesc }}
                </div>
              </div>
            </div>
            <div class="timer-shaft" v-if="key != (sectionDataLook.length -1)">
              <div class="link-dot b-MT-0"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot b-MB-0"></div>
            </div>
          </template>
        </div>
      </div>
      <img @click.prevent src="../../assets/img/image-background.png" alt="" class="bottom-bg">
    </div>

</template>
<script type="text/babel">
  // ajax
    import { Convent } from '@/services'
  // vuex
    import { mapGetters } from 'vuex'

    export default{
        data(){
            return{
              mode: 'look', // look/edit
              newSectionVal : '' ,
              todayDate: '',
              sectionDataLook: [],
//              sectionDataLook :[{
//                pointTime: '03/20',
//                id : 0,
//                isDoing : false ,
//                pointDesc: '布置展管入口处，以免人多发生意外，入口处，以免 人多发生意外。',
//              },
//              {
//                pointTime: '03/20',
//                id : 1,
//                isDoing : false ,
//                pointDesc: '布置展管入口处，以免人多发生意外，入口处，以免 人多发生意外。',
//              },
//              {
//                pointTime: '03/20',
//                id : 3,
//                isDoing : true ,
//                pointDesc: '布置展管入口处，以免人多发生意外，入口处，以免 人多发生意外。',
//              }],
              processData:[{
                pointTime: '03/20',
                time: '12:30',
                pointDesc: '',
                imgs:[
                  'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
                  'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
                  'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
                ]
              }],
              isCompareDoing : false
            }
        },
        computed:{
          ...mapGetters({
            projectId : 'getProjectId'
          })
        },
        created(){
          this.todayDate = this.initDate()
        },
        mounted(){
          const mode = this.$route.query.mode
          this.mode = mode == 'edit' ? 'edit' : 'look'
          this.getSectionList()
        },
        methods: {
          getSectionList(){
            const projectId = this.projectId
            Convent.sectionList({
              projectId: projectId
            })
            .then(res=>{
              if( !res.data.length ){
                if(this.$route.query.role == 'operator') this.mode = 'edit'
                return
              }
              let res_data

              res_data = res.data.reverse()
              let flag = true
              let sectionList = Array.prototype.map.call( res_data, (section, key)=>{
                console.log(key)

                if( section.flag == '1' && flag ){
                  section.isDoing = true
                  flag = false
                  //section.isDoing = this.sectionFilter( Number(section.pointTimeStamp) )
                }else{
                  section.isDoing = false
                }

                return section
              })

              if( this.mode == 'look' ) {
                this.sectionDataLook = sectionList
              }
              else{
                this.sectionDataLook = sectionList.reverse()
              }




            })

          },
          // 计算 '进行中' 状态的节点
          sectionFilter(sectionTime){
            const now = +new Date()
            // 找到第一个进行中的节点
            if( now < sectionTime && !this.isCompareDoing ){
              this.isCompareDoing = true
              return true
            }
            else{
              return false
            }
          },
          initDate(){
            var d = new Date()
            var y = d.getFullYear()
            var m = d.getMonth() + 1
            var day = d.getDate()
            console.log(( m < 10 ? ('0' + m ) : m ) + '/' + (day < 10 ? ('0' + day) : day))
            return y + '-' + ( m < 10 ? ('0' + m ) : m ) + '-' + (day < 10 ? ('0' + day) : day)
          },
          deleteSect(key, pointId){
            Convent.sectionDelete({
              pointId : pointId
            })
            .then(res=>{
              this.sectionDataLook.splice(key, 1)
            })
          },
          // 新建项目节点
          newSection(){
            const projectId = this.projectId
            const pointDesc = this.newSectionVal
            const pointTime = +new Date(this.todayDate.replace(/\-/g,'/'))
            if( !pointDesc ){
              this.$dialog.message({
                message: '请添加文字',
                icon: "fail"
              });
              return
            }
            else{
              this.newSectionVal = ''
            }
            Convent.createSection({
              projectId,pointDesc,pointTime
            })
            .then(res=>{
              this.sectionDataLook.unshift({
                pointTime: this.todayDate ,
                isDoing: false,
                pointDesc : pointDesc,
                pointId : res.data.pointId
              })
            })

          },
          formatDate( dateStr ){
            return dateStr.substring(5,15).replace('-','/')
          }
        }

    }
</script>
