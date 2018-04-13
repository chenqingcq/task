import {Toast, Indicator} from 'mint-ui'

// 显示的时间
const showTime = 1500

export default {
  
  // 显示提示信息 ==========================================
  showToast(message, type = '', duration = showTime, position = 'middle') {
    let iconClass = ''
    switch (type) {
      case 'success':
        iconClass = 'iconfont success icon-success'
        break
      case 'info':
        iconClass = 'iconfont info icon-093info'
        break
      case 'error':
        iconClass = 'iconfont remove-circle icon-removecircle'
        break
    }
    Toast({
      message,
      position,
      duration,
      iconClass,
      className: 'yb-hud'
    });
  },
  
  // 显示成功提示
  showSuccess(msg, type = 'success') {
    this.showToast(msg, type)
  },
  
  // 显示成功提示
  showInfo(msg, type = 'info') {
    this.showToast(msg, type)
  },
  
  // 显示成功提示
  showError(msg, type = 'error') {
    this.showToast(msg, type)
  },
  
  // 显示加载圈圈 ============================================
  showIndicator(text = '', type = 0) {
    let spinnerType = 'snake'
    switch (type) {
      case 1:
        spinnerType = 'fading-circle'
        break
      case 2:
        spinnerType = 'double-bounce'
        break
      case 3:
        spinnerType = 'triple-bounce'
        break
    }
    Indicator.open({
      text,
      spinnerType
    })
  },
  
  // 关闭进度
  closeIndicator () {
    Indicator.close();
  }
}
