import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions.js'

import initData from 'api/initData'

Vue.use(Vuex)
const state = {
  initData,
  isCreat: false, // 变为ture时创建
  type: 0 // 创建的类型
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
