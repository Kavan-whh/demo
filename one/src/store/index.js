import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions.js'

Vue.use(Vuex)
const state = {
  isCreat: false// 变为ture时创建
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
