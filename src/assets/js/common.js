import Vue from 'vue'
import axios from 'axios'
import {
  Toast,
  TopTips,
  Dialog
} from 'we-vue'
import WX from 'weixin-js-sdk'

export default class Common extends Vue {
  static wx = WX
  // static test = process.env.NODE_ENV !== 'production' ? '&test=1493627' : ''
  static test = ''

  static isIos() {
    return (
      window.navigator.userAgent.indexOf('iPhone') !== -1 ||
      window.navigator.userAgent.indexOf('iPad') !== -1
    )
  }

  static http = ({
      url,
      method = 'post',
      data = {},
      otherParams = {},
      lock = true,
      error = false,
      header = {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }) =>
    new Promise((resolve, reject) => {
      if (lock) {
        this.lock()
      }

      otherParams['data'] = data

      const formData = new FormData()
      for (let key in otherParams) {
        formData.append(key, JSON.stringify(otherParams[key]))
      }
      axios({
          url: url + this.test,
          method,
          header,
          data: formData
        })
        .then(res => {
          this.unlock()
          if (Number(res.data.errcode) === 0) {
            resolve(res.data)
          } else if (Number(res.data.errcode) === 996) {
            Common.redirectFn(res.data.errmsg)
          } else {
            if (error) {
              Toast.fail({
                message: res.data.errmsg
              })
            }
          }
        })
        .catch(res => {
          Toast.close()
          console.log('请求失败')
          reject(res)
        })
    })

  static postFile(url, files, callback) {
    let test = this.test
    let formData = new FormData()
    formData.append('Filedata', files)
    axios
      .post(url + test, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        callback(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  // tips
  // type: danger, success, warn
  // msg: string

  static tips(msg, duration) {
    TopTips({
      message: msg,
      duration: duration || 1500
    })
  }

  static error(msg, duration) {
    Toast.fail({
      message: msg,
      duration: duration || 1500
    })
  }
  static alert(msg, title) {
    Dialog.alert({
      title: title,
      message: msg,
      confirmButtonText: '我知道了'
    })
  }
  static success(msg, callback) {
    Toast.success({
      message: msg || '操作成功',
      duration: 1000
    })
    if (callback) {
      setTimeout(() => {
        callback()
      }, 1000)
    }
  }
  static confirm = (title, msg) => Dialog.confirm({
    title: title,
    message: msg
  })

  static lock() {
    Toast.loading({
      message: '加载中...',
      duration: 0
    })
  }
  static unlock() {
    Toast.close()
  }
  static initJssdk() {
    Common.http({
        url: '/index.php?model=crm&m=ajax&a=getJssdkSign',
        data: {
          url: window.location.href.split('#')[0]
        }
      },
      res => {
        Common.wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: res.data.data.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
          timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.data.data.noncestr, // 必填，生成签名的随机串
          signature: res.data.data.signature, // 必填，签名，见附录1
          jsApiList: [
            'getLocation',
            'closeWindow',
            'chooseImage',
            'uploadImage',
            'scanQRCode',
            'previewImage'
          ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
      }
    )
  }
  static preview(obj) {
    if (!obj) {
      this.tips({
        type: 'danger',
        msg: '没有可以预览的对象!'
      })
      return false
    }
    if (this.isIMG(obj.ext)) {
      this.previewImage(obj)
    } else {
      this.previewFile(obj)
    }
  }
  static isIMG(ext) {
    let arr = ['jpg', 'png', 'gif', 'jpeg']
    if (ext && arr.indexOf(ext.toLowerCase()) > -1) {
      return true
    }
    return false
  }
  static previewImage(obj) {
    console.log(obj)
    this.initJssdk()
    this.wx.ready(() => {
      console.log('ready')
      this.wx.previewImage({
        current: obj.url,
        urls: [obj.url]
      })
    })
    console.log('preview img')
  }

  static closeWindow() {
    this.wx.ready(() => {
      this.wx.closeWindow()
    })
  }

  static getIconByExt(ext) {
    if (ext === undefined) return 'video'
    ext = ext.toLowerCase()
    if (['doc', 'docx'].indexOf(ext) > -1) {
      return 'doc'
    }
    if (['xls', 'xlsx'].indexOf(ext) > -1) {
      return 'xls'
    }
    if (['ppt', 'pptx'].indexOf(ext) > -1) {
      return 'ppt'
    }
    if (['pdf'].indexOf(ext) > -1) {
      return 'pdf'
    }
    if (['jpg', 'jpeg', 'png', 'gif'].indexOf(ext) > -1) {
      return 'img'
    }
    if (['zip', 'rar'].indexOf(ext) > -1) {
      return 'zip'
    }
    if (['mp3', 'wma', 'wav', 'amr'].indexOf(ext) > -1) {
      return 'mp3'
    }
    if (['mp4'].indexOf(ext) > -1) {
      return 'mp4'
    }
    return 'others'
  }

  static formatTime(time, fmt = 'YYYY-MM-DD HH:mm', empty = '') {
    let dateObj
    // 如果传入的是时间对象
    if (typeof time === 'object') {
      if (notDate(time)) {
        return empty
      } else {
        dateObj = time
      }
    } else {
      // 当传入这个是非数字
      if (isNaN(time)) {
        if (notDate(new Date(time))) {
          return empty
        } else {
          dateObj = new Date(time)
        }
        // 当传入的是数字
      } else if (!Number(time)) {
        return empty
      } else {
        dateObj = new Date(Number(time) * 1000)
      }
    }
    // 格式化时间开始
    if (/(Y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    }
    let o = {
      'M+': dateObj.getMonth() + 1 + '',
      'D+': dateObj.getDate() + '',
      'H+': dateObj.getHours() + '',
      'm+': dateObj.getMinutes() + '',
      's+': dateObj.getSeconds() + ''
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? o[k] : addZero(o[k])
        )
      }
    }
    // 添加0
    function addZero(str) {
      return ('00' + str).substr(str.length)
    }
    // 判断是否时间对象
    function notDate(obj) {
      return obj.toString() === 'Invalid Date'
    }
    return fmt
  }

  // 当996时的重定向方法
  static redirectFn(errmsg) {
    let url = decodeURIComponent(
      location.href.replace(
        '/#/',
        '/index.html?debug=' + new Date().getTime() + '/#/'
      )
    )
    location.replace(errmsg + '&' + '&redirect=' + encodeURIComponent(url))
  }

  //判断网页终端,是企业微信还是微信,[2]移动设备 [3]电脑
  static terminal() {
    if (process.env.NODE_ENV === 'development') {
      return 3
    }
    var userAgentInfo = navigator.userAgent.toLowerCase()
    var Agents = new Array(
      'android',
      'iphone',
      'symbianOS',
      'windows phone',
      'ipad',
      'ipod'
    )
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        return 2
      }
    }
    return 3
  }
  // 去掉空格和换行
  static trim(str) {
    if (typeof str === 'string') {
      return str.replace(/ /g, '').replace(/\n/g, '')
    }
    return str
  }

  static copyUrl(url) {
    const input = document.createElement('input')
    input.setAttribute('readonly', 'readonly')
    input.setAttribute('value', url)
    document.body.appendChild(input)
    if (navigator.userAgent.indexOf('Android') !== -1) {
      // 安卓的时候focus
      input.focus()
    }
    input.setSelectionRange(0, 9999)
    if (document.execCommand('copy')) {
      document.execCommand('copy')
      this.success('已复制到剪贴板')
    }
    document.body.removeChild(input)
  }
}