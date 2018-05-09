import axios from 'axios'
import ErrorMessage from './ErrorMessage'
import UserModel from '@/common/js/model/userModel'
import {
  successCode
} from '../modules/config'
import load from '@/common/base/loading'
import Vue from 'vue'
Vue.use(load)

const yb_print = console.log
// 创建实例，基本配置
const axiosInstance = axios.create({
  // invitation.com/v1/api/invitations/count
  // baseURL: '//111.230.249.23:8087/v1/', //正式,
  // baseURL: '//localhost:8087/v1/', //测试服务器
  // baseURL: '//rk4k3z.natappfree.cc/v1/', //微信测试,
  // baseURL: '//192.168.0.126:8087/v1/', //测试服务器
  // baseURL: '//bf4c5e.natappfree.cc/v1/', //测试服务器
  //  baseURL: '//192.168.0.123:3010/taskapi/v1/',
  baseURL: 'http://dis.ccnfgame.com/taskapi/v1/',
  //baseURL: '//share.s1.natapp.cc/v1/', //测试服务器
  timeout: 15000
})

// 拦截器（请求拦截）
axiosInstance.interceptors.request.use((config) => {
  // const token = window.getCookie('session')
  // config.data = JSON.stringify(config.data)
  yb_print('================= url ==================')
  yb_print(config.method + '  -  ' + config.url)
  yb_print('================= 参数 ==================')
  if (config.method == "get") {
    yb_print(config.params)
  } else {
    yb_print(config.data)
  }
  return config
})

// 拦截器（响应拦截）
axiosInstance.interceptors.response.use((res) => {

  yb_print('================= responce ==================')
  yb_print(res.data)
  // 将数据提前一个位置，便于获取
  const response = {
    data: res.data.data,
    code: res.data.code,
    msg: res.data.message,
    status: res.data.status,
    request: res.data.request,
    page: {
      pageNum: res.data.pageNum || 0,
      pageSize: res.data.pageSize || 0,
      isLoaded: true
      //isLoaded: res.data.isLoaded ? true :false
    }
  }
  res = {
    res,
    ...response
  }
  return res
})

// ======================== 注册 axios 原生 GET POST请求 =============================
// 注册 axios GET POST请求(可以直接使用axios请求)
// Vue.prototype.$get = axiosInstance.get
// Vue.prototype.$post = axiosInstance.post


// ======================== 创建网络隔离框架 GET POST请求 =============================




// 注册自定义GET请求(不需要的传token, 自动生成token)
export const get = function (url, params = {}, isShowFullLoading) {
  const authorization = UserModel.getSendToken()
  return new Promise((resolve, reject) => {
    isShowFullLoading && Vue.prototype.$loading({
      duration: 500
    })
    axiosInstance.get(url, {
      // 请求参数
      params: params,
      // 请求头
      headers: {
        'Authorization': authorization
      },
    }).then((res) => {
      // 成功回调

      if (successCode.has(res.code)) {
        // 已经处理过状态，所以不用管状态，直接返回数据
        resolve(res)
      } else {
        // 服务状态出现问题
        reject(res)
      }
    }).catch((err) => {
      console.log(err)
      // 状态不是200
      reject(err.response ? err.response.data : ErrorMessage.timeOut)
    })
  })
}

// 注册自定义deleter请求(不需要的传token, 自动生成token)
export const deleter = function (url, params = {}) {
  const authorization = UserModel.getSendToken()
  return new Promise((resolve, reject) => {
    axiosInstance.delete(url, params, {
      // 请求头
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authorization
      },
    }).then((res) => {
      // 成功回调
      if (successCode.has(res.code)) {
        // 已经处理过状态，所以不用管状态，直接返回数据
        resolve(res)
      } else {
        // 服务状态出现问题
        reject(res)
      }
    }).catch((err) => {
      // 状态不是200
      reject(err.response ? err.response.data : ErrorMessage.timeOut)
    })
  })
}

// 注册自定义POST请求(不需要的传token, 自动生成token)
export const post = function (url, params = {}, isShowFullLoading) {
  const authorization = UserModel.getSendToken()
  isShowFullLoading && Vue.prototype.$loading()
  return new Promise((resolve, reject) => {
    axiosInstance.post(url, params, {
      headers: {
        'Authorization': authorization
      },
    }).then((res) => {
      Vue.prototype.$loadingClose()
      // 成功回调
      if (successCode.has(res.code)) {
        // 已经处理过状态，所以不用管状态，直接返回数据
        resolve(res)
      } else {
        // 服务状态出现问题
        reject(res)
      }
    }).catch((err) => {
      Vue.prototype.$loadingClose()
      // 状态不是200
      reject(err.response ? err.response.data : ErrorMessage.timeOut)
    })
  })
}

// 注册自定义PATCH请求(不需要的传token, 自动生成token)
export const patch = function (url, params = {}) {
  const authorization = UserModel.getSendToken()
  return new Promise((resolve, reject) => {
    axiosInstance.patch(url, params, {
      headers: {
        'Authorization': authorization
      },
    }).then((res) => {
      // 成功回调
      if (successCode.has(res.code)) {
        // 已经处理过状态，所以不用管状态，直接返回数据
        resolve(res)
      } else {
        // 服务状态出现问题
        reject(res)
      }
    }).catch((err) => {
      // 状态不是200
      reject(err.response ? err.response.data : ErrorMessage.timeOut)
    })
  })
}

