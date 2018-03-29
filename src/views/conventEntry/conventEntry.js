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

    }
  },
  components:{
    slideBar
  },
  methods:{
    statusChange(status){

      this.isMonthMode = status
    }
  }
}
