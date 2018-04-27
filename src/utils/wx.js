/**
 * Created by hejiahui on 2018/4/20.
 */
import Vue from 'vue'

import wx from 'weixin-js-sdk' // 1.2.0

import store from '@/store'

console.log(store)
import actions from '@/store/actions'

import HUD from '@/common/js/Extension/YBProgressHUD'

import { Wechat } from '@/services'

if( !Vue.prototype.$wechat ){
  Vue.prototype.$wechat = {
    install ,
    getWechatConfig ,
    doWechatPreview ,
    weChatHandle: {
      isConfig: false,
      errorCount: 0,
      networkType: null,
      trace: '' // 同于统计的标示参数
    },
    entryURL :""

  }
}



//点击图片调用微信预览  默认显示第一张
const doWechatPreview = function(imglist = [], nowIndx = 0)  {
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


const getWechatConfig = function(){
  const config = store.getters.getWechatConfig
  console.log('configg', config)
  if(config.signature) {
    console.log('已有configsign')
    Vue.prototype.$wechat.entryURL = store.getters.getEntryURL
    initWechatConfig(config)
    return
  }

  Wechat.configSign().then(res=>{
    const wxConfig = res.data.jssdk
    const wechatConfig = {
      appId: wxConfig.AppId, // 必填，企业号的唯一标识，此处填写企业号corpid
      timestamp: wxConfig.Timestamp, // 必填，生成签名的时间戳
      nonceStr: wxConfig.NonceStr, // 必填，生成签名的随机串
      signature: wxConfig.Signature,// 必填，签名，见附录1
    }
    const entryURL = res.data.entryUrl
    store.dispatch('setEntryURL', entryURL)
    store.dispatch('setWechatConfig', wechatConfig)
    Vue.prototype.entryURL = store.getters.getEntryURL
    initWechatConfig(wechatConfig)
  })
}

const initWechatConfig = function (JSsdk) {
  console.log('开始进行微信初始化')
  // 初始化微信
  wx.config({
    ...JSsdk ,
    //...store.getters.weChatConfig, jdk
    jsApiList: [
      'getNetworkType',
      'checkJsApi',
      'showAllNonBaseMenuItem',
      'hideAllNonBaseMenuItem',
      //'onMenuShareTimeline',
      'onMenuShareAppMessage',
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
  wx.error(() => {
    console.log('微信初始化错误，进行记录错误次数')
    if (Vue.prototype.$wechat.weChatHandle) {
      // 累加错误次数
      Vue.prototype.$wechat.weChatHandle.errorCount += 1

      console.log('错误次数：' + Vue.prototype.$wechat.weChatHandle.errorCount)

      if (Vue.prototype.$wechat.weChatHandle.errorCount > 3) {
        HUD.showError('当前微信相关的注册已经失败3次，无法进行调用微信的部分接口')
      } else {
        // 重新注册
        initWechatConfig(store.getters.getWechatConfig)
      }
    }
  })
  // config成功之后的操作
  wx.ready(function () {
    //console.log('微信初始化完成 ---------------------------------------------------------> 1')
    //console.log('微信初始化完成:' + wxwechat.weChatHandle.isConfig)
    //// 记录微信config是否执行完成
    //wxwechat.weChatHandle.isConfig = true
    //
    //console.log('微信初始化完成:' + wxwechat.weChatHandle.isConfig)
    //
    //wx.getNetworkType({
    //  success (res) {
    //    wxwechat.weChatHandle.networkType = res.networkType
    //  }
    //})
  })
}
/**
 * 分享给朋友
 * */
const onMenuShareAppMessage = (data)=> {
  wx.ready(function () {
    wx.onMenuShareAppMessage({
      title: data.title, // 分享标题
      desc: data.desc, // 分享描述
      link: data.link || Vue.prototype.$wechat.entryURL , // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: data.imgUrl, // 分享图标
      // type: data.type, // 分享类型,music、video或link，不填默认为link
      // dataUrl: data.info.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
      success: data.success, // 用户确认分享后执行的回调函数
      cancel: data.cancel, // 用户取消分享后执行的回调函数
    })
  })
}
/**
 * 分享到朋友圈
 * */
const onMenuShareTimeline = (data)=> {
  wx.ready(function () {
    wx.onMenuShareTimeline({
      title: data.title, // 分享标题
      link: data.link || Vue.prototype.$wechat.entryURL , // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: data.imgUrl, // 分享图标
      success: data.success, // 用户确认分享后执行的回调函数
      cancel: data.cancel, // 用户取消分享后执行的回调函数
    })
  })
}
/**
 * 微信分享入口
 * */
const weChatFX =  (data)=> {
  onMenuShareAppMessage(data)
  onMenuShareTimeline(data)
}


const install = function(JSsdk={}){
  initWechatConfig(JSsdk={})
}
Vue.prototype.$wechat = {
  install ,
  getWechatConfig ,
  weChatShare: weChatFX ,
  weChatHandle: {
    isConfig: false,
    errorCount: 0,
    networkType: null,
    trace: '' // 同于统计的标示参数
  },
  doWechatPreview ,

}

export default {
  install ,
  doWechatPreview
}
