<template>
  <div id="app">
    <router-view></router-view>
    <div class="">

    </div>
  </div>
</template>

<script>
var d3 = require("d3");

export default {
  name: 'app',
  mounted(){
    d3.select('#app')
      .selectAll("div")
      .data([4, 8, 15, 16, 23, 42])
      .enter()
      .append("div")
      .style("height", (d)=> d*5 + "px")
      .style('width',(d)=>d*10+'px')
      .style('background','yellow')

      .transition().duration(1000)
      // // Styles after entering
    	.style('height', '30px')
      .style('opacity', .2)
      .style('transform', 'none')
      .call(this.drag1)
  },
  methods:{
    drag1(){
      console.log(d3);
      d3.drag()
      .on('drag',function(){
        d3.select(this)
        .attr("x", d3.event.x)
        .attr("y", d3.event.y)
      })
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app div {
     display: inline-block;
     background: #4285F4;
     width: 20px;
     height: 20px;
     margin-right: 3px;
   }
</style>
