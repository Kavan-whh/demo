// vuex中state的数据只能被mutations方法所更改
const M_USERS = 'M_USERS'//修改struct
const CHECKED_USER='CHECKED_USER'
const M_CKALL='M_CKALL'
const PANEL_CTRL='PANEL_CTRL'
const SHOW_MODAL='SHOW_MODAL'
const DEPART_SAVE_DATA='DEPART_SAVE_DATA'
const SHOW_CTRL='SHOW_CTRL'
const M_PAGES='M_PAGES'
const DROP_DOWN='DROP_DOWN'
const CURRUSER_ID='CURRUSER_ID'



const mutations = {
  [M_USERS](state,obj){
    state.users=obj;
  },
  [CHECKED_USER](state,arr){
    state.checkedUser=arr;
    // console.log(state.checkedUser);
  },
  [M_CKALL](state,type){
      state.ckall=type;
  },
  [PANEL_CTRL](state,str){
    state.panleCtrl=str;
  },
  [SHOW_MODAL](state,str){
    state.showModal=str;
    // console.log(state.showModal);
  },
  [DEPART_SAVE_DATA](state,obj){
    // console.log(obj.id);
    state.departSaveData=obj;
  },
  [SHOW_CTRL](state,type){
    state.showCtrl=type;
  },
  [M_PAGES](state,num){
    state.pages=num;
    // console.log(state.pages);
  },
  [DROP_DOWN](state,str){
    state.dropDown=str;
    // console.log(state.dropDown);
  },
  [CURRUSER_ID](state,num){
    state.currUserId=num;
  }


}

export default mutations
