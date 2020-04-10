import WX from 'weixin-js-sdk'
const weixin = {
  config () {
    try {
      WX.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: '', // 必填，公众号的唯一标识
        timestamp: '', // 必填，生成签名的时间戳
        nonceStr: '', // 必填，生成签名的随机串
        signature: '',// 必填，签名
        jsApiList: [] // 必填，需要使用的JS接口列表
      })
      WX.ready(function () {
        WX.checkJsApi({
          jsApiList: [
            'scanQRCode',
            'chooseWXPay',
          ],
          success: function (res) {
          },
          failed: function (err) {
          },
          complete: function () { }
        })
      })
      WX.error(res => {
      })
    } catch (g) {
      alert(g)
    }
  },
  scanQRCode () {
    WX.scanQRCode({
      needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        var result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
      }
    })
  },
  chooseWXPay () {
    WX.chooseWXPay({
      timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
      nonceStr: '', // 支付签名随机串，不长于 32 位
      package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
      signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
      paySign: '', // 支付签名
      success: function (res) {
        // 支付成功后的回调函数
      }
    })
  }
}
export default weixin
