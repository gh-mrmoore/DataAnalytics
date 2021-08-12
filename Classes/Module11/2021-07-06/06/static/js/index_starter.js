// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];


for (var i = 0; i < movieScores.length; i++) {
  if (movieScores[i] > 7) {
    goodMovieScores.push(movieScores[i]);
  } else if (movieScores[i] > 5) {
    okMovieScores.push(movieScores[i]);
  } else {
    badMovieScores.push(movieScores[i]);
  }
}

function arrayAverage(someArray) {
  var total = 0;
  for (var x = 0; x < someArray.length; x++) {
    total = total + someArray[x];
    // console.log(someArray[x]);
  }
  return total / someArray.length;
}

console.log(goodMovieScores);
console.log(okMovieScores);
console.log(badMovieScores);

console.log(`There are ${movieScores.length} movies with an average score of ${Math.floor(arrayAverage(movieScores))}.`);
console.log(`There are ${goodMovieScores.length} good movies with an average score of ${Math.floor(arrayAverage(goodMovieScores))}.`);
console.log(`There are ${okMovieScores.length} good movies with an average score of ${Math.floor(arrayAverage(okMovieScores))}.`);
console.log(`There are ${badMovieScores.length} good movies with an average score of ${Math.floor(arrayAverage(badMovieScores))}.`);
