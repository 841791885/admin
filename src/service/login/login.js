import requestIns from '../index'

const mapLoginAPI = {
  AccountLogin: '/login',
  UserInfo: '/users/',
  UserMenus: '/role/'
}

export function accountLoginRequest(account) {
  return requestIns.post({
    url: mapLoginAPI.AccountLogin,
    data: account
  })
}

export function getUserById(id) {
  return requestIns.get({
    url: mapLoginAPI.UserInfo + id
  })
}

export function getUserMenus(id) {
  return requestIns.get({
    url: mapLoginAPI.UserMenus + id + '/menu'
  })
}
