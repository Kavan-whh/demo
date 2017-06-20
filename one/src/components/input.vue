<template lang="html">
  <section :style="style">
    <span>说明</span>
    <input type="text" name="" value="" :style="inputStyle">
  </section>
</template>

<script>
export default {
  // props:[style],
  data() {
    return {
      style: {
        left: 0,
        top: 0,
        width: '22%'
      },
      inputStyle: {
        // width: '22%'
        // height: '100%'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
