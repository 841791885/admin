import React, { forwardRef } from 'react'
import { Modal } from 'antd'

import { WHModalWrapper } from './style'
function WHModal(props) {
  const { pageModalRef, modalVisible, toggleModalVisible } = props
  return (
    <WHModalWrapper>
      <Modal
        title="Basic Modal"
        width="40%"
        destroyOnClose
        visible={modalVisible}
        onOk={toggleModalVisible}
        onCancel={toggleModalVisible}
        afterClose={() => {
          console.log('关闭了')
        }}
      >
        <p ref={pageModalRef}>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </WHModalWrapper>
  )
}

export default forwardRef((props, ref) => <WHModal {...props} pageModalRef={ref} />)
