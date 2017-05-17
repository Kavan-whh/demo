<template lang="html">
  <section  v-if="panleCtrl.length">
    <pop-hd :title="headTitle" :closeMethod="close" height='36px' ></pop-hd>
    <section v-if="isUserInfo">
      <div class="top_content mcontent">
          <img :src="propsData.avatar  ? propsData.avatar:STATIC_PATH+'img/avatar.png'" alt="">
          <div class="label_comp">
              <span>{{propsData.name}} <span v-if="propsData.gender!=1" class='sex_w'></span><span v-else class='sex_m' style="right:12px;"></span></span>
              <!-- <p>微信昵称：{{propsData.name}}</p> -->
          </div>
          <span v-if="propsData.status == 1" class="gone"></span>
          <span v-else-if="propsData.status == 2" class="disab" style="display:block;"></span>
          <span  v-else class="not"></span>
          <div class="clearfix"></div>
      </div>
      <div class="bottom_content" :style="{height:contentHeight+'px'}">
          <div class="row">
              <div class="col-md-3">账号</div>
              <div class="col-md-9">{{propsData.userid}}</div>
          </div>
          <div class="row">
              <div class="col-md-3">手机</div>
              <div class="col-md-9">{{propsData.mobile?propsData.mobile :'无'}}</div>
          </div>
          <div class="row">
              <div class="col-md-3">微信</div>
              <div class="col-md-9">{{propsData.weixinid? propsData.weixinid:'无'}}</div>
          </div>
          <div class="row">
              <div class="col-md-3">部门</div>
              <div class="col-md-9">{{propsData.department_name ? propsData.department_name[0]:propsData.department_name }}</div>
          </div>
          <div class="row">
              <div class="col-md-3">标签</div>
              <div class="col-md-9">
                  <span v-if="propsData.tags_name" v-for="(item,index) in propsData.tags_name" :class="{color_3:index%3==0,color_1:index%3==1,color_2:index%3==2}">{{item}}</span>
                  <span v-if="JSON.stringify(propsData.tags_name)=='[]'">无</span>
              </div>
          </div>
      </div>
        <!--  底部-->
      <div class="btn-wrap" v-if="hasPermit || auth.manageids.indexOf(this.$route.params.id)!=-1">
            <a @click="delUser(propsData.uid)" href="javascript:void(0)">删除</a>
            <a  :href="editHref">修改</a>
            <a @click="disable(propsData.uid)" href="javascript:void(0)">禁用</a>
            <a @click="move(propsData.uid)" href="javascript:void(0)">移动</a>
      </div>
    </section>

    <!-- 批量选择 -->
    <section class="mod-pl"  v-else>
      <ul class="clearfix" :style="{height:plHeight+'px'}">
        <!--  渲人-->
        <!-- <p>{{usersObj[732]}}</p> -->
        <li class="member-men" v-for="(id,index) in checkedUser" :class="{margin:index%4===3}">
          <img :src="usersObj[id].avatar ? usersObj[id].avatar : STATIC_PATH+'img/avatar.png'" alt="">
          <i class="mod-close-icon"  @click="plDelete(id)"></i>
          <p>{{usersObj[id].name}}</p>
        </li>
      </ul>
      <div class="btn-wrap" v-if="hasPermit || auth.manageids.indexOf(this.$route.params.id)!=-1">
        <a @click="delUsers" href="javascript:void(0)">删除</a>
        <a href="javascript:void(0)" @click="move">移动</a>
      </div>
    </section>




  </section>
</template>
<script>
import popHd from '@/components/popHd'
import {mapState,mapMutations}  from 'vuex'
export default {
  data(){
    return{
      STATIC_PATH,
      headTitle:'',
      isUserInfo:1,//1显示用户详情，0显示批量选择
    }
  },
  props: ['propsData'],
  components: {
    popHd
  },
  computed: {
    ...mapState(['panleCtrl','checkedUser','users']),
    ...mapState({
      hasPermit:state =>state.data.hasPermit,
      auth:state=>state.data.auth
    }),
    plHeight(){
      var temp;
      console.log(window.innerHeight);
      if(this.hasPermit || this.auth.manageids.indexOf(this.propsData.uid)!=-1){
        temp = window.innerHeight - 267-71-97;
      }else{
          temp = window.innerHeight - 267+38-71-97;
      }
      return temp
    },
    contentHeight(){
      var temp;
      if(this.hasPermit || this.auth.manageids.indexOf(this.propsData.uid)!=-1){
        temp = window.innerHeight - 327-71-97;
      }else{
          temp = window.innerHeight - 327+38-71-97;
      }
      return temp;
    },
    editHref(){
      let id=this.propsData.uid;
      let url='http://fang.uc.com/backend/user/detail?uid='+id+'#corp_info';
      return url
    },
    usersObj(){
      let obj={};
      this.users.forEach(item=>{
        this.$set(obj,item.uid,item)
      })
      return obj;
    }

  },
  watch:{
    panleCtrl:function(newValue){
      switch (newValue) {
        case 'userInfo':
          this.headTitle='人员信息';
          this.isUserInfo=1;
          break;
        case 'checkedUser':
          this.headTitle='批量选择';
          this.isUserInfo=0;
          break;
        default:
          break;

      }
    }
  },
  methods:{
    ...mapMutations(['PANEL_CTRL','CURRUSER_ID','CHECKED_USER','SHOW_MODAL','DEPART_SAVE_DATA','SHOW_CTRL']),
    close(){
      this.PANEL_CTRL('');
    },
    disable(id){
      let self=this;
      bootbox.confirm('确认禁用',function(ok){
        if(ok){
          let qs=require('qs');
          self.$http.post('/wechat/backend/corp-contact/disable-user',qs.stringify({
            uid:id
          }))
          .then(function(response){
            // console.log(response);
              location.reload();
          })
        }
      })


    },
    plDelete(id){
      let temp;
      temp=this.checkedUser.filter(item=>{
        return item!=id;
      });
      this.CHECKED_USER(temp);
    },
    delUser(id) {
        let ids=[id];
        this.delPost(ids);
    },
    delUsers(){
      let ids=this.checkedUser;
      this.delPost(ids);
    },
    delPost(ids){
      let self=this;
      bootbox.confirm('确认删除？',function(ok){
        if(ok){
          let qs=require('qs');
          self.$http.post('/wechat/backend/corp-contact/del-user',qs.stringify({
            ids
          }))
          .then(function(rep){
            location.reload();
          })

        }
      })
    },
    move(currUserId){
      if(this.isUserInfo){
          var id=this.propsData.uid;
      }else {
        //数组
        var  id=this.checkedUser;
      }
      if(currUserId){//用来移动后的保存数据-用户id
        this.CURRUSER_ID(currUserId);
      }
      this.SHOW_MODAL('moveModal');
      this.SHOW_CTRL(false);//关掉增删改查代码
      this.DEPART_SAVE_DATA({id});

    }


  }

}
</script>

<style lang="scss" scoped>
@import "../assets/css/userInfo.scss";





</style>
