/**
 * Created by hejiahui on 2018/4/20.
   * fixed ios 键盘顶住input弹起bug
 *
 */

export default {
  data(){
    return {
      // 菜单显示到什么滚动位置
      bodyScrol: 0,
      isFocus : false
    }
  },
  computed:{
    styles(){
      return {

        bottom: '-' + this.bodyScrol + 'px',
        stv : null
      }
    },
    isIOSPhone() {
      return this.isIOS()
    },
    isIOS11phone() {
      return this.isIOS11()
    },
    isIOS11_2phone() {
      return this.isIOS11()
    }
  },
  beforeDestroy(){
    this.clearIpt()
  },
  methods: {
    /**
     * 清除键盘的置顶事件
     * */
    blurInput(){
      this.isFocus = false
      this.$refs.text.blur()
      this.clearIpt()
    },
    clearIpt() {
      console.log('clear')
      clearInterval(this.stv)
    },
    setToBottom(){
      document.getElementById('mao').scrollIntoView(false)
      // 设置弹出键盘时工具栏位置
      this.bodyScrol = document.body.scrollTop
    },
    setPageToBottom(){
      this.isFocus = true
      function isIOS (){
        var u = navigator.userAgent
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
        return isiOS
      }
      if( isIOS() ){

        var u = navigator.userAgent
        var isIos11 = navigator.userAgent.indexOf('11_') > -1
        if( isIos11 ){
          this.stv = setInterval(()=>{
            //alert( isIos11 )
            // 让页面滚动到底部
            this.$refs.text.scrollIntoView(true)

            //window.scrollTo(0,10000)
          },200)
        }else{
          this.stv = setInterval(()=>{
            //alert( isIos11 )
            // 让页面滚动到底部
            this.$refs.text.scrollIntoView(true)

            //window.scrollTo(0,10000)
          },200)
        }

      }

      //document.getElementById('mao').scrollIntoView(false)
    },
    isIOS11 (){
      var u = navigator.userAgent
      var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
      var rep = /11\_(0|1|2)/
      var isIOS11_012 = rep.test(u)
      return isIOS && isIOS11_012
    },
    isIOS11_3higher (){

      var higher =  !this.isIOS11()
      return higher
    },
    isIOS (){
      var u = navigator.userAgent
      //OS11
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
      return isiOS
    }
  }
}
