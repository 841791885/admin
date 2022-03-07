import React, { memo } from 'react'

import WHForm from '@/components/wh-form/wh-form'
import WHTable from '@/components/wh-table/wh-table'
import WHModal from '@/components/wh-modal/wh-modal'

import { usePageSearch } from '@/hooks/usePageSearch'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { UserWrapper } from './style'
const User = memo(() => {
  const [getPageDataRef, handleQueryClick, handleResetClick] = usePageSearch()
  return (
    <UserWrapper>
      <WHForm
        {...searchFormConfig}
        queryBtnClick={handleQueryClick}
        resetBtnClick={handleResetClick}
      ></WHForm>
      <WHTable {...contentTableConfig} ref={getPageDataRef}></WHTable>
      <WHModal></WHModal>
    </UserWrapper>
  )
})

export default User
