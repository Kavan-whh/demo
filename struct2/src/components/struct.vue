<template lang="html">
  <section>
    <my-search></my-search>
    <!--  组织选择-->
    <section class="content" :style="{height:boxHeight+'px'}">
      <depart-panel v-on:ckdepart="" cls="" :lists="structTree" :level="1" :curr="{}"></depart-panel>
    </section>

    <!-- 底部同步按钮 -->
    <div class="sync-btn">
      <div class="">
        <a href="javascript:void(0)" @click="sync">同步组织标签</a>
      </div>
    </div>

  </section>
</template>

<script>
import mySearch from '@/components/search.vue'
import departPanel from '@/components/departPanel'
import {mapState} from 'vuex'

export default {
  components:{
    mySearch,departPanel
  },
  methods:{
    sync(){//同步按钮
      ld.show();
      let qs = require('qs');
      this.$http.post('/wechat/backend/corp-contact/sync',qs.stringify({
        type:	'department',
      })).then(function(response) {
        // 操作渲染数据
        // console.log(response);
        setTimeout(function(){
          ld.hide();
        },500)
      })



      // this.$http.post('/wechat/backend/corp-contact/sync',{
      //   type:	'department',
      // }).then(function(response) {
      //   // 操作渲染数据
      //   console.log(response);
      // })
    }

  },
  computed:{
    ...mapState(['']),
    ...mapState({
      structTree: state => state.data.structTree,
    }),
    boxHeight(){
      let temp = window.innerHeight - 150-71-97;
    return temp
    }
  }
}
</script>

<style lang="scss" scoped>
// @import "../../delete/temp.scss";
.content{
  overflow-y: scroll;
  padding: 20px 0;
  margin: -20px 0;
}
.sync-btn{
      height: 47px;
    line-height: 47px;
    background: #f2f2f2;
    width: 100%;
    padding: 6px;
    box-sizing: border-box;
    div{
      width: 100%;
      position: relative;
      color: #00b6cd;
      a{
        width: 100%;
line-height: 36px;
height: 36px;
background: #F2FCFA;
display: block;
text-align: center;
box-sizing: border-box;
position: relative;
font-size: 14px;
padding-left: 3px;
color: #00b6cd;
      }
    }
}

</style>
