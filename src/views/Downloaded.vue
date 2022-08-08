<template>
  <div class="wrapper" id="images" ref="images">
    <template v-for="item in list" :key="item.title">
      <ImageCardItem :imageItem="item" @handleClick="handleClick" />
    </template>
  </div>
</template>
<script>
import Viewer from 'viewerjs'
import Request from '../utils/http'
import { ImageCardItem } from '../components/ImageCard'

export default {
  name: 'Downloaded',
  components: {
    ImageCardItem,
  },
  data() {
    return {
      star: 'Downloaded',
      list: [],
      viewer: {},
      scroll: 0,
    }
  },
  created() {
    document.addEventListener('scroll', this.getClientHeight)
  },
  mounted() {
    console.log(this.$route)
    this.init()
  },
  beforeUnmount() {
    if (this.viewer.destory) {
      this.viewer.destory()
    }
    this.viewer = {}
    document.removeEventListener('scroll', this.getClientHeight)
  },
  methods: {
    async init() {
      await this.getStarList()
      this.handleViewer()
      window.scrollTo(0, Number.parseInt(localStorage.getItem('StarListScroll'), 10))
    },
    async getStarList() {
      const params = { star: this.star }
      const result = await Request.get('/star', { params })
      console.log(result)
      this.list = result.starList
      return result
    },
    handleViewer() {
      this.viewer = new Viewer(document.getElementById('images'))
    },
    handleClick(item) {
      console.log('starList', item)
      this.$router.push({ name: 'StarDetail', params: { ...item, star: this.star } })
    },
    getClientHeight() {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log({ to, from })
    localStorage.setItem('StarListScroll', this.scroll)
    next()
  },
}
</script>
<style scoped lang="scss">
</style>
