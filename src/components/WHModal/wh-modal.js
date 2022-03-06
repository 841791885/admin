import React from 'react'
import { useBoolean } from 'ahooks'
import { Modal } from 'antd'

import { WHModalWrapper } from './style'
export default function WHModal() {
  const [isModalVisible, { toggle: toggleModalVisible }] = useBoolean(false)
  return (
    <WHModalWrapper>
      <Modal
        title="Basic Modal"
        width="40%"
        destroyOnClose
        visible={isModalVisible}
        onOk={toggleModalVisible}
        onCancel={toggleModalVisible}
        afterClose={() => {
          console.log('关闭了')
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </WHModalWrapper>
  )
}
