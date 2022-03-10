import originAxios from 'axios'

import localCache from '@/utils/cache'
import store from '@/store'

import { changeLoadingAction } from '@/store/common/actionCreators'
class Request {
  constructor(options) {
    this.config = options
    this.instance = originAxios.create(options)
    this.instance.interceptors.request.use((config) => {
      const token = localCache.getCache('token')
      store.dispatch(changeLoadingAction(true))
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })
    this.instance.interceptors.response.use(
      (res) => {
        store.dispatch(changeLoadingAction(false))
        return res?.data
      },
      (err) => {
        store.dispatch(changeLoadingAction(false))
        console.log(err)
      }
    )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res?.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get(config) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default Request
