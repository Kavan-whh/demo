<template lang="html">
  <div :style="style" :class="class" :id="randomid">

  </div>
</template>

<script>
var d3 = require("d3")

export default {
  props: {
    style: Object,
    class: String,
    randomid: {
      type: String,
      default () {
        return 'chart'
      }
    },
    // chartdata: {
    //   type: Object,
    //   default: function() {
    //     return {
    //       columns: [
    //         ['data1', 30, 200, 100, 400, 150, 250],
    //         ['data2', 50, 20, 10, 40, 15, 25]
    //       ]
    //     }
    //   }
    // },
  },
  mounted() {
    this.drawChart()
  },
  methods: {
    drawChart() {
      var self = this
      var chart = d3.select(self.randomid)
        .append("svg")
        .style('width', self.style.width)
        .style('height', self.style.height)
    }

  }
}
</script>

<style lang="css">
</style>
