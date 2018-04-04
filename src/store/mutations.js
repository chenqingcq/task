import * as types from './mutation-types'
import state from './state';

const matutaions = {
  [types.SET_USER_TYPE](state, type) {
    state.user.type = type
  },
  bevip(state) {
    state.user.isvip = 1;
  },
  user(state, data) {
    state.user.headImage = data.headImage
    state.user.username = data.username
    state.user.token = data.token
    state.user.userId = data.userId
  },
  [types.SET_TASK_EXECUTOR](state, val) {
    console.log(arguments)
    let i = 0;
    for (i; i < state.taskExecutor.length; i++) {
      if (i != val.index) {
        state.taskExecutor[i].isSelected = false;
      }
    }
    state.taskExecutor[val.index].isSelected = !val.isSelected;
  },
  [types.SORT_TASK_EXECUTOR](state, type) {
    state.taskExecutor.sort((a, b) => {
      return (b[type] - a[type])
    })
  },
  [types.SET_TASK](state, val) {
    let {
      id,
      taskTheme,
      taskName,
      taskDesc,
      startTime,
      endTime,
      standard,
      taskExecutor,
      allowedCreate,
      ispublic,
      membersCanSee,
      othersCanSee
    } = val;
    state.taskSetting.push({
      id,
      taskTheme,
      taskName,
      taskDesc,
      startTime,
      endTime,
      standard,
      taskExecutor,
      allowedCreate,
      ispublic,
      membersCanSee,
      othersCanSee
    });
  }
}

export default matutaions
