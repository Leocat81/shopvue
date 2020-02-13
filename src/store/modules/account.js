
export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    setToken (state, val) {
      state.token = val
    }
  }
}
