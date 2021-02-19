import Vue from 'vue'
import todo from './modules/todo'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo
  }
})
