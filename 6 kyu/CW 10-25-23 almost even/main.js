// We need the ability to divide an unknown integer into a given number of even parts - or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

// Complete the function so that it returns an array of integers representing the parts. If the input number is too small to split it into requested amount of parts, the additional parts should have value 0. Ignoring the order of the parts, there is only one valid solution for each input to your function!

// Example:
// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
// Inputs
// The input to your function will always be valid for this kata.

// **Solution**

var splitInteger = function(num, parts) {
    // Make an empty array variable "splitNums"
    // Make a for loop starting at "parts" and decrements
    // For each loop, divide the current number by i and get the floor
    // Push that result to "splitNums"
    // subtract that number from the current number
    // If the current number is 0 and i is > 0, push 0 to "splitNums"
  
    const splitNums = [];
    let currentNum = num;
  
    for (let i = parts; i > 0; i--) {
      if (currentNum === 0) {
        splitNums.push(0);
      } else {
        const currentPart = Math.floor(currentNum / i);
        splitNums.push(currentPart);
        currentNum = currentNum - currentPart;
      }
    }
  
    return splitNums;
}