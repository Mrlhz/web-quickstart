<template>
  <div class="wrapper" id="images" ref="images">
    <template v-for="item in list" :key="item.title">
      <div class="photo-frame">
        <div class="photo-box">
          <img :src="item.screencap" :alt="item.title" />
        </div>
        <div class="photo-title" @click="handleClick(item)">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>
<script>
import Viewer from 'viewerjs'
import { setLocalData, getLocalData } from '../utils/util'
import Request from '../utils/http'

export default {
  name: 'StarList',
  data() {
    return {
      star: '',
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
      setLocalData(this.$route.params, 'starParams')
      const { name } = getLocalData('starParams')
      this.star = name
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
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log('vm', vm)
    })
  },
  beforeRouteLeave(to, from, next) {
    localStorage.setItem('StarListScroll', this.scroll)
    next()
  },
}
</script>
<style scoped lang="scss">

</style>
