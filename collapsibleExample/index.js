var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

d3.json("./readme.json", function(error, graph) {
  if (error) throw error;

  var force = d3.layout.force()
      .nodes(graph.nodes)
      .links(graph.links)
      .size([width, height])
      .start();

  var link = svg.append("path")
      .attr("class", "link");

  var node = svg.selectAll(".node")
      .data(graph.nodes)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", 4.5)
      .call(force.drag);

  force.on("tick", function() {
    link.attr("d", "M" + graph.links.map(function(d) { return d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y; }).join("M"));
    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });
});