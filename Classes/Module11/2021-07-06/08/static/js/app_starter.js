var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

function arrayAverage(someArray) {
    var total = 0;
    for (var x = 0; x < someArray.length; x++) {
      total = total + someArray[x];
      // console.log(someArray[x]);
    }
    return total / someArray.length;
}

function arrayVariance(someArray) {
    dataSetMean = arrayAverage(someArray);

    // get the sum of squares
    sumOfSquares = 0;
    for (var i = 0; i < someArray.length; i++) {
        // sumOfSquares = sumOfSquares + (Math.pow((someArray[i] - dataSetMean), 2));
        eachDiff = someArray[i] - dataSetMean;

        sumOfSquares = sumOfSquares + (Math.pow(eachDiff, 2));
    }
    return sumOfSquares / (someArray.length - 1);
}

function arrayStdDev(someArray) {
    return Math.sqrt(arrayVariance(someArray));
}

console.log(`The average movie score is ${arrayAverage(movieScore)}.`);
console.log(`With a variance of ${arrayVariance(movieScore)}.`);
console.log(`And a standard deviation of ${arrayStdDev(movieScore)}.`);