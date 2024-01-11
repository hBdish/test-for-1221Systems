<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

interface BreadcrumbsItem {
  name: string
  url: string
}

const breadcrumbList = ref<BreadcrumbsItem[]>([])

onMounted(() => {
  buildBreadcrumbList()
})

watch(
  () => route.fullPath,
  () => {
    buildBreadcrumbList()
  }
)

function buildBreadcrumbList() {
  // Если путь / => открыта страница main
  if (route.fullPath.length === 1) {
    breadcrumbList.value = [
      {
        name: 'main',
        url: '/'
      }
    ]

    return
  }

  // Создание нового массива "хлебных крошек", путем разбиения полного пути до открытой страницы
  breadcrumbList.value = route.fullPath.split('/').map((el, index, array) => {
    return {
      name: el || 'main',
      url: (array[index - 1] ? '/' : '') + (array[index - 1] || '') + '/' + el
    }
  })
}
</script>

<template>
  <nav :class="$style.breadcrumbs">
    <router-link
      v-for="(item, index) in breadcrumbList"
      :to="item.url"
      :key="item.url"
      :class="$style.breadcrumbsItem"
    >
      <span :class="index !== breadcrumbList.length - 1 && $style.breadcrumbsUnderline">
        {{ item.name }}
      </span>
      <span v-if="index !== breadcrumbList.length - 1"> /</span>
    </router-link>
  </nav>
</template>

<style module lang="scss">
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  font-size: large;
  border-bottom: 2px solid #a2a2a2;

  .breadcrumbsItem {
    color: black;
  }

  .breadcrumbsUnderline {
    text-decoration: underline;
  }
}
</style>
