import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userList: []
  },
  getters: {
    getUserList: state => state.userList
  },
  mutations: {
    setUserList(state, data) {
      state.userList = data
    }
  },
  actions: {
    setUserList({ commit }, data) {
      return new Promise(resolve => {
        commit('setUserList', data)
        resolve()
      })
    }
  }
})
