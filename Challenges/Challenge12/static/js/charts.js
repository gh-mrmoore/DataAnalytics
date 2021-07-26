function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("static/js/samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("static/js/samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("static/js/samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var sampleArrays = data.samples;
    console.log("Build Charts");
    console.log(sampleArrays);

    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var sampleSelected = d3.select("#selDataset").property("value");
    console.log(sampleSelected);
    var filterArray = sampleArrays.filter(sampleObj => sampleObj.id == sample);
    console.log(filterArray);

    //  5. Create a variable that holds the first sample in the array.
    

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids_sample = filterArray[0].otu_ids;
    var otu_labels = filterArray[0].otu_labels
    var these_sample_values = filterArray[0].sample_values;
    console.log(otu_ids_sample);
    console.log(otu_labels);
    console.log(these_sample_values);


    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    // var yticks = [];
    var reverse_y = otu_ids_sample.slice(0,10).reverse();
    yticks = reverse_y.map(setTicks);

    function setTicks(x) {
      return "OTU " + x;
    }

    // yticks = reverse_y;
    console.log(yticks)

    // 8. Create the trace for the bar chart. 
    var barData = these_sample_values.slice(0,10).reverse();

    // 9. Create the layout for the bar chart. 
    var barLayout = {
     type: 'bar',
     x: barData,
    //  y: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
     y: yticks,
     orientation: 'h'
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot('bar', [barLayout]);

    // Deliverable 2
    // 1. Create the trace for the bubble chart.
    var bubbleData = [

    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot(); 
    
    
  });
}
