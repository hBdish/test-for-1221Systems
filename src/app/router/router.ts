import { createRouter, createWebHistory } from 'vue-router'
import PostDetailsPage from '@/pages/post-details-page/ui/PostDetailsPage.vue'
import MainPage from '@/pages/main-page/ui/MainPage.vue'
import PostsPage from '@/pages/posts-page/ui/PostsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsPage
    },
    {
      path: '/posts/:id',
      name: 'post-details',
      component: PostDetailsPage,
      props: true
    }
  ]
})

export default router
