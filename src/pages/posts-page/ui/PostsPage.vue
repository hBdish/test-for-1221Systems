<script setup lang="ts">
import { useRouter } from 'vue-router'
import { inject } from 'vue'

import { PostsItemsKey } from '@/shared/const/injection-keys'
import type { Post } from '@/entities/post/model/types/post-type'
import TheLoader from '@/shared/ui/loader/TheLoader.vue'
import ThePost from '@/entities/post/ui/ThePost.vue'

const posts = inject(PostsItemsKey)
const router = useRouter()

const openPostDetailsPage = (post: Post) => (event: MouseEvent) => {
  router.push({
    path: '/posts/' + post.id
  })
}
const removePostOnClick = (post: Post) => (event: MouseEvent) => {
  posts?.value.splice(posts?.value.indexOf(post), 1)
}
</script>

<template>
  <section :class="$style.loader" v-if="posts?.length === 0">
    <TheLoader />
  </section>
  <section v-else :class="$style.postsList">
    <ThePost
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :on-post-click="openPostDetailsPage(post)"
      :on-post-click-right="removePostOnClick(post)"
    />
  </section>
</template>

<style module lang="scss">
.postsList {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, auto);

  @media screen and (width < 760px) {
    gap: 8px;
    grid-template-columns: 1fr;
  }
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>