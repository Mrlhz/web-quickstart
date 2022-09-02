const state = {
  name: 'movie',
}
const mutations = {}
const actions = {
  getLanguage({ commit }, language = 'zh') {
    commit('set_language', language)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
