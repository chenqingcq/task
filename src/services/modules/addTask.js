/**
 * Created by hejiahui on 2018/4/16.
 */

import {get, post, put, upImage, deleter} from '@/services/ajax/netaxios'

// 项目
class AddTask {
  /**
   * 创建项目
   * */
  addTask(opt, isShowFullLoading = true) {
    const url = '/api/task'
    const params = opt || {}
    return post(
      url, params, isShowFullLoading
    )
  }
}

export default new AddTask()
