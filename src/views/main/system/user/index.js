import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import WHForm from '@/components/wh-form/wh-form'
import WHTable from '@/components/wh-table/wh-table'
import WHModal from '@/components/wh-modal/wh-modal'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { UserWrapper } from './style'
const User = memo(() => {
  // 获取表格数据
  const { pageListData, pageListTotalCount } = useSelector((state) => ({
    pageListData: state.system.usersList,
    pageListTotalCount: state.system.usersTotalCount
  }))

  const { getSearchFormDataRef, getPageDataRef, handleQueryClick, handleResetClick } =
    usePageSearch()
  const {
    pageModalFormRef,
    isModalVisible,
    closeModal,
    formDataSubmitMode,
    changeFormDataSubmitMode
  } = usePageModal()

  return (
    <UserWrapper>
      <WHForm
        ref={getSearchFormDataRef}
        {...searchFormConfig}
        queryBtnClick={handleQueryClick}
        resetBtnClick={handleResetClick}
      ></WHForm>
      <WHTable
        ref={getPageDataRef}
        pageName="users"
        pageListData={pageListData}
        pageListTotalCount={pageListTotalCount}
        changeFormDataSubmitMode={changeFormDataSubmitMode}
        {...contentTableConfig}
      ></WHTable>
      <WHModal
        ref={pageModalFormRef}
        pageName="users"
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        formDataSubmitMode={formDataSubmitMode}
        {...modalConfig}
      ></WHModal>
    </UserWrapper>
  )
})

export default User
