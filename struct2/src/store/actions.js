import axios from 'axios'
var actions = {
  userGet: ({//用户列表
    commit,
    state,

  }, obj) => {
    axios.get('/wechat/backend/corp-contact/user-list',{params:obj.data}).then(function(response) {
      // 操作渲染数据
      // console.log(response);
      commit('M_USERS',response.data.d.lists);
      commit('M_PAGES',response.data.d.pages);

      if(obj.cb){
        obj.cb(response.data.d)
      }

    }).catch(function(error) {
      console.log(error);
    });

  },


}

export default actions
