import React, { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSetState, useDeepCompareEffect } from 'ahooks'
import { Button, Table, Pagination, Tag, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import { getPageListData } from '@/store/main/system/actionCreators'
import { utcToDateTimeFormat } from '@/utils/date-formate'

import { WHTableWrapper, WHTableHeaderWrapper, WHTabelFooterWrapper } from './style'

const { Column } = Table
function WHTable(props) {
  const {
    tableItemCol,
    tableTitle,
    pageName,
    getPageDataRef,
    pageListData,
    pageListTotalCount,
    changeFormDataSubmitMode
  } = props

  console.log('pageListData', pageListData)
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

  const createClick = () => {
    console.log('添加')
    changeFormDataSubmitMode('add')
  }
  const editClick = (rowItem) => {
    console.log(rowItem)
    console.log('编辑')
    changeFormDataSubmitMode('edit', rowItem)
  }
  const deleteClick = (rowItem) => {
    console.log(rowItem)
    console.log('删除')
  }

  const rendertableItemCol = (tableItemCol) => {
    switch (tableItemCol.type) {
      case 'index':
        return (
          <Column
            align="center"
            title={tableItemCol.title}
            key={tableItemCol.title}
            render={(record, record2, num) => <div>{num + 1}</div>}
          />
        )
      case 'text':
        return (
          <Column
            align="center"
            title={tableItemCol.title}
            dataIndex={tableItemCol.dataIndex}
            key={tableItemCol.title}
          />
        )
      case 'tag':
        return (
          <Column
            align="center"
            title={tableItemCol.title}
            key={tableItemCol.title}
            render={(record) => (
              <Tag color={record[tableItemCol.dataIndex] ? '#2db7f5' : '#f50'}>
                {record[tableItemCol.dataIndex] ? '启用' : '禁用'}
              </Tag>
            )}
          />
        )
      case 'time':
        return (
          <Column
            align="center"
            title={tableItemCol.title}
            key={tableItemCol.title}
            render={(record) => <div>{utcToDateTimeFormat(record[tableItemCol.dataIndex])}</div>}
          />
        )
      case 'action':
        return (
          <Column
            align="center"
            title={tableItemCol.title}
            key={tableItemCol.title}
            render={(record) => (
              <Space size="middle">
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() => {
                    editClick(record)
                  }}
                >
                  编辑
                </Button>
                <Button
                  type="danger"
                  icon={<DeleteOutlined />}
                  onClick={() => {
                    deleteClick(record)
                  }}
                >
                  删除
                </Button>
              </Space>
            )}
          />
        )
      default:
        return
    }
  }

  return (
    <WHTableWrapper>
      <WHTableHeaderWrapper>
        <h2 className="table-title">{tableTitle}</h2>
        <Button type="primary" size="large" onClick={createClick}>
          新建数据
        </Button>
      </WHTableHeaderWrapper>
      <Table
        // columns={renderTableItemCol}
        dataSource={pageListData}
        rowKey={(record) => record.id}
        bordered
        pagination={false}
      >
        {/* {tableItemCol.map((item) => (
          <Column align="center" title={item.title} dataIndex={item.dataIndex} key={item.title} />
        ))} */}
        {tableItemCol.map(rendertableItemCol)}
      </Table>
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
