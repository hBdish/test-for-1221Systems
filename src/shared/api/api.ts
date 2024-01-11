import type { RequestParams } from './types/api-types'

const __api__ = 'https://jsonplaceholder.typicode.com'

// функция для типизации запросов
async function request<T>(uri = '', params: RequestParams): Promise<T> {
  return fetch(__api__ + uri, {
    ...params
  }).then((data) => data.json() as Promise<T>)
}

export { request }
