// Create a variable called "fullName" that holds a string
var fullName = "Homer Simpson";

// Create a variable called "country" that holds a string
var country = "United States";

// Create a variable called "age" that holds an integer
var age = 26;

// Create a variable called "hourlyWage" that holds an integer
var hourlyWage = 15;

// Calculate the "dailyWage" for the user
var dailyWage = hourlyWage * 8;

// Create a variable that holds a number as a string
weeklyHours = "40";

// Create a variable called 'weeklyWage' that converts a string into an integer
weeklyWage = hourlyWage * parseInt(weeklyHours);

// Create a variable called "satisfied" that holds a boolean
satisfied = false;

// Print out "Hello <name>!"
console.log(`Hello ${fullName}.`);

// Print out what country the user entered
console.log(`The country given was ${country}.`);

// Print out the user's age
console.log(`The user's age is ${age}.`);

// Print out the daily wage that was calculated
console.log(`The calculated daily wage is ${dailyWage}`);

// Print out the weekly wage that was calculated
console.log(`The calculated weekly wage is $${weeklyWage}.`);

// Using an IF statement to print out whether the users were satisfied
if (satisfied) {
    console.log(`Everyone was satisfied.`);
} else {
    console.log(`Not everyone was satisfied.`);
}