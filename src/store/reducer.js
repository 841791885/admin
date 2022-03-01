//redux的combinereducers
import { combineReducers } from 'redux'

// import { reducer as recommend } from '@/pages/discover/c-pages/recommend/store'
import { reducer as login } from './login/login'
import { reducer as common } from './common/common'

export default combineReducers({
  //可以放多个reducer最后会合并一起导出为一个
  // recommend
  login,
  common
})
