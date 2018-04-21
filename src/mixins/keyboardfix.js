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
    }
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
      this.stv = setInterval(()=>{
        // 让页面滚动到底部
        this.$refs.text.scrollIntoView(isIOS())
      },200)
      //document.getElementById('mao').scrollIntoView(false)
    }
  }
}
