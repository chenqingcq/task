import * as types from './mutation-types'

/**
 * * permission
 * */
export const setCurrentProject = function ({commit, state}, data) {
  commit(types.SET_CURRENT_PROJECT, data)
}

// user token

export const setUserType = function ({commit, state}, {type}) {
  commit(types.SET_USER_TYPE, type)
}

export const setUserToken =function({commit,state},token){
  commit(types.SET_USER_TOKEN,token)
}
