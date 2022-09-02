import { createPinia, defineStore } from 'pinia'

export const pinia = createPinia()

export const useStarStore = defineStore('star', {
  state: () => ({
    starParams: {},
    starDetailParams: {}
  }),
  getters: {},
  // https://pinia.vuejs.org/core-concepts/actions.html
  actions: {
    // eslint-disable-next-line no-shadow
    setStarDetailParams: (params) => {
      console.log(this)
      this.starDetailParams = params
    },
    // eslint-disable-next-line no-shadow
    setStarParams: (params) => {
      this.starParams = params
    }
  }
})
