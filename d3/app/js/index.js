var svg = d3.select("body").append("svg")
  .attr("width", 960)
  .attr("height", 500);

var group = svg.append("svg:g")
  .attr("transform", "translate(10, 10)")
  .attr("id", "group");

var rect1 = group.append("svg:rect")
  .attr("rx", 6)
  .attr("ry", 6)
  .attr("x", 5/2)
  .attr("y", 5/2)
  .attr("id", "rect")
  .attr("width", 250)
  .attr("height", 125)
  .style("fill", 'white')
  // .style("stroke", d3.schemeCategory20c())
  .style('stroke-width', 5);


var html1 = group.append("foreignObject")
  .attr("x", 50)
  .attr("y", 25)
  .attr("width", 200)
  .attr("height", 100)
  .attr("id", "fobject")
  // .style("border-color", d3.schemeCategory20c())
  .append("xhtml:div")
  .style("font", "14px 'Helvetica Neue'")
  .html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu enim quam.");

var innerSvg = svg.append("svg")
  .attr("x", 500)
  .attr("y", 10)
  .attr("id", "innerSvg");

var rect2 = innerSvg.append("svg:rect")
  .attr("rx", 6)
  .attr("ry", 6)
  .attr("x", 5/2)
  .attr("y", 5/2)
  .attr("id", "rect")
  .attr("width", 250)
  .attr("height", 125)
  .style("fill", 'white')
  // .style("stroke", d3.schemeCategory20c())
  .style('stroke-width', 5);

var html2 = innerSvg.append("foreignObject")
  .attr("x", 50)
  .attr("y", 25)
  .attr("width", 200)
  .attr("height", 100)
  .attr("id", "fobject")
  // .style("border-color", d3.schemeCategory20c())
  .append("xhtml:div")
  .style("font", "14px 'Helvetica Neue'")
  .html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu enim quam.");

var drag1 = d3.drag()
    .on("drag", function(d,i) {
        d3.select(this).attr("transform", function(d,i){
            return "translate(" + [ d3.event.x,d3.event.y ] + ")"
        })
    });

var drag2 = d3.drag()
    .on("drag", function(d,i) {
        d3.select(this)
        .attr("x", d3.event.x)
        .attr("y", d3.event.y);
    });

group.call(drag1);
innerSvg.call(drag2);