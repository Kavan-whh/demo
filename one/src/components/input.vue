<template lang="html">
  <!-- <section @dragstart="trigger(event)" :style="styleData"  class="box"> -->
  <section  :style="styleData"  class="box">
    <span>说明</span>
    <input type="text" name="" value="">
  </section>
</template>

<script>
import mixins from 'common/js/mixins'
// import drage from 'common/js/drage'
export default {
  mixins: [mixins]
}
</script>

<style lang="scss" scoped>
section {
    position: absolute;
}
</style>
