import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

import localCache from '@/utils/cache'

import {
  changeLoginTokenAction,
  changeRouterAction,
  changeUserInfoAction,
  changeUserMenusAction
} from './login/actionCreators'
// import { getInitalData } from '@/store/common/actionCreators'
import { getInitalData } from './common/actionCreators'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export const setupStore = () => {
  const token = localCache.getCache('token')
  if (token) {
    store.dispatch(changeLoginTokenAction(token))
    store.dispatch(getInitalData())
  }
  const userInfo = localCache.getCache('userInfo')
  if (userInfo) {
    store.dispatch(changeUserInfoAction(userInfo))
  }
  const userMenus = localCache.getCache('userMenus')
  if (userMenus) {
    store.dispatch(changeUserMenusAction(userMenus))
    store.dispatch(changeRouterAction(userMenus))
  }
}

export default store
