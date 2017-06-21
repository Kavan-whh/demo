<template>
<!-- <section class="show__wrap" @mousemove="getMousePos"> -->
<section class="show__wrap">
  <p>展示区</p>

  <div class="panel" v-for="item in initData">
    <m-input v-if="item.type===0" :input="item.data" :x="item.x" :y="item.y"></m-input>
    <duo-xuan v-if="item.type==1" :input="item.data" :x="item.x" :y="item.y"></duo-xuan>
    <duo-hang  v-if="item.type==2" :input="item.data" :x="item.x" :y="item.y"></duo-hang>
  </div>

</section>
</template>

<script>
import MInput from 'components/input.vue'
import DuoXuan from 'components/danxuan.vue'
import DuoHang from 'components/duohang.vue'
import {
  mapState,
  mapMutations
} from 'vuex'

import initData from 'api/initData'
export default {
  data() {
    return {
      initData,
      n: 0,
      styleData: {}
    }
  },
  methods: {
    ...mapMutations(['M_ISCREATE']),
    getMousePos(event) {
      const e = event || window.event
      const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
      const scrollY = document.documentElement.scrollTop || document.body.scrollTop
      const x = e.pageX - 220 || e.clientX + scrollX
      const y = e.pageY - 77 || e.clientY + scrollY
      return {
        'x': x,
        'y': y
      }
    },
    createEle() {
      const temp = {
        type: this.type,
        data: {}
      }
      const obj = Object.assign({}, temp, this.getMousePos())
      this.initData.push(obj)
    }
  },
  computed: {
    ...mapState(['isCreat', 'type'])
  },
  watch: {
    isCreat(newVal) {
      if (newVal) {
        this.createEle()
        console.log(this.n)
        this.M_ISCREATE(false) // 关闭创建
      }
    }
  },
  components: {
    MInput,
    DuoHang,
    DuoXuan
  }
}
</script>

<style lang="scss" scoped>
.show__wrap {
    width: 100%;
    height: 500px;
    background: wheat;
    .show__bd {
        position: relative;
        height: 100%;
    }
}
.panel{
  position: relative;
  &>section{
    position: absolute;
    // -webkit-user-drag: element;
    // cursor: move;
    // -webkit-user-select: none;
  }
  &>div{
    position: absolute;
  }
}
</style>
