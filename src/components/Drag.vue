<template>
  <div class="drag_box" ref="dragBoxRef" @click="handleClick" @mousedown="mousedown" :style="style">
    <div class="box"></div>
  </div>
  <div>top: {{ top }}</div>
  <div>left: {{ left }}</div>
  <div>clientX: {{ clientX }}</div>
  <div>clientY: {{ clientY }}</div>
</template>
<script>
export default {
  name: 'Drag',
  data() {
    return {
      up: false,
      top: 100,
      left: 100,
      clientX: 0,
      clientY: 0
    }
  },
  computed: {
    style() {
      return {
        top: `${this.top}px`,
        left: `${this.left}px`
      }
    }
  },
  created() {},
  mounted() {

  },
  methods: {
    handleClick(e) {
      console.log(e)
    },
    mousedown(e) {
      const { offsetLeft, offsetTop } = this.$refs.dragBoxRef
      console.log({ offsetLeft, offsetTop })
      const x = e.clientX - offsetLeft
      const y = e.clientY - offsetTop
      document.onmousemove = (event) => {
        this.dragMove(event || window.event, x, y)
      }

      // 释放鼠标
      document.onmouseup = function end() {
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    dragMove(e, x, y) {
      this.clientX = e.clientX
      this.clientY = e.clientY

      const winWidth = document.documentElement.clientWidth || document.body.clientWidth
      const winHeight = document.documentElement.clientHeight || document.body.clientHeight
      const { offsetWidth, offsetHeight } = this.$refs.dragBoxRef
      const maxWidth = winWidth - offsetWidth
      const maxHeight = winHeight - offsetHeight
      const left = Math.max(e.clientX - x, 0)
      const top = Math.max(e.clientY - y, 0)
      this.top = Math.min(top, maxHeight)
      this.left = Math.min(left, maxWidth)
    }
  }
}
</script>
<style lang="scss">
// body {
//   position: relative;
// }
.drag_box {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: #0db2e7;
  .box {
    width: 50px;
    height: 50px;
    cursor: move;
    background-color: #fff;
  }
}
</style>
