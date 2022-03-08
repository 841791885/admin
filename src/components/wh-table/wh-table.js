import React, { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSetState, useDeepCompareEffect } from 'ahooks'
import { Button, Table, Pagination } from 'antd'

import { getPageListData } from '@/store/main/system/actionCreators'

import { WHTableWrapper, WHTableHeaderWrapper, WHTabelFooterWrapper } from './style'
function WHTable(props) {
  const {
    renderTableItemCol,
    tableTitle,
    pageName,
    getPageDataRef,
    pageListData,
    pageListTotalCount
  } = props

  const dispatch = useDispatch()

  // 0.绑定pageInfo
  const [pageInfo, setPageInfo] = useSetState({
    currentPage: 1,
    pageSize: 10
  })

  useDeepCompareEffect(() => {
    getPageDataRef?.current()
    console.log('useDeepCompareEffect')
  }, [pageInfo])

  //请求页面数据
  const getPageData = (otherInfo = {}) => {
    console.log('pageInfo.currentPage', pageInfo.currentPage)
    console.log('pageInfo.pageSize', pageInfo.pageSize)
    dispatch(
      getPageListData({
        pageName,
        queryInfo: {
          offset: (pageInfo.currentPage - 1) * pageInfo.pageSize,
          size: pageInfo.pageSize,
          ...otherInfo
        }
      })
    )
  }
  getPageDataRef.current = getPageData
  //改变页码
  const changePage = (page, pageSize) => {
    console.log('pageSize', pageSize)
    setPageInfo({
      currentPage: page,
      pageSize
    })
  }

  return (
    <WHTableWrapper>
      <WHTableHeaderWrapper>
        <h2 className="table-title">{tableTitle}</h2>
        <Button type="primary" size="large">
          新建数据
        </Button>
      </WHTableHeaderWrapper>
      <Table
        columns={renderTableItemCol}
        dataSource={pageListData}
        rowKey={(record) => record.id}
        bordered
        pagination={false}
      />
      <WHTabelFooterWrapper>
        {pageListTotalCount ? (
          <Pagination
            total={pageListTotalCount}
            pageSize={pageInfo.pageSize}
            // defaultCurrent={1}
            defaultCurrent={pageInfo.currentPage}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `共 ${total} 条`}
            onChange={changePage}
          />
        ) : null}
      </WHTabelFooterWrapper>
    </WHTableWrapper>
  )
}

export default forwardRef((props, ref) => <WHTable {...props} getPageDataRef={ref} />)
