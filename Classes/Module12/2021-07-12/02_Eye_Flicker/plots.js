var eyeColor = ["Brown", "Brown", "Brown", "Brown", "Brown",
  "Brown", "Brown", "Brown", "Green", "Green",
  "Green", "Green", "Green", "Blue", "Blue",
  "Blue", "Blue", "Blue", "Blue"];
var eyeFlicker = [26.8, 27.9, 23.7, 25, 26.3, 24.8,
  25.7, 24.5, 26.4, 24.2, 28, 26.9,
  29.1, 25.7, 27.2, 29.9, 28.5, 29.4, 28.3];

// @TODO: Complete the Following Steps

// Create the Trace
var trace = {
  x: eyeColor,
  y: eyeFlicker,
  type: "bar"
};
// Create the data array for our plot
// from class:
// use the list here to pass in multiple traces/datasets as a list/array
data = [trace];

// Define our plot layout
var layout = {
  title: "Eye Color vs. Eye Flicker",
  xaxis: {title: "Eye Color"},
  yaxis: {title: "Eye Flicker"}
};

Plotly.newPlot("bar-plot", data, layout)