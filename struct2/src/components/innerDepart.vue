<template lang="html">
  <ul :class="cls">
            <section v-for="(item,key) in lists">
                <!-- 渲染根 -->
                <li class="root"  v-if="level==1">
                    <section class=""  style="paddingLeft:10px;">
                       <i class="jstree-icon" :class="iconCls[expand[item.id]]"   @click.stop="chageClass(item)"></i>
                        <!-- 文件夹图标 -->
                        <!-- <span class="mod-icon"></span> -->
                        <!-- 部门名称 -->
                        <span @click="bubble(item.id);">{{item.name}}</span>
                        <!--  有全选的版本-->
                    </section>
                </li>
                <li v-if="level!=1" :class="{light:curr==item.id}" @click="bubble(item.id);">
                    <section class="" :style="{paddingLeft: 10 * level +6*(level-2)+ 'px'}">
                        <i class="jstree-icon" :class="iconCls[expand[item.id]]" @click="chageClass(item)"></i>
                        <!-- 文件夹图标 -->
                        <span class="mod-icon"></span>

                        <!-- 部门名称 -->
                        <span >{{item.name}}</span>
                    </section>
                </li>
                <my-digui v-on:ckdepart="bubble" :curr=curr v-show="expand[item.id] == 2" v-if="item.children" :lists="item.children" :level="level+1"></my-digui>
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
       root: '1',
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
  name: 'my-digui',
  data() {
    return {
      iconCls: ['jstree-no', 'jstree-icon-sq', ''] //指下，指向右,没有
    }
  },
  methods: {
    chageClass(item) {
      if (this.expand[item.id] != 0) { //存在子集
        this.expand[item.id] = 3 - this.expand[item.id];
      }
    },
  }

}
</script>

<style lang="scss" scoped>
@import "../../static/css/all.scss";
@import "../assets/css/departPanel.scss";

</style>
