<template lang="html">
  <section>
    <svg id="svg" width="100%" height="500px">
      <line x="100" y="10" x1="20" y1="20"></line>
    </svg>
  </section>

</template>

<script>
var d3=require('d3');
export default {
  mounted(){
    var nodes = [ { name: "桂林"    }, { name: "广州" },
          { name: "厦门"    }, { name: "杭州"   },
          { name: "上海"   }, { name: "青岛"    },
          { name: "天津"    } ];

  var edges = [  { source : 0  , target: 1 } , { source : 0  , target: 2 } ,
           { source : 0  , target: 3 } , { source : 1  , target: 4 } ,
           { source : 1  , target: 5 } , { source : 1  , target: 6 }  ];

    var svg=d3.select('#svg')
    var force = d3.forceSimulation()
      .nodes(nodes) //指定节点数组
      // .forceLink(edges) //指定连线数组
      .force("link", d3.forceLink(edges).distance(150))
      // .size([width,height]) //指定作用域范围
       //指定连线长度
      // .charge([-400]); //相互之间的作用力


      // force.start();
      console.log(nodes);
        console.log(edges);
  }
}

</script>

<style lang="css" scoped>
</style>
