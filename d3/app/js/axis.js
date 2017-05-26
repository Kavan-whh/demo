var dataset = [1, 2, 3];

var linear = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([0, 250]);

var axis = d3.svg.axis()
    .scale(linear)
    .orient("bottom")
    .ticks(5);
	 
var svg = d3.select('body')
	.append('svg')
	.attr('height', 300)
	.attr('width', 300)
	.append("g");

axis(svg);