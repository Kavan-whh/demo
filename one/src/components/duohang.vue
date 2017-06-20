<template lang="html">
  <section :style="input">
    <label for="">多行文本框</label>
    <div class="">
      <textarea name="name" rows="8" cols="80"></textarea>
    </div>
  </section>

</template>

<script>
export default {
  props: ['input']

}
</script>

<style lang="css">
</style>
