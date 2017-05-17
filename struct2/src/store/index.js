import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions.js'
// 注册vuex
Vue.use(Vuex)

// 初始化一些常用数据，根据vue的理念，使用到的数据都必须先进行初始化设置。
var state = {
  // 初始化数据
  data:initdata,
  showModal:'',//控制弹窗显示
  showCtrl:true,//控制共用代码开关
  ckall:false,//控制全选按钮
  pages:'',//分页器的页数
  users:[],//渲染用户的panle数据
  currUserId:'',//当前显示的用户id
  checkedUser:[],//批量选择选中的用户
  panleCtrl:'',
  departSaveData:{},//修改添加部门的保存信息
  dropDown:'',//所有下拉的控制


}

// var state = Object.assign(initdata, any);
// 导出一个新生成的Store对象
export default new Vuex.Store({
  state, mutations, actions,
  getters
})
