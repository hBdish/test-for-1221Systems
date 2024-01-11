import { request } from '@/shared/api/api'
import type { Post } from '../types/post-type'

function getAllPosts() {
  return request<Post[]>('/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
}

function getPostsById(id: string) {
  return request<Post>('/posts/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
}

export { getAllPosts, getPostsById }
