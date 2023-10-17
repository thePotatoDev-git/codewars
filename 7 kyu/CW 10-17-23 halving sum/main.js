// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

// **Solution**

function halvingSum(n) {
  // Make a loop while n is > 1
  // In each loop, divide n by 2. If the result isn't whole, round down
  // Add each result to a "result" variable
  // Find the sum of all the numbers in the array
  
  let result = n;
  
  while (n > 1) {
    n = Math.floor(n/2);
    result += n;
  }
  
  return result;
}
