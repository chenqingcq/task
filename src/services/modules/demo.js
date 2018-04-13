/**
 * Created by hejiahui on 2018/4/13.
 */

import {get, post, put, upImage} from '@/services/ajax/netaxios'


class Demo {
  /**
   * 用于本地的登陆
   * */
  devUserLogin(opt, isShowFullLoading = true) {
    debugger
    const url = '/v1/user/login-test'
    const params = opt || {}
    return post(
      url, params, isShowFullLoading
    )
  }
}

export default new Demo()
