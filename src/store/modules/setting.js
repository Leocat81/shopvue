
export default {
  namespaced: true,
  state: {
    ThisNewRouter: '' // 当前路由
  },
  mutations: {
    SetThisNewRouter (state, key) {
      state.ThisNewRouter = key
    }
  }

}
