var x = 1;
var y = 10;

// Checks if one value is equal to another
// checking for strict equality in class...
if (x === 1) console.log("x is equal to 1");

// Checks if one value is NOT equal to another
if (x !== y) console.log("y is not equal to x");

// Checks if one value is less than another
if (x < y) console.log("x is less than y");

// Checks if one value is greater than another
if (y > x) console.log("y is greater than x");

// Checks if a value is less than or equal to another
if (x == y) console.log("x equals y");

// Checks for two conditions to be met using &&
if (x == 1 && y == 10) console.log("x is 1 and y is 10");

// Checks if either of two conditions is met using ||
if (x < 45 || y < 5) console.log("x is less than 45 or y is less than 5");

// Nested if statements
if (x == 1) {
    if (y == 10) {
        console.log("x is 1 and y equals 10");
    }
}