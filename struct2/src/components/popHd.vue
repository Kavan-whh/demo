<template lang="html">
  <section :style="style" >
    {{title}}<span class="icon_labeldele" @click="close"></span>
  </section>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props:['width','height','title','closeMethod'],
  computed:{
    style(){
      return{
        width:this.width ?  this.width:'300px',
        height:this.height ? this.height:'44px',
        lineHeight:this.height ? this.height:'44px',

      }
    },

  },
  methods:{
    ...mapMutations(['SHOW_MODAL']),
    close(){
      if(!this.closeMethod){
        this.SHOW_MODAL('');
      }else {
        this.closeMethod();
      }

    }
  }

}
</script>

<style lang="css" scoped>
.icon_labeldele{
  width: 13px;
  height: 13px;
  position: absolute;
  right: 12px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  cursor: pointer;
}
section{

width: 100%;
text-align: center;
font-size: 12px;
color: #2B425B;
border-bottom: 1px solid #e5e5e5;
position: relative;
}
</style>
