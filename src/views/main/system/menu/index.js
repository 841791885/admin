import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import WHTable from '@/components/wh-table/wh-table'

import { usePageSearch } from '@/hooks/usePageSearch'
import { contentTableConfig } from './config/content.config'

import { MenuWrapper } from './style'
const Menu = memo(() => {
  const [getPageDataRef] = usePageSearch()
  const { pageListData } = useSelector((state) => ({
    pageListData: state.system.roleList
  }))

  return (
    <MenuWrapper>
      <WHTable
        pageName="menu"
        ref={getPageDataRef}
        pageListData={pageListData}
        {...contentTableConfig}
      ></WHTable>
    </MenuWrapper>
  )
})

export default Menu
