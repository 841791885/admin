import * as actionType from './constants'

import {
  getPageList,
  deletePageData,
  newPageData,
  editPageData
} from '@/service/main/system/system'

const changeUsersTotalCountAction = (usersTotalCount) => ({
  type: actionType.CHANG_USERS_TOTAL_COUNT,
  usersTotalCount
})

const changeUsersListAction = (usersList) => ({
  type: actionType.CHANG_USERS_LIST,
  usersList
})

const changeDepartmentTotalCountAction = (departmentTotalCount) => ({
  type: actionType.CHANG_DEPARTMENT_TOTAL_COUNT,
  departmentTotalCount
})

const changeDepartmentListAction = (departmentList) => ({
  type: actionType.CHANG_DEPARTMENT_LIST,
  departmentList
})

const changeRoleTotalCountAction = (roleTotalCount) => ({
  type: actionType.CHANG_ROLE_TOTAL_COUNT,
  roleTotalCount
})

const changeRoleListAction = (roleList) => ({
  type: actionType.CHANG_ROLE_LIST,
  roleList
})

const changeMenuListAction = (menuList) => ({
  type: actionType.CHANG_MENU_LIST,
  menuList
})

export const getPageListData = (payload) => async (dispatch) => {
  const pageName = payload.pageName
  const pageUrl = `/${pageName}/list`
  if (pageUrl.length === 0) return
  const { totalCount, list } = await getPageList(pageUrl, payload.queryInfo)

  console.log('list', list)
  console.log('totalCount', totalCount)
  switch (pageName) {
    case 'users':
      dispatch(changeUsersTotalCountAction(totalCount))
      dispatch(changeUsersListAction(list))
      break
    case 'department':
      dispatch(changeDepartmentTotalCountAction(totalCount))
      dispatch(changeDepartmentListAction(list))
      break
    case 'role':
      dispatch(changeRoleTotalCountAction(totalCount))
      dispatch(changeRoleListAction(list))
      break
    case 'menu':
      dispatch(changeMenuListAction(list))
      break
    default:
      break
  }
}

export const deletePageListItem = (payload) => async (dispatch) => {
  const pageName = payload.pageName
  const deleteId = payload.id
  if (!deleteId) return
  const pageUrl = `/${pageName}/${deleteId}`
  await deletePageData(pageUrl)
  dispatch(
    getPageListData({
      pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
  )
}

export const newPageListItem = (payload) => async (dispatch) => {
  const pageName = payload.pageName
  const pageUrl = `/${pageName}`
  const listItemData = payload.listItemData
  await newPageData(pageUrl, listItemData)
  dispatch(
    getPageListData({
      pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
  )
}

export const editPageListItem = (payload) => async (dispatch) => {
  const pageName = payload.pageName
  const editId = payload.id
  if (!editId) return
  const pageUrl = `/${pageName}/${editId}`
  const listItemData = payload.listItemData
  await editPageData(pageUrl, listItemData)
  dispatch(
    getPageListData({
      pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
  )
}
