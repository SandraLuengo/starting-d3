
const handleMouseOver = (d, i) => {
    linkArr = linked(i);
    linkArr[0].map(link => {
        d3.select(link).transition().duration(600)
            .attr("r", data => data.r + 3).attr("fill", "rgb(70,130,180)").attr("fill-opacity", "1");
    });
    linkArr[1].map(link => {
        d3.select(link).transition().duration(600)
            .attr("r", data => data.r + 3).attr("fill", "rgb(65,10,225)").attr("fill-opacity", "1");
    })
    linkArr[2].map(link => {
        d3.select(link).transition().duration(600).style("stroke", "blue").style("stroke-opacity", "0.5");
    })
}
const handleMouseOut = (d, i) => {

    linkArr = linked(i);
    linkArr[0].map(link => {
        d3.select(link).transition().duration(900)
            .attr("r", data => data.r).attr("fill", "rgb(135,206,250)").attr("fill-opacity", "1");
    });
    linkArr[1].map(link => {
        d3.select(link).transition().duration(900)
            .attr("r", data => data.r ).attr("fill", "rgb(135,206,250)").attr("fill-opacity", "1");
    })
    linkArr[2].map(link => {
        d3.select(link).transition().duration(600).style("stroke", "rgb(135,206,250)").style("stroke-opacity", "0.4");
    })
}
const linked = (index) => {
    let connections = [[], [], []]
    edges.map((edge, i) => {
        if (edge.source.name == index || edge.target.name == index) {
            let origin = `#circle${edge.source.name}`;
            let target = `#circle${edge.target.name}`;
            !connections[0].includes(origin) && connections[0].push(origin);
            !connections[1].includes(target) && connections[1].push(target);
            connections[2].push(`#edge${i}`);
        }
    })
    return connections;
}