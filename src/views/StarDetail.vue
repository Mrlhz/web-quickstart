<template>
  <div class="starDetailWrapper">
    <div class="info">
      <Button class="title" size="large" @click="pageToBus">{{ starDetail.title }}</Button>
      <Button size="large" @click="handleCopy">Copy</Button>
      <Button size="large" @click="handleBack">Back</Button>
    </div>
    <div class="starDetail" id="starDetailImages">
      <template v-for="item in list" :key="item.name">
        <div class="photo-box">
          <img :src="item.url" :alt="item.name" />
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import Viewer from 'viewerjs'
import { setLocalData, getLocalData, copyToClipboard } from '@/utils/util'
import { getStarDetail } from '@/utils/request'
import Button from '../../packages/button/Button'
import { useStarStore } from '../store/index'

const store = useStarStore()

export default {
  name: 'StarDetail',
  components: {
    Button
  },
  props: {},
  data() {
    return {
      starDetail: {},
      list: [],
      starDetailData: {},
      viewer: {}
    }
  },
  mounted() {
    this.init()
  },
  beforeUnmount() {
    if (this.viewer.destory) {
      this.viewer.destory()
    }
  },
  methods: {
    async init() {
      const { starDetailParams } = store // store.$state
      console.log(starDetailParams)
      setLocalData(starDetailParams, 'detailParams')
      const starDetailData = getLocalData('detailParams') || {}
      const { star, title } = starDetailData
      this.starDetail = starDetailData
      await this.getStarDetail({ star, movie: title })
      await this.$nextTick()
      this.handleViewer()
    },
    async getStarDetail(params) {
      const { screencap, images = [] } = await getStarDetail(params)
      this.list = screencap ? [screencap, ...images] : images || []
    },
    handleViewer() {
      this.viewer = new Viewer(document.getElementById('starDetailImages'))
    },
    pageToBus() {
      window.open(this.starDetail.url)
    },
    handleCopy() {
      copyToClipboard(this.starDetail.title)
    },
    handleBack() {
      this.$router.push({ name: 'StarList' })
    }
  }
}
</script>
<style lang="scss">
.starDetailWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .info {
    display: flex;
    justify-content: center;
    .title .v-button__text {
      font-size: 35px;
      font-weight: 700;
      color: #2c3e50;
    }
    .title {
      margin-right: 10px;
    }
  }
  .starDetail {
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto;
    .photo-box {
      flex-basis: 25%;
      height: 300px;
      padding: 10px;
      overflow: hidden;
      img {
        width: 100%;
        // height: 100%;
      }
    }
  }
}
</style>
