console.log(data);
// Sort the data by Greek search results
var greekGods = data;

greekGods.sort(function(a, b) {return a["greekSearchResults"]-b["greekSearchResults"]});
console.log(greekGods);
// Slice the first 10 objects for plotting
tenGreekGods = greekGods.slice(0,10);

// Reverse the array to accommodate Plotly's defaults
tenGreekGods.reverse();
console.log(tenGreekGods);

// Trace1 for the Greek Data
var trace1 = {
    x: tenGreekGods.map(gName => {return gName["greekName"]}),
    y: tenGreekGods.map(gSearch => {return gSearch["greekSearchResults"]}),
    type: "bar"
};

// data
var chartData = [trace1];

// Apply the group bar mode to the layout
var layout = {
    title: "Greek God Search Results",
    xaxis: {title: "Greek God"},
    yaxis: {title: "Searches"},
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", chartData, layout);