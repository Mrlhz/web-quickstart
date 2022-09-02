<template>
  <StarComp v-if="show" :list="imagesList" @handleClick="handleClick" />
</template>

<script>
import StarComp from '@/components/Star.vue'
import { getStarList } from '@/utils/request'
import { useStarStore } from '../store/index'

export default {
  name: 'Star',
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
      const result = await getStarList({ type: 'star' })
      this.imagesList = result
      this.show = true
    },
    handleClick(item) {
      const store = useStarStore()
      console.log(item, store)
      store.$patch({ starParams: item }) // store.starParams = item
      this.$router.push({ name: 'StarList' })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
