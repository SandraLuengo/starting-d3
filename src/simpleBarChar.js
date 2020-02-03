// javascript
let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

let svgWidth = 500, svgHeight = 300, barPadding = 5;
let barWidth = (svgWidth / dataset.length);


let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

let barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", (data) => svgHeight - data)
    .attr("height", (data) => data)
    .attr("width", barWidth - barPadding)
    .attr("transform", (data, i) => {
        let translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    })
    .attr("fill", function (d) {
        return `rgb(${d}, ${d+50}, 0)`
    });


d3.select('svg').style('background-color', 'grey');