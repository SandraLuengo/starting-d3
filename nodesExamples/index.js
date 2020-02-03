let width = 1300;
let height = 1000;

/* Svg creator */
let svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "svg-container");
/* Node text creator */
nodes.map(node => {
    d3.select("body")
        .append("div")
        .attr("class", "node_names")
        .style("position", "absolute")
        .style("font-family", "Raleway")
        .style("font-size", "12px")
        .style("left", (node.x + 20) + "px")
        .style("top", (node.y + 20) + "px")
        .html(node.tag);
});
/* Connections creator */
let edge = svg.selectAll("line")
    .data(edges)
    .enter()
    .append("line")
    .attr("id", (data, i) => `edge${i}`)
    .attr("x1", data => data.source.x)
    .attr("y1", data => data.source.y)
    .attr("x2", data => data.target.x)
    .attr("y2", data => data.target.y)
    .style("stroke", "rgba(135,206,250,3)")
    .style("pointer-events", "none");
/* Nodes creator */
let node = svg.selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("id", (data, i) => `circle${i}`)
    .attr("r", data => data.r)
    .attr("cx", data => data.x)
    .attr("cy", data => data.y)
    .attr("fill", "rgb(135,206,250)")
    .attr("fill-opacity", "1")
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut)
