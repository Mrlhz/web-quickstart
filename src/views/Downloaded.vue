<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'

import Viewer from 'viewerjs'
import Request from '../utils/http'
import { ImageCardList } from '../components/ImageCard'

const router = useRouter()

const star = 'Downloaded'
const list = ref([])
const viewer = ref(null)
const scroll = ref(0)

async function getStarList() {
  const params = { star }
  const result = await Request.get('/star', { params })
  console.log(result)
  list.value = result.starList
  return result
}

async function init() {
  await getStarList()
  // this.handleViewer()
  viewer.value = new Viewer(document.getElementById('images'))
  window.scrollTo(0, Number.parseInt(localStorage.getItem('StarListScroll'), 10))
}

function getClientHeight() {
  return document.documentElement.scrollTop || document.body.scrollTop
}
function setClientHeight() {
  scroll.value = getClientHeight()
}

onMounted(async () => {
  document.addEventListener('scroll', setClientHeight)

  await init()
})

onUnmounted(() => {
  if (viewer.value.destory) {
    viewer.value.destory()
  }
  viewer.value = {}
  document.removeEventListener('scroll', setClientHeight)
})

onBeforeRouteLeave((to, from, next) => {
  console.log({ to, from })
  localStorage.setItem('StarListScroll', scroll.value)
  next()
})

function handleClick(item) {
  console.log('starList', item, router)
  router.push({ name: 'StarDetail', params: { ...item, star } })
}

</script>

<template>
  <div class="wrapper" id="images" ref="images">
    <ImageCardList :list="list" :star="star" @handleItemClick="handleClick" />
  </div>
</template>
