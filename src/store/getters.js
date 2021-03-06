export const user = state => state.user
export const taskExecutors = state => state.task.taskExecutors
export const getTaskExecutor = state => state.task.taskExecutor
export const getTaskSettings = state => state.task.taskSettings
export const getTaskTheme = state => state.task.taskTheme
export const getTaskId = state => state.task.taskId
export const getUserId = state => state.task.userId
export const getUserRole = state => state.task.userRole



export const getToken = state => state.token

export const getProjectRole = state => state.permission.project.role
export const getProjectThemeName = state => state.permission.project.projectName
export const getProjectId = state => state.permission.project.projectId

export const getWechatConfig = state => state.wechatConfig
export const getEntryURL = state => state.wechatConfig
