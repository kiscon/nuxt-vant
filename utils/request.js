import Qs from 'qs'
import axios from 'axios'

export const get = (url, params, opts = {}) => {
  return axios({
    url,
    method: 'get',
    params
  }).then((response) => {
    return Promise.resolve(response.data || {})
  }).catch(function (error) {
    return Promise.reject(error)
  })
}

export const post = (url, params, opts = {}) => {
  return axios({
    url,
    method: 'post',
    headers: {
      'Content-Type': getContentType(opts)
    },
    transformRequest: [function (data) {
      if (opts.dataType === 'JSON') {
        return JSON.stringify(data)
      } else if (opts.dataType === 'FORM_DATA') {
        return data
      } else {
        return Qs.stringify(data)
      }
    }],
    data: params
  }).then((response) => {
    return Promise.resolve(response.data || {})
  }).catch(function (error) {
    return Promise.reject(error)
  })
}

function getContentType (opts = {}) {
  let type = 'application/x-www-form-urlencoded'
  if (opts.dataType === 'JSON') {
    type = 'application/json'
  }
  if (opts.dataType === 'FORM_DATA') {
    type = 'multipart/form-data'
  }
  return type
}
