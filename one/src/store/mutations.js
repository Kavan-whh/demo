const M_CREATE = 'M_CREATE'
const M_ISCREATE = 'M_ISCREATE'
const SAVE = 'SAVE'

const mutations = {
  [M_CREATE](state, obj) {
    state.isCreat = obj.isCreat
    state.type = obj.type
  },
  [M_ISCREATE](state, type) {
    console.log(type)
    state.isCreat = type
  },
  [SAVE](state, obj) {
    state.initData = obj
    console.log(state.initData)
  }
}

export default mutations
