export default {
  // 设置 cookie
  setCookie (value, days, name) {
    name = name || 'topenid'
    let d = new Date()
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000))
    let expires = 'expires=' + d.toUTCString()
    document.cookie = name + '=' + value + ';expires=' + expires
  },
  // 根据type 取cookie
  getCookie (name) {
    let v
    name = name || 'topenid'
    v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)') // 正则匹配cookie字段
    return v ? v[2] : null
  }
}
  