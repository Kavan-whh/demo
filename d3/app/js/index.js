var dataArr=[10,20,30]
var dataHeight=25


// var dataSet=[1,2,100,30,6]
// var min=d3.min(dataSet)
// var max=d3.max(dataSet)
//
// var linear=d3.scale.linear()
//   .domain([min,max])
//   .range([0,300]);
//

// console.log(linear(1));

// $('body').css('background', 'red');
d3.select('body')
.append('svg')
.attr('heiht', 300)
.attr('width',300)
.selectAll('rect')
.data(dataArr)
.enter()
.append('rect')
.attr('width',function(d,i){
  return d
})
.attr('heiht',dataHeight-2)
.attr('x',0)
.attr('y',function(d,i){
  return i * dataHeight
})
