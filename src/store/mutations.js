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
  [types.SET_TASK_EXECUTOR](state, selected) {
    let {
      nickname,
      userId,
      userIcon,
      isSelected,
      progress,
      comments,
      updated
    } = selected;
    state.taskExecutor.nickname = nickname;
    state.taskExecutor.userId = userId;
    state.taskExecutor.userIcon = userIcon;
    state.taskExecutor.isSelected = isSelected;
    state.taskExecutor.progress = progress;
    state.taskExecutor.comments = comments;
    state.taskExecutor.updated = updated;
  },
  [types.SET_TASK](state, val) {
    let {
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
    state.taskSetting.taskTheme = taskTheme;
    state.taskSetting.taskName = taskName;
    state.taskSetting.taskDesc = taskDesc;
    state.taskSetting.startTime = startTime;
    state.taskSetting.endTime = endTime;
    state.taskSetting.standard = standard;
    state.taskSetting.taskExecutor = taskExecutor;
    state.taskSetting.allowedCreate = allowedCreate;
    state.taskSetting.ispublic = ispublic;
    state.taskSetting.membersCanSee = membersCanSee;
    state.taskSetting.othersCanSee = othersCanSee;
  }
}

export default matutaions
