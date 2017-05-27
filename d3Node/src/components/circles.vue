<template lang="html">
    <circle :id="randomid" :cx="cx" :cy="cy" :r="r" stroke="black"
    stroke-width="2" fill="red"/>

</template>

<script>
export default {
  props:['cx','cy','r','randomid']
}
</script>

<style lang="css">
</style>
