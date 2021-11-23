import Qs from 'qs'
import axios from 'axios'

// axios实例
const serivce = () => {
  const instance = axios.create({
    timeout: 50000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  })

  instance.interceptors.response.use(res => {
    console.log(res)
    return res
  }, err => {
    return Promise.reject(err)
  })

  return instance
}

// 内容类型
const getContentType = (opts = {}) => {
  return {
    DEFAULT: 'application/x-www-form-urlencoded',
    JSON: 'application/json',
    FORM_DATA: 'multipart/form-data'
  }[opts.dataType || 'DEFAULT']
}

// 转换请求数据
const transformData = (opts = {}, data) => {
  return {
    DEFAULT: Qs.stringify(data),
    JSON: JSON.stringify(data),
    FORM_DATA: data
  }[opts.dataType || 'DEFAULT']
}

export const http = serivce()

export const get = (url, params, opts = {}) => {
  return http({
    url,
    method: 'get',
    params
  }).then((response) => {
    return Promise.resolve(response.data || {})
  }).catch(function(error) {
    return Promise.reject(error)
  })
}

export const post = (url, params, opts = {}) => {
  return http({
    url,
    method: 'post',
    headers: {
      'Content-Type': getContentType(opts)
    },
    transformRequest: [function(data) {
      return transformData(opts, data)
    }],
    data: params
  }).then((response) => {
    return Promise.resolve(response.data || {})
  }).catch(function(error) {
    return Promise.reject(error)
  })
}

