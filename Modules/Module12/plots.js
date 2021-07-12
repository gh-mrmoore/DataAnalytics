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

var drink_data = [{
    labels: ['nonalcoholic beer', 'nonalcoholic wine', 'nonalcoholic martinin', 'nonalcoholic margarita', 'ice tea', 'nonalcoholic rum & coke', 'nonalcoholic mai tai', 'nonalcoholic gin & tonic'],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
}];

var layout = {
    title: "Bar Pie",
};

Plotly.newPlot("plotArea", drink_data, layout);