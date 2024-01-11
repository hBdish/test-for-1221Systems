<script setup lang="ts">
import { onMounted, ref } from 'vue'

import type { User } from '@/entities/author/model/types/author-types'
import AuthorCard from '@/entities/author/ui/AuthorCard.vue'
import { getUserById } from '@/entities/author/model/services/author-service'
import TheLoader from '@/shared/ui/loader/TheLoader.vue'

interface PostItemCardProps {
  title: string
  body: string
  userId: number
}

const { userId } = defineProps<PostItemCardProps>()

const author = ref<User>()

onMounted(async () => {
  author.value = await getUserById(userId.toString())
})
</script>

<template>
  <article :class="$style.post">
    <section>
      <h3>{{ title || 'Заголовок' }}</h3>
      <p>{{ body || 'Тело' }}</p>
    </section>

    <AuthorCard v-if="!!author" :author="author" />
    <TheLoader v-else />
  </article>
</template>

<style module lang="scss">
.post {
  display: grid;
}
</style>
