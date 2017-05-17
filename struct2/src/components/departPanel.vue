<template lang="html">
  <ul :class="cls">
       <section v-for="(item,index) in lists">
         <li class="root" v-if="level==1">
             <section class=""  style="paddingLeft:10px">
                <router-link tag="div" :to="'/depart/'+item.id" v-on:click.native="clear(item)">
                   <i class="jstree-icon" :class="iconCls[expand[item.id]]"   @click.stop="chageClass(item)"></i>
                 <!-- 文件夹图标 -->
                 <!-- <span class="mod-icon"></span> -->
                 <!-- 部门名称 -->
                 <span @click="bubble(item.id);">{{item.name}}</span>
                 <!--  有全选的版本-->
                </router-link>
             </section>
             <div class="div_bar" v-if="hasPermit || auth.manageable.indexOf(item.id)!=-1 ">
                  <span @click.stop="edit(item.id)" class="icon_write"></span>
                  <span @click.stop="add(item.id)"  class="icon_add"></span>
                  <span @click.stop="del(item.id)" class="icon_remo"></span>
                  <a class="icon_send"  :href="'http://fang.uc.com/wechat/backend/corp-contact/export-department?id='+ item.id "></a>
              </div>
         </li>
           <li class="notRoot" v-if="level!=1 && auth.allowids.indexOf(item.id)!=-1">
               <section class="" :style="{paddingLeft: 10 * level + 'px'}">
                   <router-link class="wrap" tag="div" :to="'/depart/'+item.id" v-on:click.native="clear(item)">
                       <i class="jstree-icon" :class="iconCls[expand[item.id]]"   @click.stop="chageClass(item)"></i>
                     <!-- 文件夹图标 -->
                     <span class="mod-icon mod-wj"></span>
                     <!-- 部门名称 -->
                     <span  @click.native="bubble(item.id);">{{item.name}}</span>
                   </router-link>

                   <!-- 没任何权限的部门渲染 -->

              </section>
              <div class="div_bar" v-if="hasPermit || auth.manageable.indexOf(item.id)!=-1 ">
                   <span @click.stop="edit(item.id)" class="icon_write"></span>
                   <span @click.stop="add(item.id)"  class="icon_add"></span>
                   <span @click.stop="del(item.id)" class="icon_remo"></span>
                   <a class="icon_send"  :href="'http://fang.uc.com/wechat/backend/corp-contact/export-department?id='+ item.id "></a>
               </div>
          </li>

          <li class="notRoot outAllowids" v-if="level!=1 && auth.allowids.indexOf(item.id)==-1">
              <section class="" :style="{paddingLeft: 10 * level + 'px'}">
                  <!-- 没任何权限的部门渲染 -->
                  <div class="wrap gray" tag="div"  @click="clear(item,$event)">
                     <i class="jstree-icon" :class="iconCls[expand[item.id]]"   @click.stop="chageClass(item)"></i>
                   <!-- 文件夹图标 -->
                   <span class="mod-icon mod-wj"></span>
                   <!-- 部门名称 -->
                   <span  @click.native="bubble(item.id);">{{item.name}}</span>
                  </div>
             </section>
             <div class="div_bar" v-if="hasPermit || auth.manageable.indexOf(item.id)!=-1 ">
                  <span @click.stop="edit(item.id)" class="icon_write"></span>
                  <span @click.stop="add(item.id)"  class="icon_add"></span>
                  <span @click.stop="del(item.id)" class="icon_remo"></span>
                  <a class="icon_send"  :href="'http://fang.uc.com/wechat/backend/corp-contact/export-department?id='+ item.id "></a>
              </div>
         </li>

           <depart-panel v-on:ckdepart="bubble" v-show="expand[item.id] == 2" v-if="item.children" :lists="item.children" :level="level+1"></depart-panel>
       </section>
   </ul>
</template>

<script>
var departMixin = {
  props: ['cls', 'lists', 'level', 'curr'],
  data: function() {
    var expand = {};
    Object.values(this.lists).forEach(item => {
      expand[item.id] = item.children ?
        item.id == 1 ? 2 : 1 :
        0;
    })
    return {
      expand: expand, // 控制有children的节点展开收起
    };
  },

  methods: {
    // 冒泡事件到vm
    bubble(id) {
      this.$emit('ckdepart', id);
    },

  }
}

import {
  mapState,
  mapMutations
} from 'vuex'
export default {
  mixins: [departMixin],
  name: 'depart-panel',
  data() {
    return {
      iconCls: ['jstree-no', 'jstree-icon-sq', ''] //指下，指向右,没有
    }
  },
  computed:{
    ...mapState(['dropDown']),
    ...mapState({
      hasPermit:state=> state.data.hasPermit,
      auth:state=> state.data.auth,
    })
  },
  methods: {
    ...mapMutations(['SHOW_MODAL','CHECKED_USER','DEPART_SAVE_DATA','PANEL_CTRL']),
    chageClass(item) {
      if (this.expand[item.id] != 0) { //存在子集
        this.expand[item.id] = 3 - this.expand[item.id];
      }
    },
    clear(item,e){
      this.PANEL_CTRL('');
      this.CHECKED_USER([]);
      if(Object.values(this.auth.allowids).indexOf(parseInt(item.id))==-1){//解决权限功能
        this.chageClass(item);

      }

    },
    add(id) {
       this.SHOW_MODAL('addModal');
       this.DEPART_SAVE_DATA({id});
    },
    del(id) {
       this.SHOW_MODAL('delModal');
        this.DEPART_SAVE_DATA({id});
    },
    edit(id){
      this.SHOW_MODAL('editModal');
       this.DEPART_SAVE_DATA({id});
    }

  }

}
</script>

<style lang="scss" scoped>
@import "../../static/css/all.scss";
@import "../assets/css/departPanel.scss";



</style>
