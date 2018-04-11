import * as types from './mutation-types'

export const setUserType = function ({commit, state}, {type}) {
  commit(types.SET_USER_TYPE, type)
}

/**
 * * permission
 * */
export const setCurrentProject = function ({commit, state}, data) {
  commit(types.SET_CURRENT_PROJECT, data)
}
