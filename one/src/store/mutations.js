const M_ISCREATE = 'M_ISCREATE'

const mutations = {
  [M_ISCREATE](state, type) {
    state.isCreat = type
    console.log(state.isCreat)
  }
}

export default mutations
