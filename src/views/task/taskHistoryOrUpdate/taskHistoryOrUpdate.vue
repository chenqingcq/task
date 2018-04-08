<style lang="less" scoped>
  @import "./task.less";
</style>
<template>
  <div class="task">
    <div class="header" ></div>
    <div class="task-main">
      <div class="edit-section b_d-flex b_flex-center" v-if="mode=='edit'">
        <div class="timer-shaft">
          <div class="c_white-bg c_primary b_FS-18 b_font-PFM text-center">
            {{ todayTime }}
          </div>
          <div class="b_FS-14 c_7 b_font-PFR text-center">{{ todayDate }}</div>
          <div class="light doing"></div>
          <div class="link-dot"></div>
          <div class="link-dot"></div>
          <div class="link-dot"></div>
          <div class="link-dot"></div>
          <div class="link-dot"></div>
          <div class="link-dot"></div>
          <div class="link-dot b-MB-0"></div>

        </div>
        <div class="panel panel-conf edit">
          <textarea class="input" v-model="newSectionVal" name="" placeholder="记录一下吧" id="" cols="30" ></textarea>
          <!--<img v-if="newSectionVal.length ==0" class="placeholder-icon" src="../../../assets/img/icon-edit02.png" alt="">-->
          <div class="imgs-wrap b_FS-0 edit">
            <!--<img  src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" alt="">-->
            <!--<img  src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" alt="">-->
            <!--<img  src="https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b" alt="">-->
            <img src="../../../assets/img/icon-add01.png" alt="">
          </div>
          <div class="btn-small-primary b-MT-5">提交</div>
        </div>
      </div>
      <div class="timer-shaft" v-if="mode== 'edit'">
        <div class="link-dot b-MT-0"></div>
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
            <div class="text c_11">
              建筑的修饰布置工作，建筑的修饰布置工作。
            </div>
            <div v-if="process.imgs.length > 0" class="imgs-wrap b_FS-0">
              <template v-for="(img,val) in process.imgs ">
                <img  :src="img" alt="">
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



    </div>

    <img src="../../../assets/img/image-background.png" alt="" class="bottom-bg">
  </div>
</template>
<script>
  export default{
    data(){
      return{
        mode: 'edit', // look
        newSectionVal : '' ,
        todayDate: '',
        todayTime : '',
        processData:[{
          date: '03/20',
          time: '12:30',
          content: '布置展管入口处，以免人多发生意外，入口处，以免 人多发生意外。',
          imgs:[
            'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
            'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
            'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
          ]
        },
        {
          date: '03/20',
          time: '12:30',
          content: '布置展管入口处，以免人多发生意外，入口处，以免 人多发生意外。',
          imgs:[
            'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
            'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
            'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
          ]
        },
          {
          date: '03/20',
          time: '12:30',
          content: '布置展管入口处，以免人多发生意外，入口处，以免 人多发生意外。',
          imgs:[

          ]
        },{
          date: '03/20',
          time: '12:30',
          content: '布置展管入口处，以免人多发生意外，入口处，以免 人多发生意外。',
          imgs:[
            'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b'
          ]
        }]


      }
    },
    components:{

    },
    mounted(){
      var dateObj = this.initDate()
      this.todayDate = dateObj.date
      console.log(dateObj.time)
      this.todayTime = dateObj.time
    },
    methods:{
      initDate(){
        var d = new Date()
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
      }
    }

  }
</script>
