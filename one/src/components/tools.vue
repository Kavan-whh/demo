<template>
<section >
  <p>工具</p>
  <ul>
    <li class="element" @dragend="createElement(0)">我是图片</li>
  </ul>
</section>
</template>
<script>
import {
  mapMutations,
  mapState
} from 'vuex'
export default {
  computed: {
    ...mapState([])
  },
  methods: {
    ...mapMutations(['M_CREATE']),
    createElement(type) {
      this.M_CREATE({type: type, isCreat: true})
    }
  }

}
</script>
<style lang="scss" scoped>
section {
    width: 300px;
    overflow: hidden;
    color: gray;
    li {
        background: gray;
        list-style: none;
        width: 70%;
        color: white;
    }
    .element {
        -webkit-user-drag: element;
        cursor: move;
        -webkit-user-select: none;
    }
}
</style>
