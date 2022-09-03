<template>
  <div class="about">
    <button @click="reload()">强制更新</button>
    <h1>This is an about page</h1>
    <SelectComp ref="selectRef" />
  </div>
</template>
<script>
import SelectComp from '@/components/Select.vue'

export default {
  components: {
    SelectComp
  },
  methods: {
    reload() {
      this.$refs.selectRef.reload()
    }
  }
}
</script>
