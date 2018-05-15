/**
 * Created by hejiahui on 2018/5/3.
 */

(function() {

  if(/Android [4-8]/.test(navigator.appVersion)) {
    window.addEventListener("resize", function() {
      //alert(1)
      if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
        window.setTimeout(function() {
          document.activeElement.scrollIntoViewIfNeeded();
          document.activeElement.scrollIntoView(false); //旧版安卓机处理
        },0);
      }
    })
  }
})()



