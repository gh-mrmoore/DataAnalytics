// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);
console.log(us);

// Create an array of music provider labels
var providerLabels = Object.keys(data.us);
var countryLabels = Object.keys(data);
console.log(providerLabels);
console.log(countryLabels);

// Display the default plot
function init() {
  var trace = {
    values: us,
    labels: providerLabels,
    type: "pie"
  };
  
  var musicData = [trace];

  var layout = {
    title: "Music Provider Use by Country"
    // can define height and width here...
  }
  
  Plotly.newPlot("pie", musicData, layout); 
}

init();

// On change to the DOM, call getData()
d3.selectAll("#choosecountry").on("change", onChange);

// Function called by DOM changes
function onChange() {
  console.log("Worked");
  // Assign the value of the dropdown menu option to a variable
  var menuChoice = d3.select("#choosecountry").property("value");

  console.log(menuChoice);

  // Initialize an empty array for the country's data
  var countryData = {};

  // pick the correct dataset
  if (menuChoice == 'us') {
    console.log('us');
    countryData = us;
  } else if (menuChoice == 'uk') {
    console.log('uk');
    countryData = uk;
  } else {
    console.log('can');
    countryData = canada;
  };

  console.log(countryData);

  updatePlot(countryData);
};

// Update the restyled plot's values
function updatePlot(data) {
  Plotly.restyle("pie", "values", [data]);
}