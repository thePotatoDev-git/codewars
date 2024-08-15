// https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// **Solution**

function add(num1, num2) {
    // Convert the nums into strings
    // Loop through the numbers starting from the last digit
    // Find the sum of the digits in each loop and add them into a string
    // Return the final string in number type
    console.log(`num1: ${num1}, num2: ${num2}`)
    
    const num1String = num1.toString();
    const num2String = num2.toString();
    const shortestNum = num1String.length <= num2String.length ? num1String.length : num2String.length;
     let sum = '';
    
    for (let i = 0; i < shortestNum; i++) {
      sum = (Number(num1String[num1String.length - 1 - i]) + Number(num2String[num2String.length - 1 - i])) + sum;
    }
    
   // Add the remaining digits of the longer number
    if (num1String.length > num2String.length) {
      sum = num1String.slice(0, (num1String.length - shortestNum)) + sum;
    } else if (num2String.length > num1String.length) {
      sum = num2String.slice(0, (num2String.length - shortestNum)) + sum;
    }
    
    
    
    return Number(sum);
}