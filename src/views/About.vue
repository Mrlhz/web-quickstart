<template>
  <div class="about">
    <button @click="reload()">强制更新</button>
    <h1>This is an about page</h1>
    <Select ref="selectRef"/>
  </div>
</template>
<script>
import Select from '@/components/Select.vue'

export default {
  components: {
    Select,
  },
  methods: {
    reload() {
      this.$refs.selectRef.reload()
    },
  },
}
</script>
