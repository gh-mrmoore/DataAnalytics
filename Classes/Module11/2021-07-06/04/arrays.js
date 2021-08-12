// A JavaScript array is much like a Python list
// Here, start with a blank array
let myArray = ["Item 0"];

// Use push() to append an item to an array
myArray.push("Item 1");
myArray.push("Item 2");
myArray.push("Item 3");

// Display the array in console
console.log(myArray);

// Use indexing to access an array item
let x = myArray[0];
console.log(x);

// Use slice() to return selected items of an array
let y = myArray.slice(2);
console.log(y);
console.log(myArray);

// Return the first three items of an array
let z = myArray.slice(0,3);
console.log(z);

// Return the second and third items of an array
let a = myArray.slice(1,3);
console.log(a);

// Use join() to return items of an array into a single string
let joinString = myArray.join(", ");
console.log(joinString);

// A JavaScript string
let stringToArray = "Sounds good";
// Here, split the string where spaces are found
let arrayFromString = stringToArray.split(" ");
// Split a string into an array of substrings
console.log(arrayFromString);

// Use indexing to access a string character
console.log(stringToArray[2]);