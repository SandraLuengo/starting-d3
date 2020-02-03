let dataset = [
    [5, 20],
    [480, 90],
    [250, 50],
    [100, 33],
    [330, 95],
    [410, 12],
    [475, 44],
    [25, 67],
    [85, 21],
    [220, 88]
];
let width = 500;
let height = 100;
let radio = 5;
let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", data => data[0])
    .attr("cy", data => data[1])
    .attr("r", data => Math.sqrt(height - data[1]));