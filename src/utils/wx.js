/**
 * Created by hejiahui on 2018/4/20.
 */
import Vue from 'vue'

import wx from 'weixin-js-sdk' // 1.2.0

Vue.prototype.$wechat = wx
//点击图片调用微信预览  默认显示第一张
export const doWechatPreview = function(imglist = [], nowIndx = 0)  {
  console.log(imglist)
  console.log(nowIndx)
  var urls = []
  var current = ''
  var _self = this
  imglist.forEach(function (value, index) {
    urls.push(value)
    //urls.push(  sysConfig.baseImgUrl  + value.url + '?imageView2/2/w/' + value.width + '/h/' + value.height + '/q/85!')
  })
  current = urls[nowIndx]
  wx.ready(function(){
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    });
  });
}



const initWechatConfig =function (JSsdk) {
  console.log('开始进行微信初始化')
  // 初始化微信
  Vue.prototype.$wechat.config({
    ...JSsdk ,
    //...store.getters.weChatConfig, jdk
    jsApiList: [
      'getNetworkType',
      'checkJsApi',
      //'showAllNonBaseMenuItem',
      //'hideAllNonBaseMenuItem',
      //'onMenuShareTimeline',
      //'onMenuShareAppMessage',
      'previewImage',
      //'chooseImage',
      //'uploadImage',
      //'startRecord',
      //'stopRecord',
      //'onVoiceRecordEnd',
      //'playVoice',
      //'pauseVoice',
      //'stopVoice',
      //'onVoicePlayEnd',
      //'uploadVoice',
      //'downloadVoice',
      //'chooseWXPay'
    ]
  })

  // 错误捕捉
  Vue.prototype.$wechat.error(() => {
    console.log('微信初始化错误，进行记录错误次数')
    if (Vue.prototype.util.wechat.weChatHandle) {
      // 累加错误次数
      Vue.prototype.util.wechat.weChatHandle.errorCount += 1

      console.log('错误次数：' + Vue.prototype.util.wechat.weChatHandle.errorCount)

      if (Vue.prototype.util.wechat.weChatHandle.errorCount > 3) {
        Vue.prototype.util.confirm.tip('当前微信相关的注册已经失败3次，无法进行调用微信的部分接口')
      } else {
        // 重新注册
        if (store.getters.weChatConfig.signature) {
          Vue.prototype.util.wechat.initWechatConfig()
        } else {
          Vue.prototype.util.wechat.getWechatConfig(true)
        }
      }
    }
  })
  // config成功之后的操作
  Vue.prototype.$wechat.ready(function () {
    console.log('微信初始化完成 ---------------------------------------------------------> 1')
    console.log('微信初始化完成:' + Vue.prototype.util.wechat.weChatHandle.isConfig)
    // 记录微信config是否执行完成
    Vue.prototype.util.wechat.weChatHandle.isConfig = true

    console.log('微信初始化完成:' + Vue.prototype.util.wechat.weChatHandle.isConfig)

    Vue.prototype.$wechat.getNetworkType({
      success (res) {
        Vue.prototype.util.wechat.weChatHandle.networkType = res.networkType
      }
    })
  })
}
const install = function(JSsdk={}){
  initWechatConfig(JSsdk={})
}

export default {
  install ,
  doWechatPreview ,
}
