string = "I yam what I yam and always will be what I yam"
// Initialize the function
function countWords(someString) {
  // Convert string to an array of words
  wordArray = someString.split(" ");

  // An object to hold word frequency
  wordsObject = {};

  wordArray.forEach(countFunction);

  // iterate using the forEach() method
  function countFunction(value) {
    if (wordsObject[value] !== undefined) {
      wordsObject[value] += 1;
    } else {
      wordsObject[value] = 1;
    }
  }

  return wordsObject;

  // Iterate through the array and count the occurrence of each word
  // for (let word in wordArray) {
  //   thisWord = wordArray[word];
  //   if (wordsObject[thisWord] !== undefined) {
  //     wordsObject[thisWord] += 1;
  //   } else {
  //     wordsObject[thisWord] = 1;
  //   }
  // }
  // return wordsObject;
}


//  Call the function with the string as a parameter.
console.log(countWords(string));