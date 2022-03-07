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

export const getPageListData = (payload) => {
  return async (dispatch) => {
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
    }
  }
}
