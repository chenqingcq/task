/**
 * Created by hejiahui on 2018/4/10.
 */

import * as types from "../mutation-types";

export default {
  state: {
    // 角色
    userInfo : {} ,
    project:{
      role : 'creator' ,// creator 创建者 、operator 执行者 、visitor 访问者
      projectId : '', // 项目id
      projectName : '',

    }
  },
  mutations :{
    [types.SET_CURRENT_PROJECT](state, projectInfo ){
      const info = projectInfo
      if( typeof info !== 'object') {
        return
      }
      state.project = info
    }

  }

}
