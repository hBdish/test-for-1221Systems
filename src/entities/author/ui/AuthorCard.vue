<script setup lang="ts">
import type { User } from '@/entities/author/model/types/author-types'

interface AuthorCardProps {
  author: User
}

defineProps<AuthorCardProps>()
</script>

<template>
  <section :class="$style.author">
    <h4>Author:</h4>
    <ul>
      <li>Name: {{ author.name }}</li>
      <li>Email: {{ author.email }}</li>
      <li>Phone: {{ author.phone }}</li>
      <li>Website: {{ author.website }}</li>
    </ul>
  </section>
</template>

<style module lang="scss">
.author {
  display: grid;
  margin-top: 8px;
  padding: 4px;
  border: 1px solid black;
}
</style>
