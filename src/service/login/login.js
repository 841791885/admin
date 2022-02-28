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
