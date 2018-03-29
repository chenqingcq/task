import vue from 'vue'
import getInstance from './getInstance'

function _getInstance(options, type) {
  if (Object.prototype.toString.call(options).slice(8, -1) === 'Object') {
    options.type = type;
    getInstance(options)
  } else {
    getInstance({
      type: type
    })
  }
}
vue.prototype.$dialog = {
  notice: function (options) {
    _getInstance(options, 'notice')
  },
  info: function (options) {
    _getInstance(options, 'info')
  },
  close: function () {
    _getInstance({
      close: 'close'
    })
  }
}
