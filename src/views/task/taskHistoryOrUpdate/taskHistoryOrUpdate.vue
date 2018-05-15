<style lang="less" scoped>
  @import "./task.less";
</style>
<template>
  <div>
    <div class="task">
      <div class="header" ></div>
      <div class="task-main">
        <div class="edit-section b_d-flex b_flex-center" v-if="mode=='edit'">
          <div class="timer-shaft">
            <!--<div class="c_white-bg c_primary b_FS-18 b_font-PFM text-center">-->
              <!--{{ todayTime }}-->
            <!--</div>-->
            <div class="b_FS-18 c_7 b_font-PFR text-center">{{ todayDate }}</div>
            <div class="light doing"></div>
            <template v-if="processData.length > 0 ">
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot"></div>
              <div class="link-dot b-MB-0"></div>
            </template>
          </div>
          <div class="panel panel-conf edit">
            <textarea class="input" v-model="newSectionVal" maxlength="35" name="" placeholder="记录一下吧（限制35个字） " id="" cols="30" ></textarea>
            <!--<img v-if="newSectionVal.length ==0" class="placeholder-icon" src="../../../assets/img/icon-edit02.png" alt="">-->
            <div class="imgs-wrap b_FS-0 edit">

              <!--<img  src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" alt="">-->
              <!--<img  src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" alt="">-->
              <!--<img  src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" alt="">-->
              <template v-for="(image, key) in previewImages">
                <div class="img-out">
                  <img class="img" :src="image" alt="">
                  <img @click.self = "giveUpANIamge(key)" class="close-btn" src="../../../assets/img/icon-close-small.png" alt="">
                </div>
              </template>
              <div class="img-out" v-if="previewImages.length <4">
                <img class="img" src="../../../assets/img/icon-add01.png" alt="">
                <input ref="fileinput" type="file" accept="image/gif,image/jpg,image/jpeg,image/bmp,image/png" @change ="selectImages($event)" multiple="multiple">
              </div>

            </div>
            <div class="c_7">
              &nbsp;&nbsp;&nbsp;&nbsp;*只允许最多上传4张图片
            </div>
            <div @click="addTaskProcess" class="btn-small-primary b-MT-5" >提交</div>
          </div>
        </div>
        <div class="timer-shaft" v-if="mode== 'edit' && processData.length > 0 ">
          <div class="link-dot "></div>
          <div class="link-dot"></div>
          <div class="link-dot b-MB-0"></div>
        </div>

        <template v-for="(process,key) in processData">
          <div class="complete-section b_d-flex b_flex-start-row">
            <div class="timer-shaft b-T-9">
              <!--<div class="timer-shaft">-->
              <div class="c_white-bg c_primary b_FS-18 b_font-PFM text-center">
                {{ process.time }}
              </div>
              <div class="b_FS-14 c_7 b_font-PFR text-center b_lineH-40">{{ process.date }}</div>
              <div v-if="key != (processData.length -1)" class="light" :class="[mode=='look'&& key==0 ? 'doing':'pass']" ></div>

              <template v-if="key != (processData.length -1) && process.imgs.length != 0">
                <div class="link-dot b-MT-0"></div>
                <div class="link-dot"></div>
                <div class="link-dot"></div>
                <div class="link-dot"></div>
                <div class="link-dot "></div>
              </template>
              <!--</div>-->
            </div>
            <div class="panel panel-conf">
              <img v-if="mode=='edit'" @click="deleteTask( key, process.progressId )" class = "delete"  src="../../../assets/img/icon-close.png" alt="">
              <div class="text c_11">
                {{ process.progressDesc }}
              </div>
              <div v-if="process.imgs.length > 0" class="imgs-wrap b_FS-0">
                <template v-for="(img,val) in process.imgs ">
                  <img @click="$wechat.doWechatPreview(process.imgs, val )"  :src="'//'+ img" alt="">
                </template>
                <!--<img  src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" alt="">-->
                <!--<img  src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" alt="">-->
                <!--<img  src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" alt="">-->
              </div>

            </div>
          </div>
          <div class="timer-shaft" v-if="key != (processData.length -1)">
            <div class="link-dot b-MT-0"></div>
            <div class="link-dot"></div>
            <div class="link-dot b-MB-0"></div>
          </div>
        </template>

        <div class="b-LR-10">

          <div class="panel  c_white-bg task-desc-bar">
            <div class="b-LR-10 b-T-5 between">
              <template v-if="!isShowAllTask" >
                <p class="middle b_FS-14"><span class="dot success"></span><span class="b-L-4 c_6">任务名称</span></p>
                <div class=" b_FS-14 c_11">
                  {{ taskDetail.taskName }}
                  <img @click.self="isShowAllTask = true" class="tran" src="../../../assets/img/icon-slide downward.png"  alt="">
                </div>
              </template>
              <template v-if="isShowAllTask" >
                <p class="middle b_FS-14 "><span class="dot success"></span><span class="b-L-4 c_6">任务名称</span></p>
                <img  @click.self="isShowAllTask = false"  class="tran-up" src="../../../assets/img/icon-slide downward.png"  alt="">
              </template>
            </div>
            <!--<transition-->
            <!--name="top"-->
            <!--&gt;-->
            <div class="b-LR-20 b-TB-5 b_font-PFR bounceIn animated"  v-if="isShowAllTask"  >
              <div class="c_11 b_FS-12 b-B-10">
                {{ taskDetail.taskName }}
              </div>
              <div class="c_6 b_FS-14">
                任务描述
              </div>
              <div class="c_11 b_FS-12 b-B-10">
                {{ taskDetail.taskDesc }}
              </div>
              <div class="c_6 b_FS-14">
                验收标准
              </div>
              <div class="c_11 b_FS-12 b-B-5">
                {{ taskDetail.checkStandard }}
              </div>
            </div>
            <!--</transition>-->
          </div>

        </div>

        <div class="b-LR-10">
          <div class="panel-dot bottom-panel c_white-bg ">
            <div class="b-LR-10 b-TB-5 text-main b_font-PFM between middle">
              <div  class="date c_11 text-center">
                <div >
                  {{ initDate(taskDetail.startTime).date }}
                </div>
                <div class="b_FS-12"
                >开始时间</div>
              </div>
              <div class="line c_7-bg "></div>
              <div  class="date c_11 text-center">
                <div >
                  {{ initDate(taskDetail.endTime).date }}
                </div>
                <div class="b_FS-12"
                >结束时间</div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <img @click.prevent src="../../../assets/img/image-background.png" alt="" class="bottom-bg">
    </div>
  </div>

