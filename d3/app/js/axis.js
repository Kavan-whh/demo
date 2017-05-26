var dataset = [1, 2, 1000];

// 比例尺
var linear = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, 250]);



var axis = d3.axisTop(linear)
var axis2=d3.axisLeft(linear)

var svg = d3.select('body')
    .append('svg')
    .attr('height', 300)
    .attr('width', 300)
    .append("g");

axis(svg);