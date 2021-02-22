import Vue from 'vue'
import todo from './modules/todo'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo,
  },
  plugins: [createPersistedState({
    paths: ['todo']
  })]
})
