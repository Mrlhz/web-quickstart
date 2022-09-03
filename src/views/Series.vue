<template>
  <StarComp v-if="show" :list="imagesList" @handleClick="handleClick" />
</template>

<script>
import StarComp from '@/components/Star.vue'
import { getStarList } from '@/utils/request'
import { useStarStore } from '../store/index'

export default {
  name: 'Series',
  components: {
    StarComp
  },
  data() {
    return {
      imagesList: [],
      show: false
    }
  },
  mounted() {
    this.getAvatarList()
  },
  methods: {
    async getAvatarList() {
      const result = await getStarList({ type: 'series' })
      this.imagesList = result
      this.show = true
    },
    handleClick(item) {
      const store = useStarStore()
      store.$patch({ starParams: item })
      this.$router.push({ name: 'StarList' })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
