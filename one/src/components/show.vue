<template>
<section @mousemove="getMousePos">
  <p>展示区</p>
  <div class="">

  </div>

</section>
</template>

<script>
export default {
  methods: {
    getMousePos(event) {
      var e = event || window.event
      var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop
      var x = e.pageX - 220 || e.clientX + scrollX
      var y = e.pageY - 77 || e.clientY + scrollY
      console.log(x, y)
      return {
        'x': x,
        'y': y
      }
    }
  }

}
</script>

<style lang="scss" scoped>
section {
    width: 100%;
    height: 100%;
    background: wheat;
}
</style>
