<template lang="html">
  <!-- <section @dragstart="trigger(event)" :style="styleData"  class="box"> -->
  <section  :style="styleData"  class="box">
    <span>说明</span>
    <input type="text" name="" value="">
  </section>
</template>

<script>
import mixins from 'common/js/mixins'
import drage from 'common/js/drage'
export default {
  mixins: [mixins],
  mounted() {
    const params = { // 容器
      left: 0,
      top: 0,
      currentX: 0,
      currentY: 0,
      flag: false
    }
    $('.huabu').delegate('.box', 'mousedown', function(event) {
      params.ele = this
      params.flag = true
      const e = event
      params.currentX = e.clientX
      params.currentY = e.clientY
    })
    // $(document).delegate(('*', 'mouseup', function() {
    //   console.log(this)
    //   params.flag = false
    //   const target = $(this)
    //   if (self.getCss(target, 'left') !== 'auto') {
    //     params.left = self.getCss(target, 'left')
    //   }
    //   if (self.getCss(target, 'top') !== 'auto') {
    //     params.top = self.getCss(target, 'top')
    //   }
    // })
    $('.huabu').mousemove(function() {
      if (!params.flag) {
        return
      }
      // $(document).mousemove(function() {
      const target = $(this)
      const e = event || window.event
      const nowX = e.clientX
      const nowY = e.clientY
      const disX = nowX - params.currentX
      const disY = nowY - params.currentY
      console.log(disX, disY)
      target.css('left', parseInt(params.left) + disX + 'px')
      target.css('top', parseInt(params.top) + disY + 'px')
    })
  }
}
</script>

<style lang="scss" scoped>
section {
    position: absolute;
}
</style>
