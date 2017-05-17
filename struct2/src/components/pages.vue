<template lang="html">
  <article class="">
    <ul class="clearfix" :style="{width:ulWidth+'px'}" v-if="users.length!=0">
    <!-- <ul class="clearfix" > -->
      <li class="page-pre clearfix" @click="change(0)"><a href="javascript:;"><i class="arrow-left"></i></a></li>
      <li class="page-num" @click="getusers(1)" :class="{lightBlue:curr==1}">1</li>
      <li class="page-num" v-if="isPreShow">...</li>
      <!--  可点击页数-->
      <li  class="page-num"   v-for="n in pages" :class="{lightBlue:curr==n}" @click="getusers(n)">
        <span>{{n}}</span>
      </li>


      <li class="page-num" v-if="isNextShow">...</li>
      <li v-if="total!=1 && total!=0" class="page-num" @click="getusers(total)" :class="{lightBlue:curr==total}">{{total}}</li>

      <li class="page-next clearfix" @click="change(1)"><a href="javascript:;"><i class="arrow-right"></i></a></li>

    </ul>
  </article>

</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return {
      curr:1,//当前点中的数字
      // total:1,//总页数
    }
  },
  computed:{
    ...mapState(['users']),
    ...mapState({
      total:state =>state.pages
    }),
    isPreShow(){//计算是否显示前面的省略号
      if(this.curr>4 && this.total>7){
        return true
      }
    },
    isNextShow(){//计算是否显示前面的省略号
      if(this.total-this.curr>3 && this.total>7){
        return true
      }
    },
    pages(){
        let arr=[];
        var left=2;
        var right=this.total;
        if(this.isPreShow && !this.isNextShow){
          left=this.total-4;
        }
        if(this.isNextShow && !this.isPreShow){
          right=6;
        }
        if(this.isPreShow && this.isNextShow){
            left=this.curr-1;
            right=this.curr+2;
        }
        while(left<right){
          arr.push(left);
          left ++
        }
        return arr;
    },
    ulWidth(){
      return  (this.pages+4)*26
    },
    disablePrev: function() {
      return this.curr <= 1;
    },
    disableNext: function() {
      return this.curr >= this.total;
    }


  },
  methods:{
    getusers(n){
      let obj = {
        data: {
          departids: this.$route.params.id, //‘’ or 1 or 1,2,3 	指定部门的id
          page: n, //最小为1，整数	当前页码
          usernum: 1,
        }
      }
      this.curr=n;
      this.$store.dispatch('userGet', obj);
    },
    change(type){
      if(type==0){
        if(this.disablePrev){
          return false
        }
        this.curr--
        this.getusers(this.curr);
      }else {
        if(this.disableNext){
          return false
        }
        this.curr++
        this.getusers(this.curr);
      }

    }
  },

}
</script>

<style lang="scss" scoped>
@import "../assets/css/search.scss";
article{
  height: 37px
}
</style>
