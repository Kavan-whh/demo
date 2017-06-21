<template lang="html">
  <section :style="styleData" class="box">
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
    const oBox = document.getElementsByClassName('box')[0]
    let cb = function(data) {
      console.log(data)
    }
    drage(oBox, oBox, cb)
  }

}
</script>

<style lang="scss" scoped>
section {
    position: absolute;
}
</style>
