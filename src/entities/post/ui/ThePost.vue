<script setup lang="ts">
import type { Post } from '@/entities/post/model/types/post-type'

interface PostProps {
  post: Post
  onPostClick: (event: MouseEvent) => void
  onPostClickRight: (event: MouseEvent) => void
}

defineProps<PostProps>()
</script>

<template>
  <div @click="onPostClick" @click.right="onPostClickRight" :class="$style.post">
    <h3>{{ post.title }}</h3>
    <span>{{ post.body }}</span>
  </div>
</template>

<style module lang="scss">
.post {
  height: 200px;
  padding: 8px;
  display: grid;
  grid-auto-rows: 100px auto;
  overflow: hidden;
  border: 1px solid #9a9797;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    transition: all;
    transform: translate(2px, 2px);
    box-shadow: -2px -2px 8px #9a9797;
  }

  @media screen and (width < 600px) {
    height: 100px;
    grid-auto-rows: auto auto;
    padding: 4px;
    gap: 8px;
  }
}
</style>