import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import WHForm from '@/components/wh-form/wh-form'
import WHTable from '@/components/wh-table/wh-table'
import WHModal from '@/components/wh-modal/wh-modal'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageMoadl } from '@/hooks/usePageModal'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { UserWrapper } from './style'
import { useMount } from 'ahooks'
const User = memo(() => {
  // 获取表格数据
  const { pageListData, pageListTotalCount } = useSelector((state) => ({
    pageListData: state.system.usersList,
    pageListTotalCount: state.system.usersTotalCount
  }))

  const [getPageDataRef, handleQueryClick, handleResetClick] = usePageSearch()
  const [pageModalRef, isModalVisible, toggleModalVisible] = usePageMoadl()

  useMount(() => {
    console.log(pageModalRef?.current, 'pageModalRef')
  })
  return (
    <UserWrapper>
      <WHForm
        {...searchFormConfig}
        department
        queryBtnClick={handleQueryClick}
        resetBtnClick={handleResetClick}
      ></WHForm>
      <WHTable
        pageName="users"
        ref={getPageDataRef}
        pageListData={pageListData}
        pageListTotalCount={pageListTotalCount}
        toggleModalVisible={toggleModalVisible}
        {...contentTableConfig}
      ></WHTable>
      <WHModal
        ref={pageModalRef}
        modalVisible={isModalVisible}
        toggleModalVisible={toggleModalVisible}
      ></WHModal>
    </UserWrapper>
  )
})

export default User
