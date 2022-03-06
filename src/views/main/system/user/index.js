import React, { memo } from 'react'

// import { getPageListDataAction } from '@/store/main/system/actionCreators'
import WHForm from '@/components/wh-form/wh-form'
import WHTable from '@/components/wh-table/wh-table'
import WHModal from '@/components/WHModal/wh-modal'

import { searchFormConfig } from './config/user.config'

import { UserWrapper } from './style'
const User = memo(() => {
  return (
    <UserWrapper>
      <WHForm {...searchFormConfig}></WHForm>
      <WHTable></WHTable>
      <WHModal></WHModal>
    </UserWrapper>
  )
})

export default User
