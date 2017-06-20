<template>
<section class="show__wrap" @mousemove="getMousePos">
  <p>展示区</p>
  <div class="show__bd">
    <m-input></m-input>
  </div>

</section>
</template>

<script>
import MInput from 'components/input.vue'

export default {
  methods: {
    getMousePos(event) {
      const e = event || window.event
      const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
      const scrollY = document.documentElement.scrollTop || document.body.scrollTop
      const x = e.pageX - 220 || e.clientX + scrollX
      const y = e.pageY - 77 || e.clientY + scrollY
      console.log(x, y)
      return {
        'x': x,
        'y': y
      }
    }
  },
  components: {
    MInput
  }
}
</script>

<style lang="scss" scoped>
.show__wrap {
    width: 100%;
    height: 500px;
    background: wheat;
    position: relative;
    .show__bd{
      position: relative;
    }
}
</style>
