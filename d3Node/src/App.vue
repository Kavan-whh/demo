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
      .style("height", (d)=> d + "px")
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
