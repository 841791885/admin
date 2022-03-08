import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import WHForm from '@/components/wh-form/wh-form'
import WHTable from '@/components/wh-table/wh-table'
import WHModal from '@/components/wh-modal/wh-modal'

import { usePageSearch } from '@/hooks/usePageSearch'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { RoleWrapper } from './style'
const User = memo(() => {
  const [getPageDataRef, handleQueryClick, handleResetClick] = usePageSearch()
  // 获取表格数据
  const { pageListData, pageListTotalCount } = useSelector((state) => ({
    pageListData: state.system.roleList,
    pageListTotalCount: state.system.roleTotalCount
  }))
  return (
    <RoleWrapper>
      <WHForm
        {...searchFormConfig}
        department
        queryBtnClick={handleQueryClick}
        resetBtnClick={handleResetClick}
      ></WHForm>
      <WHTable
        pageName="role"
        ref={getPageDataRef}
        pageListData={pageListData}
        pageListTotalCount={pageListTotalCount}
        {...contentTableConfig}
      ></WHTable>
      <WHModal></WHModal>
    </RoleWrapper>
  )
})

export default User
