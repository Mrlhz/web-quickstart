<template>
  <div :class="cardClass">
    {{ item.title }}
  </div>
</template>
<script>
export default {
  name: 'Card',
  components: {},
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    cardClass() {
      return ['card', 'col-4']
    },
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {},
}
</script>
<style lang="scss">

</style>
