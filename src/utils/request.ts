import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const request = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://ipassby.cloud'
      : 'http://localhost:9001'
})

request.interceptors.request.use((config: AxiosRequestConfig) => {
  config.withCredentials = true
  return config
})

request.interceptors.response.use(
  (response: AxiosResponse) => {
    // 自定义错误处理
    /* if (response.data.err == 1) {
      return Promise.reject(response.status + response.statusText)
    } */
    return Promise.resolve(response.data)
  },
  err => {
    return Promise.reject(err)
  }
)

export default request
