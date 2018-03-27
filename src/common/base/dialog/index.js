import vue from 'vue'
import getInstance from './getInstance'

function _getInstance(options, type) {
  if (Object.prototype.toString.call(options).slice(8, -1) === 'Object') {
    options.type = type;
    getInstance(options)
  }else{
    getInstance({
      type:type
    })
  }
}
vue.prototype.$dialog = {
  confirm: function (options) {
    _getInstance(options, 'confirm')
  },
  info: function (options) {
    _getInstance(options, 'info')
  },
  close:function(){
    _getInstance({
      close:'close'
    })
  }
}
