console.log(data);

// Trace1 for the Greek Data
pairGods = data.map(gName => {return gName["pair"]});
// greekSearches = data.map(gSearch => {return gSearch["greekSearchResults"]});
var trace1 = {
    x: pairGods,
    y: data.map(gSearch => {return gSearch["greekSearchResults"]}),
    name: "Greek Gods",
    text: data.map(gNames => {return gNames["greekName"]}), // added during class walk-thru
    type: "bar"
}

// Trace 2 for the Roman Data
// romanSearches = data.map(rSearches => {return rSearches["romanSearchResults"]});
var trace2 = {
    x: pairGods,
    y: data.map(rSearches => {return rSearches["romanSearchResults"]}),
    name: "Roman Gods",
    text: data.map(rNames => {return rNames["romanName"]}), // added during class walk-thru
    type: "bar"
}

// Combining both traces
var plotData = [trace1, trace2];

// Apply the group barmode to the layout
var layout = {
    barmode: "group",
    title: "Greek/Roman God Search Results"
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", plotData, layout);