import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

import { BreadCrumbsWrapper } from './style'
export default function Breadcrumbs({ breadcrumbArr }) {
  return (
    <BreadCrumbsWrapper>
      <Breadcrumb>
        {breadcrumbArr.map((breadcrumb) => (
          <Breadcrumb.Item key={breadcrumb.name}>
            <Link to={breadcrumb.path}>{breadcrumb.name}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </BreadCrumbsWrapper>
  )
}
