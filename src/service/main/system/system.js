import requestIns from '../../index'

export function getPageList(pageUrl, queryInfo) {
  return requestIns.post({
    url: pageUrl,
    data: queryInfo
  })
}

export function deletePageData(pageUrl) {
  return requestIns.delete({
    url: pageUrl
  })
}

export function newPageData(pageUrl, newData) {
  return requestIns.post({
    url: pageUrl,
    data: newData
  })
}

export function editPageData(pageUrl, editData) {
  return requestIns.patch({
    url: pageUrl,
    data: editData
  })
}
