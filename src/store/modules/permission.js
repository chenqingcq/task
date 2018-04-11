/**
 * Created by hejiahui on 2018/4/10.
 */

import * as types from "../mutation-types";

export default {
  state: {
    // 角色
    userInfo : {} ,
    project:{
      role : 'visitor' ,// creator 创建者 、operator 执行者 、visitor 访问者
      id : '0', // 项目id
      themeName : '测试项目',

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
