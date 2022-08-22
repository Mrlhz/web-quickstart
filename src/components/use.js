import {
  ref,
  onMounted,
  onUnmounted,
} from 'vue'
import Viewer from 'viewerjs'

export function getClientHeight() {
  return document.documentElement.scrollTop || document.body.scrollTop
}

/**
 * @description 鼠标跟踪器示例
 * @reference https://cn.vuejs.org/guide/reusability/composables.html#mouse-tracker-example
 */
// 按照惯例，组合式函数名以“use”开头
export function useMouse() {
  // 被组合式函数封装和管理的状态
  const x = ref(0)
  const y = ref(0)

  // 组合式函数可以随时更改其状态。
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // 通过返回值暴露所管理的状态
  return { x, y }
}

/**
 * @description 返回 scrollTop
 */
export function useScroll() {
  const scrollTop = ref(0)

  function setClientHeight() {
    scrollTop.value = getClientHeight()
  }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  onMounted(() => document.addEventListener('scroll', setClientHeight))
  onUnmounted(() => document.removeEventListener('scroll', setClientHeight))

  // 通过返回值暴露所管理的状态
  return { scrollTop }
}

export function useViewer({ selector, el }) {
  const viewer = ref(null)
  const element = el || document.querySelector(selector) || document
  if (element) {
    viewer.value = new Viewer(element)
  }

  return viewer
}

export function useRemoveViewer(viewer) {
  if (viewer && viewer.destory) {
    viewer.destory()
  }

  return {}
}
