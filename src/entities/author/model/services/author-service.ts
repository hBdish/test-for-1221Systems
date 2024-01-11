import { request } from '@/shared/api/api'
import type { User } from '@/entities/author/model/types/author-types'

function getUserById(id: string) {
  return request<User>('/users/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
}

export { getUserById }
