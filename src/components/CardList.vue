<template>
  <div class="row">
    <template v-for="item in list" :key="item.id">
      <Card :item="item" />
    </template>
  </div>
</template>
<script>
import Card from './Card.vue'
import { list } from './card'

export default {
  name: 'CardList',
  components: {
    Card,
  },
  computed: {},
  data() {
    return {
      list,
    }
  },
  created() {

  },
  mounted() {},
}
</script>
<style lang="scss">

</style>
