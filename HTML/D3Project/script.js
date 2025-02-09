// script.js
d3.csv("datasaurus_dozen.csv").then(function(data) {

    // Define margins and chart dimensions
    const margin = { top: 60, right: 40, bottom: 80, left: 70 },
        width = 400 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    // Filter data for "dino" and "star" datasets
    const dinoData = data.filter(d => d.dataset === "dino");
    const starData = data.filter(d => d.dataset === "star");

    // Create tooltip element
    const tooltip = d3.select("body").append("div").attr("class", "tooltip");


    // Scatterplot (superimposed)
    const scatterSvg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    scatterSvg.append("text").attr("x", (width / 2)).attr("y", 0 - (margin.top / 2)).attr("text-anchor", "middle").style("font-size", "16px").style("font-weight", "bold").text("Superimposed Scatterplot (Dino vs. Star)");
    scatterSvg.append("text").attr("x", width/2).attr("y", height + margin.bottom/2).attr("text-anchor", "middle").text("X-axis");
    scatterSvg.append("text").attr("transform", "rotate(-90)").attr("y", 0 - margin.left).attr("x",0 - (height / 2)).attr("dy", "1em").attr("text-anchor", "middle").text("Y-axis");


    // Define scales for scatterplot
    const xScaleScatter = d3.scaleLinear().domain([0, d3.max(data, d => +d.x) * 1.1]).range([0, width]); // Added padding to domain
    const yScaleScatter = d3.scaleLinear().domain([0, d3.max(data, d => +d.y) * 1.1]).range([height, 0]); // Added padding to domain

    // Add axes to scatterplot
    scatterSvg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(xScaleScatter));
    scatterSvg.append("g").call(d3.axisLeft(yScaleScatter));

    // Add circles for "dino" data
    scatterSvg.selectAll("circle.dino")
        .data(dinoData)
        .enter().append("circle")
        .attr("class", "dino")
        .attr("cx", d => xScaleScatter(+d.x))
        .attr("cy", d => yScaleScatter(+d.y))
        .attr("r", 4) // Increased radius
        .style("fill", "steelblue") // Changed color
        .on("mouseover", (event, d) => { // Tooltip on hover
            tooltip.transition().duration(200).style("opacity", .9);
            tooltip.html("Dino: x=" + d.x + ", y=" + d.y)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", () => { // Hide tooltip on mouseout
            tooltip.transition().duration(500).style("opacity", 0);
        });

    // Add circles for "star" data (similar to "dino" data)
    scatterSvg.selectAll("circle.star")
        .data(starData)
        .enter().append("circle")
        .attr("class", "star")
        .attr("cx", d => xScaleScatter(+d.x))
        .attr("cy", d => yScaleScatter(+d.y))
        .attr("r", 4)
        .style("fill", "orange")
        .on("mouseover", (event, d) => {
            tooltip.transition().duration(200).style("opacity", .9);
            tooltip.html("Star: x=" + d.x + ", y=" + d.y)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", () => {
            tooltip.transition().duration(500).style("opacity", 0);
        });


    // Bar chart (juxtaposed)
    const barSvg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    barSvg.append("text").attr("x", (width / 2)).attr("y", 0 - (margin.top / 2)).attr("text-anchor", "middle").style("font-size", "16px").style("font-weight", "bold").text("Juxtaposed Bar Chart (Dino vs. Star)");
    barSvg.append("text").attr("x", width/2).attr("y", height + margin.bottom/2).attr("text-anchor", "middle").text("Dataset");
    barSvg.append("text").attr("transform", "rotate(-90)").attr("y", 0 - margin.left).attr("x",0 - (height / 2)).attr("dy", "1em").attr("text-anchor", "middle").text("Y-axis");

    const xBar = d3.scaleBand().domain(["dino", "star"]).range([0, width]).padding(0.2);
    const yBar = d3.scaleLinear().domain([0, d3.max(data, d => +d.y) * 1.1]).range([height, 0]);

    barSvg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(xBar));
    barSvg.append("g").call(d3.axisLeft(yBar));

    barSvg.selectAll(".bar-dino")
    .data(dinoData)
    .enter().append("rect")
    .attr("class", "bar-dino")
    .attr("x", d => xBar("dino"))
    .attr("width", xBar.bandwidth() / 2)
    .attr("y", d => yBar(+d.y))
    .attr("height", d => height - yBar(+d.y))
    .style("fill", "steelblue")
    .on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", .9);
        tooltip.html("Dino: x=" + d.x + ", y=" + d.y)
            .style("left", (event.pageX) + "px")
            .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", () => {
        tooltip.transition().duration(500).style("opacity", 0);
    });

    barSvg.selectAll(".bar-star")
    .data(starData)
    .enter().append("rect")
    .attr("class", "bar-star")
    .attr("x", d => xBar("star") + xBar.bandwidth() / 2)
    .attr("width", xBar.bandwidth() / 2)
    .attr("y", d => yBar(+d.y))
    .attr("height", d => height - yBar(+d.y))
    .style("fill", "orange")
    .on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", .9);
        tooltip.html("Star: x=" + d.x + ", y=" + d.y)
            .style("left", (event.pageX) + "px")
            .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", () => {
        tooltip.transition().duration(500).style("opacity", 0);
    });


    // Line chart (juxtaposed - two separate SVGs)
    const lineChartContainer = d3.select("body").append("div").attr("class", "line-chart-container");

    // Dino Line Chart
    const dinoLineSvg = lineChartContainer.append("svg")
    .attr("class", "line-chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    dinoLineSvg.append("text").attr("x", (width / 2)).attr("y", 0 - (margin.top / 2)).attr("text-anchor", "middle").style("font-size", "16px").style("font-weight", "bold").text("Dino");
    dinoLineSvg.append("text").attr("x", width/2).attr("y", height + margin.bottom/2).attr("text-anchor", "middle").text("X-axis");
    dinoLineSvg.append("text").attr("transform", "rotate(-90)").attr("y", 0 - margin.left).attr("x",0 - (height / 2)).attr("dy", "1em").attr("text-anchor", "middle").text("Y-axis");

    const xLineDino = d3.scaleLinear().domain(d3.extent(dinoData, d => +d.x)).range([0, width]);
    const yLineDino = d3.scaleLinear().domain([0, d3.max(dinoData, d => +d.y) * 1.1]).range([height, 0]);

    dinoLineSvg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(xLineDino));
    dinoLineSvg.append("g").call(d3.axisLeft(yLineDino));

    const lineDino = d3.line().x(d => xLineDino(+d.x)).y(d => yLineDino(+d.y));
    dinoLineSvg.append("path").datum(dinoData).attr("fill", "none").attr("stroke", "steelblue").attr("d", lineDino);


    // Star Line Chart
    const starLineSvg = lineChartContainer.append("svg")
    .attr("class", "line-chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    starLineSvg.append("text").attr("x", (width / 2)).attr("y", 0 - (margin.top / 2)).attr("text-anchor", "middle").style("font-size", "16px").style("font-weight", "bold").text("Star");
    starLineSvg.append("text").attr("x", width/2).attr("y", height + margin.bottom/2).attr("text-anchor", "middle").text("X-axis");
    starLineSvg.append("text").attr("transform", "rotate(-90)").attr("y", 0 - margin.left).attr("x",0 - (height / 2)).attr("dy", "1em").attr("text-anchor", "middle").text("Y-axis");

    const xLineStar = d3.scaleLinear().domain(d3.extent(starData, d => +d.x)).range([0, width]);
    const yLineStar = d3.scaleLinear().domain([0, d3.max(starData, d => +d.y) * 1.1]).range([height, 0]);

    starLineSvg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(xLineStar));
    starLineSvg.append("g").call(d3.axisLeft(yLineStar));

    const lineStar = d3.line().x(d => xLineStar(+d.x)).y(d => yLineStar(+d.y));
    starLineSvg.append("path").datum(starData).attr("fill", "none").attr("stroke", "orange").attr("d", lineStar);

    });