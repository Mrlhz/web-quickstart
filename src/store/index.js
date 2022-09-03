import { ref, computed } from 'vue'
import { createPinia, defineStore } from 'pinia'

// https://pinia.vuejs.org/
export const pinia = createPinia()

export const useStarStore = defineStore('star', {
  state: () => ({
    starParams: {},
    starDetailParams: {}
  }),
  getters: {},
  // https://pinia.vuejs.org/core-concepts/actions.html
  actions: {}
})

export const useMovieStore = defineStore('movie', () => {
  const count = ref(0)
  const name = ref('counter')
  const star = ref({})
  const movie = ref({})
  const doubleCount = computed(() => count.value * 2)
  function setStar(val) {
    star.value = val
  }
  function setMovie(val) {
    movie.value = val
  }

  return {
    name,
    count,
    star,
    movie,
    doubleCount,
    setStar,
    setMovie
  }
})
