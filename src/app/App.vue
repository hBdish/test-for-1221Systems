<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, provide, ref } from 'vue'

import { getAllPosts } from '@/entities/post/model/services/posts-service'
import { PostsItemsKey } from '@/shared/const/injection-keys'
import type { Post } from '@/entities/post/model/types/post-type'
import TheNavbar from '@/widgets/navbar/ui/TheNavbar.vue'
import './style/index.scss'

const posts = ref<Post[]>([])

provide(PostsItemsKey, posts)

onMounted(async () => {
  posts.value = await getAllPosts()
})
</script>

<template>
  <header>
    <TheNavbar />
  </header>

  <main :class="$style.content">
    <RouterView />
  </main>
</template>

<style module lang="scss">
.content {
  padding-top: 8px;
}
</style>