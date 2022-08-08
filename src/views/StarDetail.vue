<template>
  <div class="wrapper">
    <div class="info">
      <div class="item title" @click="pageToBus">{{ starDetail.title }}</div>
      <div class="item copy" @click="handleCopy">Copy</div>
      <div class="item copy" @click="handleBack">Back</div>
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

export default {
  name: 'StarDetail',
  props: {},
  data() {
    return {
      starDetail: {},
      list: [],
      starDetailData: {},
      viewer: {},
    }
  },
  mounted() {
    console.log(this.$route.params)
    this.init()
  },
  beforeUnmount() {
    if (this.viewer.destory) {
      this.viewer.destory()
    }
  },
  methods: {
    async init() {
      setLocalData(this.$route.params, 'detailParams')
      const starDetailData = getLocalData('detailParams')
      const { star, title } = starDetailData
      this.starDetail = starDetailData
      await this.getStarDetail({ star, movie: title })
      await this.$nextTick()
      this.handleViewer()
    },
    async getStarDetail(params) {
      const { screencap, images } = await getStarDetail(params)
      this.list = [screencap, ...images]
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
      this.$router.push({ name: 'StarList', params: { } })
    },
  },
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .info {
    display: flex;
    justify-content: center;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 35px;
      font-weight: 700;
      background-color: #fff;
      border-radius: 6px;
      border: 1px solid #e4ecf3;
      box-shadow: 1px 2px 3px #f2f6f8;
    }
    .title {
      width: 220px;
      height: 50px;
      margin-right: 10px;
    }
    .copy {
      width: 120px;
      font-size: 30px;
      font-weight: 400;
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
