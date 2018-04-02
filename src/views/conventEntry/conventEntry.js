/**
 * Created by hejiahui on 2018/3/28.
 */

import slideBar from './slideBar.vue'
export default {
  data(){
    return{
      isShowSlideBar : false ,
      // 是否月模式
      isMonthMode :true ,
      // 准时完成
      completeLogo: require('@/assets/img/image-trophy.png') ,
      // 提前完成
      aheadLogo: require('@/assets/img/image-medal.png'),

      projectList : ['11112']
    }
  },
  components:{
    slideBar
  },
  methods:{
    // 周／月
    statusChange(status){

      this.isMonthMode = status
    },
    addTask(){
      if( this.projectList.length == 0 ){
        this.$dialog.info({
          placeholder : '请填写项目名称',
        })
      }
      else{
        //this.$loading()
        //setTimeout(()=>{
        //  this.$loadingClose()
        //},1000)
        this.$router.push('/addTaskSetting')
      }
    }
  }
}
