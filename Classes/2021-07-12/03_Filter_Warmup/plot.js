// Filter the data for movies with an IMDb rating greater than 8.9
//  and then graph each title on the x-axis and the respective metascore on the y-axis.

// 1. Use the filter method to create a custom filtering function
//  that returns the movies with a rating greater than 8.9
function checkRating(rating) {
    return rating["imdbRating"] > 8.9;
}

// 2. Use filter() to pass the function as its argument
var filteredMovies = topMovies.filter(checkRating);

//  Check to make sure your are filtering your movies.
console.log(filteredMovies);

// 3. Use the map method with the arrow function to return all the filtered movie titles.
filteredMovieTitles = filteredMovies.map(getName => {return getName["title"]});

//  Check your filtered movie titles.
console.log(filteredMovieTitles);

// 4. Use the map method with the arrow function to return all the filtered movie metascores.
filteredMetaScores = filteredMovies.map(getMeta => {return getMeta["metascore"]});

//  Check your filtered movie metascores.
console.log(filteredMetaScores);

// 5. Create your trace.
trace = {
    x: filteredMovieTitles,
    y: filteredMetaScores,
    type: 'bar'
};

// 6. Create the data array for our plot
data = [trace];

// 7. Define our plot layout
layout = {
    title: "Movie MetaScores",
    xaxis: {title: "Movie Title"},
    yaxis: {title: "Movie MetaScore"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);