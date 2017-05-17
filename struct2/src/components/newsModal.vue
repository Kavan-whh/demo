<template lang="html">
  <div class="bg" v-if="showModal">
    <section class="sec-mod"  :style="{width:boxWidth}">
      <pop-hd :title="title" width="100%"></pop-hd>
      <div class="mod-by-0 clearfix" v-if="showModal!='moveModal'">
        <img :src=src alt="" >
        <div class="" v-if="showModal=='editModal' || showModal=='addModal'">
          <p>{{mainTitle}}</p>
          <input type="text" name=""  :placeholder="placeholder" v-model="inputValue">
        </div>
        <p v-else>
          {{struct[departSaveData.id].name}} &nbsp;将被您删除，确定吗？
        </p>
      </div>


      <!--移动部门  -->
      <section class="mod-by-1 clearfix" v-if="showModal=='moveModal'">
          <p class="">移入部门</p>
          <div class="searchBox moveInput">
            <div class="input" @click="changeDropDown('innerDepart')">
              <span v-if="innerDepartID!='' "><span class="mod-icon"></span>{{innerDepartID=='' ? '':struct[innerDepartID].name}}</span>
              <span v-else>请选择移动到的部门</span>
            </div>
            <!-- <input @click="changeDropDown('innerDepart')" type="text" name="" :value="innerDepartID=='' ? '':struct[innerDepartID].name" placeholder="请选择移动到的部门"> -->
            <section class="searchBox moveDrop" v-show="dropDown=='innerDepart'">
                <inner-departv v-on:ckdepart="pick" cls="innerDepart" :lists="structTree" :level="1" :curr="innerDepartID"></inner-departv>
            </section>
          </div>

      </section>
      <footer class="mod-ft">
        <div class="right">
            <div  class="" v-if="showModal!='delModal'" @click="save">
              保存
            </div>
            <div v-if="showModal=='delModal'" class="" @click="save">
              确定
            </div>
            <div class="" @click="cancel">
              取消
            </div>
        </div>
      </footer>



    </section>
  </div>


</template>

<script>
import popHd from '@/components/popHd'
import innerDepartv from '@/components/innerDepart'
import {
  mapState,
  mapMutations
} from 'vuex'
export default {
  data() {
    return {
      STATIC_PATH,
      innerCtrl:0,
      title: '',
      mainTitle: '部门名称',
      placeholder: '请输入部门名称',
      src:'',
      inputValue: '',
      url: '/wechat/backend/corp-contact/save-department', //发送ajax
      params: {},
      innerDepartID:0,//移动弹窗最后选中的部门id-ajax
      inputData:[]//渲染innerDepartv的数组

    }
  },
  components: {
    popHd,innerDepartv
  },
  watch: {
    showModal: function(newValue) {
      if(this.showCtrl){
        this.params = { //发ajax
          id: 0, //0 or 其它	部门id，添加为0，修改不为0
          parentid: this.struct[this.departSaveData.id].parentid
        }
      }
      switch (newValue) {
        case 'editModal':
          this.title = '修改部门';
          this.inputValue = this.struct[this.departSaveData.id].name;
          this.params.id = this.departSaveData.id;
          this.src=this.STATIC_PATH+'img/Group 9.png';
          break;
        case 'addModal':
          this.title = '添加部门';
          this.src=this.STATIC_PATH+'img/Group 8.png';
          this.params.parentid=this.departSaveData.id;

          break;
        case 'delModal':
          this.title = '删除提醒'
          this.url = '/wechat/backend/corp-contact/del-department';
          this.params = {
            'id': this.departSaveData.id
          }
          this.src=this.STATIC_PATH+'img/删除图标.png';

          break;
        case 'moveModal':
        console.log('zhixing');
          this.title = '选择部门'
          this.url = '/wechat/backend/corp-contact/move-user'

          break;


        default:
          break;
      }

    }
  },
  computed: {
    ...mapState(['showModal','currUserId','checkedUser', 'departSaveData','dropDown','showCtrl']),
    ...mapState({
      struct: state => state.data.struct,
      structTree: state => state.data.structTree,
    }),
    boxWidth(){
      // if(true){
        return '48%'
      // }
    },


  },
  methods: {
    ...mapMutations(['SHOW_MODAL','DROP_DOWN']),
    pick(id){
      this.innerDepartID=id;
      this.params={
        uids:this.checkedUser.length>0 ? this.checkedUser:this.currUserId,
        departmentid:this.innerDepartID
      }

    },
    init() {
      this.title = '';
      this.mainTitle = '部门名称';
      this.placeholder = '请输入部门名称';
      this.inputValue = '';
      this.url = '/wechat/backend/corp-contact/save-department';
      this.params = {},
      this.DROP_DOWN('');
      this.SHOW_MODAL('');
    },
    changeDropDown(){
      this.DROP_DOWN('innerDepart');
    },
    save() {
      let qs = require('qs');
      if (this.showModal == 'editModal' || this.showModal == 'addModal') {
        if (this.inputValue.length == 0) {//输入框为空禁止提交
          return false;
        } else {
          this.params.name = this.inputValue;
        }
      }
      let self=this;
      this.$http.post(this.url, qs.stringify(this.params))
        .then(function(response) {
          console.log(response);
          self.cancel();
          if(response.data.e!=0){
            bootbox.alert(response.data.m)
          }else {
            location.reload();
          }
        })
    },
    cancel() {
      this.SHOW_MODAL('');
      this.init();
    }

  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/newsModal.scss";
</style>
