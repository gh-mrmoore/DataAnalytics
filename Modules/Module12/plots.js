// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Plotly.newPlot("plotArea", [{x: [5,10,15,20], y: [3,6,9,12]}]);

// var trace = [{
//     x: ['burrito', 'pizza', 'chickne'],
//     y: [10, 18, 5],
//     type: "bar"
// }];

// Plotly.newPlot("plotArea", trace);

// var trace = [{
//     x: ['burrito', 'pizza', 'chicken'],
//     y: [10, 18, 5],
//     type: "bar"
// }];

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", trace, layout);

// var drink_data = [{
//     x: ['nonalcoholic beer', 'nonalcoholic wine', 'nonalcoholic martinin', 'nonalcoholic margarita', 'ice tea', 'nonalcoholic rum & coke', 'nonalcoholic mai tai', 'nonalcoholic gin & tonic'],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// }];

// var layout = {
//     title: "Chart of the Bar",
//     xaxis: {title: "Drink Type"},
//     yaxis: {title: "Percentage of Drinks Ordered"}
// };

// Plotly.newPlot("plotArea", drink_data, layout);

// var drink_data = [{
//     labels: ['nonalcoholic beer', 'nonalcoholic wine', 'nonalcoholic martinin', 'nonalcoholic margarita', 'ice tea', 'nonalcoholic rum & coke', 'nonalcoholic mai tai', 'nonalcoholic gin & tonic'],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
// }];

// var layout = {
//     title: "Bar Pie",
// };

// Plotly.newPlot("plotArea", drink_data, layout);

// 12.2.1 - .map() and .filter()
// var numbers = [0,2,4,6,8];

// var addFive = numbers.map(x => {return x + 5});
// console.log(addFive);

// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// var sWords = words.filter(word => {return word[0] == 's'});
// console.log(sWords);

// 12.2.2
// Sort the cities in data.js in descending order of population growth.
var useCityGrowths = cityGrowths;

useCityGrowths.sort(function(a, b) {return parseInt(b["Increase_from_2016"])-parseInt(a["Increase_from_2016"])});
console.log(useCityGrowths);

// Select only the top five cities in terms of growth.
topFiveGrowth = useCityGrowths.slice(0,5);
console.log(topFiveGrowth);

// Create separate arrays for the city names and their population growths.
// can combine this with the next step...
// Use Plotly to create a bar chart with these arrays.
var trace = {
    x: topFiveGrowth.map(city => {return city["City"]}),
    y: topFiveGrowth.map(city => city["Increase_from_2016"]),
    type: "bar"
};

var cityData = [trace]

var layout = {
    title: "City Growth Year-to-Year",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth"}
};

Plotly.newPlot("plotArea", cityData, layout);