function init() {
    data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
    }];

    Plotly.newPlot("plot", data);
};

d3.selectAll("#selectOption").on("change", updatePlotly);

function updatePlotly() {
    var dropdownMenu = d3.select("#selectOption");
    var dataset = dropdownMenu.property("value");

    var xData = [1, 2, 3, 4, 5];
    var yData = [];

    if (dataset === 'ds1') {
        yData = [1, 2, 4, 8, 16];
    };

    if (dataset === 'ds2') {
        yData = [1, 10, 100, 1000, 10000];
    };

    var trace = {
        x: [xData],
        y: [yData]
    };

    Plotly.restyle("plot", trace);
};

init();