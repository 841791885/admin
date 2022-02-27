import { API_BASE_URL, TIME_OUT } from './request/config'
import Request from './request/request'

const requestIns = new Request({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT
})
console.log('API_BASE_URL', API_BASE_URL)
console.log('TIME_OUT', TIME_OUT)

export default requestIns
