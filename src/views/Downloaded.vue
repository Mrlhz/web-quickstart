<script setup>
import {
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  onUnmounted,
  defineProps
} from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'

import { ImageCardList } from '../components/ImageCard'
import { useScroll, useViewer, useRemoveViewer } from '../components/use'
import Request from '../utils/http'
import { useStarStore, useMovieStore } from '../store/index'

const router = useRouter()
const starStore = useStarStore()
const movieStore = useMovieStore()
const { scrollTop } = useScroll()

const props = defineProps({
  star: {
    type: String,
    default: 'Downloaded'
  }
})

const { star } = reactive(props)
const storeKey = 'starList_Scroll_Value'.toLocaleUpperCase() || `${star}Scroll`
const list = ref([])
const viewer = ref({})
const images = ref()

async function getStarList() {
  const params = { star }
  const result = await Request.get('/star', { params })
  console.log(result)
  list.value = result.starList
  return result
}

async function init() {
  await getStarList()
  viewer.value = useViewer({ el: images.value }) // el === document.getElementById('images')
  window.scrollTo(0, Number.parseInt(localStorage.getItem(storeKey), 10))
}

onBeforeMount(async () => {
  await init()
})

onMounted(() => {})

onUnmounted(() => {
  viewer.value = useRemoveViewer(viewer.value)
})

onBeforeRouteLeave((to, from, next) => {
  localStorage.setItem(storeKey, scrollTop.value)
  next()
})

function handleClick(item, e) {
  console.log('starList', item, e.target, star)
  starStore.starDetailParams = { ...item, star }
  movieStore.setMovie({ ...item, star })
  router.push({ name: 'StarDetail', n: 0 })
}

</script>

<template>
  <div class="wrapper" id="images" ref="images">
    <ImageCardList :list="list" @handleItemClick="handleClick" />
  </div>
</template>
