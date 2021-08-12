// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Create a custom filtering function that returns
//  the cities with a population increase greater than 15,000.
function filterPopn (city) {
    return parseInt(city["Increase_from_2016"]) > 15000;
}

// 2. Use filter() to pass the function as its argument
var filteredCities = top15Cities.filter(filterPopn);

// Check to make sure you filtered your cities correctly
// HINT: console.log() is your friend.
console.log(filteredCities);

// 3. Use the map method with the arrow function to return all the filtered cities' names.
var filteredCityNames = filteredCities.map(city => {return city["City"]});

//  Check your filtered cities
console.log(filteredCityNames);

// 4. Use the map method with the arrow function to return all the filtered cities' populations.
var filteredCityPopn = filteredCities.map(city => {return city["population"]});

//  Check the populations of your filtered cities
console.log(filteredCityPopn);

// 5. Create your trace.
var trace = {
    x: filteredCityNames,
    y: filteredCityPopn,
    type: 'bar'
};

// 6. Create the data array for our plot
data = [trace];

// 7. Define our plot layout
var layout = {
    title: "City by Population",
    xaxis: {title: "City Name"},
    yaxis: {title: "City Population (2017)"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);