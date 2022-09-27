// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""

// **Solution**

function dotCalculator (equation) {
	// Split the equation into separate strings
  // Get the length of the first string and third string
  // Use if/else to find the operator
  // Get the final number and repeat '.' by that number
  
  const splitEq = equation.split(' ');
  let finalNum = 0;
  
  if (splitEq[1] === '+') {
    finalNum = splitEq[0].length + splitEq[2].length;
  } else if (splitEq[1] === '-') {
    finalNum = splitEq[0].length - splitEq[2].length;
  } else if (splitEq[1] === '*') {
    finalNum = splitEq[0].length * splitEq[2].length;
  } else {
    finalNum = Math.floor(splitEq[0].length / splitEq[2].length);
  }
  
  return '.'.repeat(finalNum);
}