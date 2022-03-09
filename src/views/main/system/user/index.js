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
import { useLatest } from 'ahooks'
const User = memo(() => {
  // 获取表格数据
  const { pageListData, pageListTotalCount } = useSelector((state) => ({
    pageListData: state.system.usersList,
    pageListTotalCount: state.system.usersTotalCount
  }))

  const [getSearchFormDataRef, getPageDataRef, handleQueryClick, handleResetClick] = usePageSearch()
  const [pageModalFormRef, isModalVisible, toggleModalVisible] = usePageMoadl()

  const formDataSubmitMode = useLatest('add')

  const handleFormClick = () => {
    pageModalFormRef?.current.validateFields().then((res, err) => {
      if (!err) {
        if (formDataSubmitMode.current === 'add') {
          console.log('现在是添加提交')
        } else {
          console.log('现在是编辑提交')
        }
      }
    })
  }
  //同步表单数据(用于编辑回显)
  const syncFormData = (formItem) => {
    // pageModalFormRef?.current.setFieldsValue({ ...formItem })
    pageModalFormRef?.current.setFieldsValue(formItem)
  }

  const changeFormDataSubmitMode = (mode) => {
    formDataSubmitMode.current = mode
  }
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
        toggleModalVisible={toggleModalVisible}
        changeFormDataSubmitMode={changeFormDataSubmitMode}
        syncFormData={syncFormData}
        {...contentTableConfig}
      ></WHTable>
      <WHModal
        ref={pageModalFormRef}
        modalVisible={isModalVisible}
        toggleModalVisible={toggleModalVisible}
        handleFormClick={handleFormClick}
      ></WHModal>
    </UserWrapper>
  )
})

export default User
