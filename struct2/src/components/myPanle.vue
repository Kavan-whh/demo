<template lang="html">
  <section class="person-box">
      <div class="person-title">
          <span>{{struct[structid].name}}(ID:{{structid}})</span>
          <div class="all-person">
              <span v-if="currStatus == ''" @click="corpUserGet();">全部成员/{{corpUsers.total}}人</span>
              <span v-if="currStatus == 1" @click="corpUserGet(1);">已关注/{{corpUsers.subscribe}}人</span>
              <span v-if="currStatus == 4" @click="corpUserGet(4);">未关注/{{corpUsers.unsubscribe}}人</span>
              <span v-if="currStatus == 2" @click="corpUserGet(2);">禁用/{{corpUsers.disabled}}人</span>
              <div class="type-option">
                  <div @click="corpUserGet('');">全部成员/{{corpUsers.total}}人</div>
                  <div @click="corpUserGet(1);">已关注/{{corpUsers.subscribe}}人</div>
                  <div @click="corpUserGet(4);">未关注/{{corpUsers.unsubscribe}}人</div>
                  <div @click="corpUserGet(2);">禁用/{{corpUsers.disabled}}人</div>
              </div>
          </div>
      </div>
    <!--  内容部分-->
      <div class="tb-head tb-title">
            <div class="input-wrap">
                <span :class="ckall? 'input-change-red' : 'input-all-pic'" @click="checkAll($event)"><input type="checkbox"  ></span>
            </div>
             <div class="name">
                 姓名
             </div>
             <div class="accounts">
                 帐号
             </div>
             <div class="phone">
                 手机
             </div>
             <div class="mail">
                 邮箱
             </div>
             <div class="status ">
                 状态
             </div>
             <div class="operation">
                 操作
             </div>
      </div>

      <!-- AJAX请求区域 -->
      <section class="tb-content-wrap" :style="{height:contentHeight+'px'}">
        <div class="tb-head tb-content"  v-for="(user,index) in users" :class="{light:user.uid==currUid}" @click="userDetail(user.uid)">
            <div class="input-wrap">
                <span :class="{'input-change-red': checkedUser.indexOf(user.uid)!= -1}" class='input-change-pic' @click.stop="checkedOne(user.uid)">
                  <input type="checkbox"  class="td-checkbox"    :value="user.uid" ></span>
            </div>
            <div class="usertd">{{user.name}}</div>
            <div class="usertd"><span>{{user.userid}}</span></div>
            <div class="usertd"><span>{{user.mobile}}</span></div>
            <div class="usertd"><span>{{user.email}}</span></div>
            <div class="usertd" >
                <span class="text-success" v-if="user.status == 1">已关注</span>
                <span class="text-stop" v-else-if="user.status == 2">已禁用</span>
                <span class="text-focus" v-else>未关注</span>
            </div>
            <div class="operation">
              修改状态
            </div>
        </div>
      </section>

      <user-info  class="userinfo" :propsData='children'></user-info>
      <my-pages></my-pages>

  </section>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'
import userInfo from '@/components/userInfo'
import myPages from '@/components/pages'

export default {
  data() {
    return {
      children: '',
      corpUsers: {},
      currStatus:'',//控制面板头部的显示
      currUid:0,
      structid:1,
    }
  },
  computed: {
    ...mapState(['ckall', 'users', 'checkedUser', 'panleCtrl']),
    ...mapState({
      allowids: state => state.data.auth.allowids
    }),
    usersID() {
      return this.$store.getters.usersID
    },
    struct() {
      return this.$store.state.data.struct
    },
    contentHeight(){
      let temp = window.innerHeight - 223-71-97;
      return temp
    }


  },
  created() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData',
    checkedUser: function(newValue) {
      if (this.usersID.length == this.checkedUser.length && this.checkedUser.length!=0) {
        this.M_CKALL(true);
      } else {
        this.M_CKALL(false);
      }
      if(newValue.length==0 && this.panleCtrl!='userInfo' ){
        this.PANEL_CTRL('');
      }
    }

  },
  methods: {
    ...mapMutations(['CHECKED_USER','M_PAGES', 'M_USERS','M_CKALL', 'PANEL_CTRL']),
    fetchData(newValue,oldValue) {
      let id = this.$route.params.id;
      this.structid=id;
      if(Object.values(this.allowids).indexOf(parseInt(id))==-1){
        // 点击为空暂时注释
        // this.M_USERS([]);
        // this.M_PAGES(0);
        // this.corpUsers = {disabled:0,subscribe:0,total:0,unsubscribe:0};
        this.structid=oldValue.params.id;
        return false;
      }
      let self = this;
      let obj = {
        data: {
          departids: id, //‘’ or 1 or 1,2,3 	指定部门的id
          page: 1, //最小为1，整数	当前页码
          usernum: 1,
        },
        cb(data) {
          self.corpUsers = data.corp_users;
        }

      };
      this.$store.dispatch('userGet', obj);
    },
    corpUserGet(status) {
      let data = {
        departids: this.structid,
        page: 1,
        usernum: 1,
        status
      }
      let obj = {
        data
      }
      this.$store.dispatch('userGet', obj);
      this.currStatus=status;
    },
    userDetail(id) {
      // 初始化
      this.currUid=id;
      this.CHECKED_USER([]);

      this.PANEL_CTRL('userInfo');
      let self = this;
      this.$http.get('/wechat/backend/corp-contact/member-info', {
        params: {
          id: id,
          type: 1
        }
      }).then(function(response) {
        self.children = response.data.d;
      }).catch(function(error) {
        console.log(error);
      });
    },
    checkedOne(id) {
      if (this.checkedUser.indexOf(id) === -1) { //选中
        this.PANEL_CTRL('checkedUser');
        this.checkedUser.push(id);
        this.CHECKED_USER(this.checkedUser);
      } else { //取消
        let temp = [];
        let self = this;
        this.checkedUser.forEach(item => {
          if (item != id) {
            temp.push(item);
          }
        })
        self.CHECKED_USER(temp);
      }
    },
    checkAll(e) {
      if (this.checkedUser.length!=this.usersID.length) {
        this.PANEL_CTRL('checkedUser');

        this.CHECKED_USER(this.usersID);
      } else {
        this.CHECKED_USER([]);
      }
    }

  },
  components: {
    userInfo,myPages
  }

}
</script>

<style lang="scss">@import "../../static/css/style1.scss";
@import "../assets/css/myPanle.scss"

</style>