// 注册自定义PUT请求(不需要的传token, 自动生成token)
/**
 *
 * @param {*请求地址} url
 * @param {*} {id,params } 以对象方式传入
 */
export const put = function (url, {
  id,
  params = {}
}) {
  const authorization = UserModel.getSendToken()
  return new Promise((resolve, reject) => {
    let rurl = url
    if (id != undefined && id != '') {
      rurl = url + '/' + id
    }
    axiosInstance.put(rurl, params, {
        headers: {
          'Authorization': authorization
        },
      }).then((res) => {
        // 成功回调
        if (successCode.has(res.code)) {
          // 已经处理过状态，所以不用管状态，直接返回数据
          resolve(res)
        } else {
          // 服务状态出现问题
          reject(res)
        }
      })
      .catch((err) => {
        // 状态不是200
        reject(err.response ? err.response.data : ErrorMessage.timeOut)
      })
  })
}

// 进度图片上传
export const formDataPost = function (url, options = {}, isShowFullLoading = false) {
  const imageFormats = new Set(['jpg', 'png', 'JPEG', 'GPG', 'jpeg', 'heic'])
  console.log(options)
  const number = options['images'].length
  // 创建form对象
  let params = new FormData()
  // 通过append向form对象添加数据
  for (let i in options) {
    if (i == 'images') {
      const files = options[i]
      let _output = []
      for (let j = 0, file; file = files[j]; j++) {
        let imageSuffix = file.name.split('.').pop()
        if (!imageFormats.has(imageSuffix)) {
          return new Promise((resolve, reject) => {
            reject(ErrorMessage.imageFormatErr)
          })
        }
        // 判断图片大小，超出后直接返回
        let fileSize = file.size
        if (fileSize > (5 * 1024 * 1024)) {
          return new Promise((resolve, reject) => {
            reject(ErrorMessage.imageSizeErr)
          })
        }
        //if( files.length == 1 ){
        params.append(i, file, file.name)
        //}
      }
    } else {
      params.append(i, options[i])
    }
  }
  // 添加token
  const authorization = UserModel.getSendToken()
  return new Promise((resolve, reject) => {
    if (number && isShowFullLoading) uploadProcess(number)
    axiosInstance.post(url, params, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': authorization
        }
      }).then((res) => {
        // 成功回调
        if (successCode.has(res.code)) {
          // 已经处理过状态，所以不用管状态，直接返回数据
          resolve(res)
        } else {
          // 服务状态出现问题
          reject(res)
        }
      })
      .catch((err) => {
        // 状态不是200
        reject(err.response ? err.response.data : ErrorMessage.timeOut)
      })
  })
}


// 单图片上传
export const upImage = function (url, {
  name,
  e
}) {
  const self = this
  const file = e.target.files[0]
  // 常见图片格式
  const imageFormats = new Set(['jpg', 'png', 'JPEG', 'GPG', 'jpeg', 'heic'])
  const imageSuffix = file.name.split('.').pop()
  // 如果图片格式不对直接返回
  if (!imageFormats.has(imageSuffix)) {
    return new Promise((resolve, reject) => {
      reject(ErrorMessage.imageFormatErr)
    })
  }
  // 判断图片大小，超出后直接返回
  const fileSize = file.size
  if (fileSize > (5 * 1024 * 1024)) {
    return new Promise((resolve, reject) => {
      reject(ErrorMessage.imageSizeErr)
    })
  }

  // 创建form对象
  let params = new FormData()
  // 通过append向form对象添加数据
  params.append('images', file, file.name)
  // 添加token
  const authorization = UserModel.getSendToken()
  return new Promise((resolve, reject) => {
    axiosInstance.post(url, params, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': authorization
        }
      }).then((res) => {
        // 成功回调
        if (res.code == 1) {
          // 已经处理过状态，所以不用管状态，直接返回数据
          resolve(res)
        } else {
          // 服务状态出现问题
          reject(res)
        }
      })
      .catch((err) => {
        // 状态不是200
        reject(err.response ? err.response.data : ErrorMessage.timeOut)
      })
  })
}

// 图片上传2
export const upFileBlobData = function (url, {
  name,
  blob
}) {
  // 创建form对象
  let params = new FormData()
  // 通过append向form对象添加数据
  params.append(name, blob)
  // 添加token
  const authorization = UserModel.getSendToken()
  return new Promise((resolve, reject) => {
    axiosInstance.post(url, params, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': authorization
        }
      }).then((res) => {
        // 成功回调
        if (successCode.has(res.code)) {
          // 已经处理过状态，所以不用管状态，直接返回数据
          resolve(res)
        } else {
          // 服务状态出现问题
          reject(res)
        }
      })
      .catch((err) => {
        // 状态不是200
        reject(err.response ? err.response.data : ErrorMessage.timeOut)
      })
  })
}

// 上传监控
const uploadProcess = function (number) {
  var title = 0
  var timer = setInterval(() => {
    console.log(title)

    if (title++ >= number) {
      console.log(title)
      Vue.prototype.$loadingClose()
      clearInterval(timer)
    } else {
      Vue.prototype.$loading({
        title: `已上传第 ${title} 张...`,
      })
    }
  }, 500)
}