</template>
<script type="text/babel">

  // services
  import { Convent, Cos } from '@/services'
  // modules " upload image"
  import upload from './upload-2.js'
  export default{
    data(){
      return{
        mode: 'look', // look edit
        newSectionVal : '' ,
        todayDate: '',
        todayTime : '',
        processData:[],
        isShowAllTask : false ,
        taskDetail : {}, // 任务详情

      }
    },
    mixins:[ upload ] ,
    mounted(){
      var dateObj = this.initDate()
      this.todayDate = dateObj.date
      console.log(dateObj.time)
      this.todayTime = dateObj.time
      const mode = this.$route.query.mode
      if(mode) this.mode = mode
      this.getProcessList()

      this.initCos()
      //this.initCos2()
//      Cos.getTecentCos().then(res=>{
//        const { data } = res
//        this.cosConfigObj = data
//      })
    },
    methods:{

      initDate(d = null ){
        if(!d){
          d = new Date()
        }
        if(d && typeof d == 'string' ){
          d = new Date(Number(d))
        }
        var m = d.getMonth()+1
        var day = d.getDate()

        var h = d.getHours()
        var min = d.getMinutes()
         var time =  ( h <10 ? ('0'+ h ): h )+ ':' + (min < 10 ? ('0' + min) : min)

        var date = ( m <10 ? ('0'+ m ): m )+ '/' + (day < 10 ? ('0' + day) : day)
        return {
          time ,
          date
        }
//        return ( m <10 ? ('0'+ m ): m )+ '/' + (day < 10 ? ('0' + day) : day)
      },
      async addTaskProcess(){
        const progressDesc =  this.newSectionVal
        // 表单验证
        if( !progressDesc ){ this.$toast.show('请填写文字') ; return }
        if( !this.imagesFiles.length ){ this.$toast.show('请上传图片'); return }
          // from upload.js
          var image = []
          for( let i = 0; i< this.imagesFiles.length ;i++ ) {
            let img = this.imagesFiles[i]
            let index= i
            const name = img.name
//            const name = img.name.replac(/\.png|\.jpg|\.jpeg/,"")
            let newUrl = await this.uploadToCloud(img.blob, name, index)
            image.push(newUrl)
          }
         Convent.addTaskProcess({
           progressDesc : this.newSectionVal ,
           taskId : this.$route.query.taskId ,
           images : image,
           list : false
         }, true ).then(res=>{

           this.previewImages = []
           this.imagesFiles = []
           this.newSectionVal = ''
           this.getProcessList()

         })
         .catch(res=>{
           this.$toast.show(res.msg,2000)
         })
          console.log( image )


      },
      // 获取进度列表后的处理
      getProcessList(){
        Convent.taskProcessList({
          taskDetil : 1 ,
          taskId : this.$route.query.taskId
        }).then(res=>{
          const processData = res.data.taskList
          this.taskDetail = res.data.taskDetil

          this.processData =  processData.map((process, key)=>{
            const createTime = new Date( Number(process.updateTime) )
            const { time ,date } =  this.initDate(createTime)
            const _imgsStr = process.progressImage
            var _imgs
            try{
              // 旧数据错误
               _imgs = JSON.parse( _imgsStr )
            }catch(err) {
               _imgs = []
            }
            process.time = time
            process.date = date
            process.imgs = _imgs
            delete process.progressImage
            delete process.createTime
            delete process.updateTime
            return process
            //process
          })
        })
      },
      deleteTask(key ,progressId){
        console.log(progressId)
        Convent.deleteTaskProcess({
          progressId
        }).then(res=>{
          this.processData.splice(key,1 )
        })
      },

    }

  }
</script>
