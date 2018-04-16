import { User } from '@/services'
import {wx} from '@/services'
import BaseModel from './BaseModel'
import HUD from '../Extension/YBProgressHUD'
const FOO_KEY = Symbol.for('userModel');


class UserModel extends BaseModel{

  constructor () {
    super()
    // 用户的Token
    // this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJvcGVuaWQiOiJval95cXdlS1FFTVdQSnE3a042dUNURndqczJkIiwidXNlcklkIjoiOTcxNjQ4MzAzNTY3NDcwNTY0In0sImlhdCI6MTUyMDkyMTc2OCwiZXhwIjoxNTI2MTA1NzY4fQ.bsrOTrye4SX9KOyQfrV576cudMPUGAQ9b5oneRa7LFg'
    // this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJvcGVuaWQiOiJval95cXdlS1FFTVdQSnE3a042dUNURndqczJkIiwidXNlcklkIjoiOTcxNjQ4MzAzNTY3NDcwNTY0In0sImlhdCI6MTUyMDkyMTc2OCwiZXhwIjoxNTI2MTA1NzY4fQdlS1FFTVdQSnE3a042dUNURndqczJlIiwidXNlcklkIjoiOTcxNjQ4MzAzNTY3NDcwNTYzIn0sImlhdCI6MTUyMDkyMTgxNiwiZXhwIjoxNTI2MTA1ODE2fQ.UT1JsKKTufLyFhn3SJLyqF46wXMsWVnPMz0092GLx1Q'
   // this.token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJvcGVuaWQiOiJval95cXdlS1FFTVdQSnE3a042dUNURndqczJkIiwidXNlcklkIjoiOTcxNjQ4MzAzNTY3NDcwNTY0In0sImlhdCI6MTUyMDkyMTc2OCwiZXhwIjoxNTI2MTA1NzY4fQ.bsrOTrye4SX9KOyQfrV576cudMPUGAQ9b5oneRa7LFg'
    // this.token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJvcGVuaWQiOiJval95cXdlS1FFTVdQSnE3a042dUNURndqczJkIiwidXNlcklkIjoiOTcxNjQ4MzAzNTY3NDcwNTY0In0sImlhdCI6MTUyMDkyMTc2OCwiZXhwIjoxNTI2MTA1NzY4fQ.bsrOTrye4SX9KOyQfrV576cudMPUGAQ9b5oneRa7LFg
    // this.token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJvcGVuaWQiOiJval95cXdlS1FFTVdQSnE3a042dUNURndqczJlIiwidXNlcklkIjoiOTcxNjQ4MzAzNTY3NDcwNTYzIn0sImlhdCI6MTUyMDkyMTgxNiwiZXhwIjoxNTI2MTA1ODE2fQ.UT1JsKKTufLyFhn3SJLyqF46wXMsWVnPMz0092GLx1Q
    // this.token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJvcGVuaWQiOiJval95cXdlS1FFTVdQSnE3a042dUNURndqczJmIiwidXNlcklkIjoiOTcxNjQ4MzAzNTY3NDcwNTYyIn0sImlhdCI6MTUyMDkyMTg0NSwiZXhwIjoxNTI2MTA1ODQ1fQ.oFs0LKkcRgFb7VG36a13u_tXZoR0ZNood7NQv18ONFU
    // this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJvcGVuaWQiOiJval95cXdlS1FFTVdQSnE3a042dUNURndqczJsIiwidXNlcklkIjoiOTcxNjQ4MzAzNTY3NDcwNTYxIn0sImlhdCI6MTUyMDkyMTg2OSwiZXhwIjoxNTI2MTA1ODY5fQ.2knw7Y4zh_wZXOjgxCif0Xz8Jr89Vr-WOXajyg_3XSw"

    this.token =''
      // ============== 用户获取 token =============

    this.userid = ''
    this.channelcode = ''

    // ============== 用户获取 token ==============


    // string	用户昵称
    this.nickname = ''
    // string	用户头像url
    this.headImage = ''
    // string	用户ID
    this.userId = ''

    // 微信appid
    this.appId = ''
    // string	时间戳
    this.timestamp = ''
    //string	生成签名的随机串
    this.nonceStr = ''
    // string	签名
    this.signature = ''
  }

  // 获取发送数据的的token
  getSendToken () {
    return 'Bearer ' + this.token
  }

  // 获取用户信息
  getUserData (isLoad) {
    if (this.userId && !isLoad) {
      return Promise.resolve(this)
      return
    }
    return new Promise((resolve, reject) => {
      User.getUserData().then((data) => {
        this.setData(data)
        resolve(this)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  // 获取微信基本信息
  getWxBaseData (url) {
    wx.getWxBaseData(url).then((data) => {
      this.setData(data)
      this.getWxCode()
    }).catch((err) => {
      HUD.showError('获取用户数据失败')
    })
  }

  // 获取token
  getToken () {
    HUD.showSuccess('获取用户数据失败')
    return new Promise((resolve, reject) => {
      User.getToken({
        userid: this.userid,
        channelcode: this.channelcode
      }).then((data) => {
        this.token = data.token
        this.nickname = data.user.nickname
        this.headImage = data.user.headImage

        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  // 获取微信code值
  getWxCode () {
    wx.getWxCode({
      appid: this.appId,
      redirect_uri: encodeURI('https://baidu.com'),
      response_type: 'code',
      scope: 'snsapi_base',
      '#wechat_redirect': ''
    }).then((data) => {
      this.setData(data)
    }).catch((err) => {
      console.log(err)
      //HUD.showError('获取code失败')
    })
  }
}

if (!window[FOO_KEY]) {
  window[FOO_KEY] = new UserModel();
}

export default window[FOO_KEY]
