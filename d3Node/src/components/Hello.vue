<template>
<svg id="chart" width="100%" height="100%">
      <rect id="rects" x="50" y="20" width="50" height="50"
    style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;
    stroke-opacity:0.9"/>
      <circle id="circles" cx="100" cy="50" r="40" stroke="black"
      stroke-width="2" fill="red"/>
      <polygon transform="translate(10, 10)" id="polygons" points="200,10 250,190 160,210"
      style="fill:lime;stroke:purple;stroke-width:1"/>
    </svg>
</template>

<script>
var d3 = require("d3");

export default {
  mounted() {
    var chart = d3.select('#chart') //画布
    var rects = d3.select('#rects') //矩形
    var circles = d3.select('#circles') //圆形
    var polygons = d3.select('#polygons') //三角

    // 坐标比例尺
    var dataset = [1, 2, 3, 1000];
    var yScale = d3.scaleBand() //序数比例尺
      .domain(d3.range(dataset.length)) //    设置序数比例尺的值域
      .range([0, 1000]); //根据输入值域的长度将自动将其分为相等的块，并且设定间距

    var xScale = d3.scaleLinear() //线性比例尺
      .domain([0, d3.max(dataset)]) //设置线性比例尺的值域
      .range([0, 950]); //设置线性比例尺的输出范围

    var xAxis = d3.axisTop(xScale)
    var yAxis = d3.axisLeft(yScale)
    // xAxis(chart)
    // yAxis(chart)
    chart.append("g")
      .attr("transform", "translate(30,20)")
      .call(xAxis)

    chart.append("g")
      .attr("transform", "translate(30,50)")
      .call(yAxis)

    // 文本块
    chart.selectAll('text')
      .attr("y", 0) //文本坐标
      .attr("x", 8)
      .attr("dy", "2em") //移动的坐标






    var drag1 = d3.drag() //多边形拖拽
      .on("drag", function(d, i) {
        d3.select(this).attr("transform", function(d, i) {
          return "translate(" + [d3.event.x - 200, d3.event.y - 100] + ")"
        })
      });

    var drag2 = d3.drag() //矩形拖拽
      .on("drag", function(d, i) {
        d3.select(this)
          .attr("x", d3.event.x - 25) //定到拖拽中间
          .attr("y", d3.event.y - 25)

      })
    var drag3 = d3.drag() //圆形拖拽
      .on("start",function(){
          d3.select(this)
          .style('fill','red')
      })
      .on("drag", function(d, i) {
        d3.select(this)
          .attr("cx", d3.event.x)
          .attr("cy", d3.event.y)
          .style("fill", "yellow");
      })
      .on('end', function() {
        d3.select(this)
          .style('fill', 'green')
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#chart {
    background-color: #00bcd4;
}
</style>
