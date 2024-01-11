<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import type { Post } from '@/entities/post/model/types/post-type'
import { getPostsById } from '@/entities/post/model/services/posts-service'
import PostItemCard from '@/features/post-item-card/ui/PostItemCard.vue'
import TheLoader from '@/shared/ui/loader/TheLoader.vue'

const route = useRoute()
const id = route.params.id as string

const post = ref<Post>()

onMounted(async () => {
  post.value = await getPostsById(id)
})
</script>

<template>
  <PostItemCard
    v-if="post?.title !== undefined && post?.body !== undefined && post?.userId !== undefined"
    :title="post.title"
    :body="post.body"
    :user-id="post.userId"
  />
  <TheLoader v-else />
</template>