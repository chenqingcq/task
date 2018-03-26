import * as types from './mutation-types'

const matutaions = {
  [types.SET_USER_TYPE](state, type) {
    state.user.type = type
  },
  bevip(state){
      state.user.isvip=1;
  },
  user (state, data) {
    state.user.headImage = data.headImage
    state.user.username = data.username
    state.user.token = data.token
    state.user.userId = data.userId
  }
}

export default matutaions
