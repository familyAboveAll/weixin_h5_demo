/* Axios 方式 */
import axios from 'axios'
import { Toast } from 'vant'

const http = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 15000
})
http.interceptors.request.use(config => {
  // post提交 data存在 并且 data不是FormData对象时对数据进行json化处理
  if (config.method === 'post' && config.data && config.data.constructor !== FormData) {
    // config.data = qs.stringify(config.data)
    // config.headers['Content-Type'] = 'application/json'
  }
  if (localStorage.getItem('access_token')) {
    config.headers['X-Access-Token'] = localStorage.getItem('access_token')
  }
  if (config.url.indexOf('/files') >= 0) {
    config.headers['Content-Type'] = 'multipart/form-data'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

http.interceptors.response.use(response => {
  if (response.data.code === 0) {
    return response.data.data
  }
  return Promise.reject(response.data.message)
}, function (error) {
  Toast(error);
  return Promise.reject(error)
})

export default http
