<template lang="html">
  <section :style="styleData" v-html="styleData">
  <!-- <section :style="styleData"> -->
    <span>说明</span>
    <input type="text" name="" value="">
  </section>
</template>

<script>
export default {
  props: ['styleData'],
  data() {
    return {
      // style: {
      //   left: 0,
      //   top: 0,
      //   width: '22%'
      // },
      inputStyle: {
        // width: '22%'
        // height: '100%'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  position: absolute;
}

</style>
