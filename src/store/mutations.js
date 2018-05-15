import * as types from "./mutation-types";
import state from "./state";

const matutaions = {
  [types.SET_USER_TYPE](state, type) {
    state.user.type = type
  },
  user(state, data) {
    state.user.headImage = data.headImage
    state.user.username = data.nickname
    state.user.token = data.token
    state.user.userId = data.userId
  },
  [types.SET_USER_TOKEN](state, token) {
    state.user.token = token
  },
  setToken (state, token) {
    state.token = token
  },
  [types.SET_WECHAT_CONFIG](state, config) {
    state.wechatConfig = config
  },
  [types.SET_ENTRY_URL](state, url) {
    state.entryURL = url
  },
}

export default matutaions;
