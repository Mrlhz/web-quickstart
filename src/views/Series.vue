<template>
  <StarComp v-if="show" :list="imagesList" @handleClick="handleClick" />
</template>

<script>
import StarComp from '@/components/Star.vue'
import { getStarList } from '@/utils/request'
import { useStarStore } from '@/store/index'

export default {
  name: 'Series',
  components: {
    StarComp
  },
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imagesList: [],
      show: false,
      timestamp: 0
    }
  },
  watch: {
    type: {
      handler(val) {
        this.timestamp = Date.now()
        // 路由不传类型值时，使用默认值
        this.getAvatarList(val || 'star')
      },
      immediate: true
    }
  },
  mounted() {},
  methods: {
    async getAvatarList(type = 'star') {
      const result = await getStarList({ type })
      this.imagesList = (result || []).map(({ name, url }) => {
        const origin = process.env.VUE_APP_PUBLIC
        return {
          name,
          url: url.includes('http') ? url : `${origin}/${url}`,
          key: `${name}_${this.timestamp}`
        }
      })
      this.show = true
    },
    handleClick(item) {
      const store = useStarStore()
      store.$patch({ starParams: item }) // store.starParams = item
      this.$router.push({ name: 'StarList' })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
