<template lang="html">
  <section :style="input" v-html="styleData">
  <!-- <section :style="styleData"> -->
    <span>说明</span>
    <input type="text" name="" value="">
  </section>
</template>

<script>
import mixins from 'common/js/mixins'
export default {
  mixins: [mixins]

}
</script>

<style lang="scss" scoped>
section{
  position: absolute;
}

</style>
