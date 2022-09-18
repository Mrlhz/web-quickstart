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
  const name = ref('movie')
  const star = ref({})
  const movie = ref({})
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function setStar(val) {
    star.value = val
  }
  function setMovie(val) {
    movie.value = val
  }

  return {
    name,
    star,
    movie,
    count,
    doubleCount,
    setStar,
    setMovie
  }
})
