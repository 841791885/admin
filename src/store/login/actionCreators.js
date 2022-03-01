import localCache from '@/utils/cache'

import * as actionTypes from './constants'
import { accountLoginRequest, getUserById, getUserMenus } from '@/service/login/login'

export const changeLoginTokenAction = (token) => ({
  type: actionTypes.CHANGE_TOKEN,
  token
})
export const changeUserInfoAction = (userInfo) => ({
  type: actionTypes.CHANGE_USER_INFO,
  userInfo
})
export const changeUserMenusAction = (userMenus) => ({
  type: actionTypes.CHANGE_USER_MENUS,
  userMenus
})

export const accountLogin = (loginInfo, History) => {
  return async (dispatch) => {
    const res = await accountLoginRequest(loginInfo)
    console.log(res, 'res')
    const { token, id } = res
    dispatch(changeLoginTokenAction(token))
    localCache.setCache('token', token)

    const userInfo = await getUserById(id)
    dispatch(changeUserInfoAction(userInfo))
    localCache.setCache('userInfo', userInfo)

    const userMenus = await getUserMenus(userInfo.role.id)
    console.log(userMenus, 'usermenus')
    dispatch(changeUserMenusAction(userMenus))
    localCache.setCache('userMenus', userMenus)

    History.push('/main')
    //想在这里写一个history.push()  然后不能用usehistory()
    //是使用react - router - config库的路由  老师请问一下有什么方法也可以拿到这个history对象吗
  }
}
