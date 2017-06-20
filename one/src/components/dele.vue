<template lang="html">
  <section>
    <div class="" v-for="item in initData" >
      <one v-if="item.type==1" :input="item.data" :x="item.x" :y="item.y"></one>
      <two v-if="item.type==2"></two>
      <three v-if="item.type==3"></three>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
