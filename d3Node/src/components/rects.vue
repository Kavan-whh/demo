<template lang="html">
    <rect :id="randomid" :x="x" :y="y" :width="width" :height="height"
  style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;
  stroke-opacity:0.9"/>

</template>

<script>
export default {
  props:['x','y','width','height','randomid']
}
</script>

<style lang="css">
</style>
