import type { Ref } from 'vue'

import { createInjectionKeyForProperty } from '@/shared/helpers/injection-keys'
import type { Post } from '@/entities/post/model/types/post-type'

const PostsItemsKey = createInjectionKeyForProperty<Ref<Post[]>>('PostsItemsKey')

export { PostsItemsKey }
