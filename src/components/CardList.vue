<template>
<div class="card_list">
    <div class="row">
    <template v-for="item in list" :key="item.id">
      <Card :item="item" />
    </template>
  </div>
</div>
</template>
<script>
import Card from './Card.vue'
import { list } from './card'

export default {
  name: 'CardList',
  components: {
    Card
  },
  computed: {},
  data() {
    return {
      list
    }
  },
  created() {

  },
  mounted() {}
}
</script>
<style lang="scss">
.card_list {
  margin: 0 18px;
}
</style>
