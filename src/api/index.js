import request from '@/utils/request'

export function getArticleInfo(type) {
  // 第一个参数是url,第二个参数是params,第三个参数是配置项
  return request.get(`/api/news/list`, { type })
}

export function getArticleDetail(num) {
  return request.get(`/api/news/detail/${num}`)
}