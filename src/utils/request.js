// 引入flyio库,可以进行实例化配置
const fly = require('flyio/dist/npm/fly')

// 创建实例
const request = new fly

// 设置超时
request.config.timeout = 15000

// 设置请求基地址
request.config.baseURL = 'http://192.168.3.31:7180/'

// 添加请求拦截器
request.interceptors.request.use( (request) => {
  // console.log(request)
  // Authorization
  // if (store.getters.token) {
  //   request.headers.Authorization = store.getters.token
  // }
  return request
})

// 添加响应拦截器
request.interceptors.response.use( (response) => {

  return response
  }, (err) => {
    
    return err
  }
)

export default request