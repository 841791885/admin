import * as actionTypes from './constants'

import { getPageList } from '@/service/main/system/system'

export const changeLoadingAction = (loading) => ({
  type: actionTypes.CHANGE_LOADING,
  loading
})

const changeEntireRolesAction = (entireRoles) => ({
  type: actionTypes.CHANGE_ENTIRE_ROLES,
  entireRoles
})

const changeEntireDepartmentsAction = (entireDepartments) => ({
  type: actionTypes.CHANGE_ENTIRE_DEPARTMENTS,
  entireDepartments
})

const changeEntireMenusAction = (entireMenus) => ({
  type: actionTypes.CHANGE_ENTIRE_MENUS,
  entireMenus
})

//获取部门、角色、菜单列表
export const getInitalData = () => {
  return async (dispatch) => {
    const { list: entireRoles } = await getPageList('/role/list', { offset: 0, size: 100 })
    const { list: entireDepartments } = await getPageList('/department/list', {
      offset: 0,
      size: 100
    })
    const { list: entireMenus } = await getPageList('/menu/list', {})
    console.log('entireRoles', entireRoles)
    console.log('entireDepartments', entireDepartments)
    console.log('entireMenus', entireMenus)

    dispatch(changeEntireRolesAction(entireRoles))
    dispatch(changeEntireDepartmentsAction(entireDepartments))
    dispatch(changeEntireMenusAction(entireMenus))
  }
}
