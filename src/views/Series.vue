<template>
  <StarComp v-if="show" :list="imagesList" />
</template>

<script>
import StarComp from '@/components/Star.vue'
import { getStarList } from '@/utils/request'

export default {
  name: 'Series',
  components: {
    StarComp,
  },
  data() {
    return {
      imagesList: [],
      show: false,
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
