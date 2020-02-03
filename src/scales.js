let dataset = [1, 2, 3, 4, 5];

let svgWidth = 500, svgHeight = 300, barPadding = 5;
let barWidth = (svgWidth / dataset.length);


let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);

let barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", (data) => svgHeight - yScale(data))
    .attr("height", (data) => yScale(data))
    .attr("width", barWidth - barPadding)
    .attr("transform", (data, i) => {
        let translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    }); 

