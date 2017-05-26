<template>
<div id="app">
  <router-view></router-view>
  <svg id="chart" width="950" height="500">
    <rect id="rects" x="50" y="20" width="50" height="50"
  style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;
  stroke-opacity:0.9"/>
    <circle id="circles" cx="100" cy="50" r="40" stroke="black"
    stroke-width="2" fill="red"/>
    <polygon transform="translate(10, 10)" id="polygons" points="200,10 250,190 160,210"
    style="fill:lime;stroke:purple;stroke-width:1"/>

  </svg>

</div>
</template>

<script>
var d3 = require("d3");

export default {
  name: 'app',
  mounted() {
    var chart=d3.select('#chart')
    var rects = d3.select('#rects')
    var circles = d3.select('#circles')
    var polygons = d3.select('#polygons')


    var drag1 = d3.drag()
      .on("drag", function(d, i) {
        d3.select(this).attr("transform", function(d, i) {
          return "translate(" + [d3.event.x, d3.event.y] + ")"
        })
      });

    var drag2 = d3.drag()
    // .origin(function(d) {return {x : d[0],y : d[1]};})
      .on("drag", function(d, i) {
        d3.select(this)
          .attr("x", d3.event.x)
          .attr("y", d3.event.y);
      });
    var drag3 = d3.drag()
      .on("drag", function(d, i) {
        d3.select(this)
          .attr("cx", d3.event.x)
          .attr("cy", d3.event.y);
      });

    rects.call(drag2);
    circles.call(drag3);
    polygons.call(drag1);





  },
  methods: {
    drag1() {
      var drag1 = d3.drag()
        .on("drag", function(d, i) {
          d3.select(this).attr("transform", function(d, i) {
            return "translate(" + [d3.event.x, d3.event.y] + ")"
          })
        });
    },
    drag2() {
      d3.drag()
        .on('drag', function(d, i) {
          d3.select(this)
            .attr("x", d3.event.x)
            .attr("y", d3.event.y)
        })
    },

  }
}
</script>

<style lang="scss" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
#chart {
    background-color: #00bcd4;
}
</style>
