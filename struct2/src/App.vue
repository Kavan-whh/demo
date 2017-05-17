<template>
  <div id="vue-content" style="padding:0;left:0;">
    <news-modal></news-modal>
    <div class="col-xs-12">
      <!--  头部-->
      <my-title></my-title>
      <section class="content-box clearfix">
        <!-- 左边组织架构 -->
        <my-struct class="left"></my-struct>
        <!-- 右边面板:mypanel -->
        <router-view class="col-r"></router-view>
      </section>
    </div>
  </div>
</template>


<script>
import myTitle  from '@/components/title'
import myStruct  from '@/components/struct'
import newsModal  from '@/components/newsModal'


export default {
  name: 'app',
components:{myTitle,myStruct,newsModal},
created: function() {
  var self = this;
  $(document).click(function(e) {
    if (self.$store.state.dropDown == '') {
      return;
    }
    if ($(e.target).closest('.searchBox').length == 0) {
      self.$store.commit('DROP_DOWN', '');
    }
  });
},

}
</script>

<style lang="scss" scoped>
// 上线备注
.left{
  width: 23.5%;
}
.content-box{
  background: #fff;
    padding: 6px;
}

// 上线备注end
#page-title{
  text-align: left;
}

</style>
