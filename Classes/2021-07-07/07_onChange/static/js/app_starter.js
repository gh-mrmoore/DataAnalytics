// // grab references to the input element and the output div
let inputField = d3.select("#text");
let output = d3.select(".output");

// // Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  let textInput = d3.event.target.value;  // so passing in the event, you get the target value...?

  // clear the existing output
  output.text("");


  // reverse the input string
  // Set the output text to the reversed input string
  // output.text(reversedString);
  output.text(reverseString(textInput));
}

// // Attach an event to detect changes to the input field.
inputField.on("change", handleChange);