import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import WHForm from '@/components/wh-form/wh-form'
import WHTable from '@/components/wh-table/wh-table'
import WHModal from '@/components/wh-modal/wh-modal'

import { usePageSearch } from '@/hooks/usePageSearch'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { DepartmentWrapper } from './style'
const Department = memo(() => {
  const { pageListData, pageListTotalCount } = useSelector((state) => ({
    pageListData: state.system.departmentList,
    pageListTotalCount: state.system.departmentTotalCount
  }))

  const [getPageDataRef, handleQueryClick, handleResetClick] = usePageSearch()
  return (
    <DepartmentWrapper>
      <WHForm
        {...searchFormConfig}
        queryBtnClick={handleQueryClick}
        resetBtnClick={handleResetClick}
      ></WHForm>
      <WHTable
        pageName="department"
        ref={getPageDataRef}
        {...contentTableConfig}
        pageListData={pageListData}
        pageListTotalCount={pageListTotalCount}
      ></WHTable>
      <WHModal></WHModal>
    </DepartmentWrapper>
  )
})

export default Department
