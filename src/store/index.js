import { createStore } from 'vuex'
import movie from './module/movie'

const state = {
  starParams: {},
  starDetailParams: {},
}

// https://vuex.vuejs.org/zh/guide/mutations.html#mutation-必须是同步函数
const mutations = {
  // eslint-disable-next-line no-shadow
  setStarDetailParams: (state, params) => {
    state.starDetailParams = params
  },
  // eslint-disable-next-line no-shadow
  setStarParams: (state, params) => {
    state.starParams = params
  },
}

export default createStore({
  state,
  getters: {
  },
  mutations,
  actions: {
  },
  modules: {
    movie,
  },
});
