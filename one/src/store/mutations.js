const M_CREATE = 'M_CREATE'
const M_ISCREATE = 'M_ISCREATE'

const mutations = {
  [M_CREATE](state, obj) {
    state.isCreat = obj.isCreat
    state.type = obj.type
  },
  [M_ISCREATE](state, type) {
    console.log(type)
    state.isCreat = type
  }
}

export default mutations
