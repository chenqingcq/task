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
  }
}

export default matutaions;
