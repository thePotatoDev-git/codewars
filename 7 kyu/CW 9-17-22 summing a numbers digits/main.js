// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// **Solution**

function sumDigits(number) {
    // Convert the number into a string
    // Split into individual digits
    // Filter out non-integers
    // Add the numbers together
    
    const numToString = number.toString();
    const splitNum = numToString.split('').filter(num => num !== '-');
    const toNum = splitNum.map(num => Number(num));
  
    return toNum.reduce((total, num) => total += num);
}