// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

function sumCubes(n){
    // Make an empty variable 'sum'
    // Make a loop through n
    // For each number, cube the number
    // Add the cubed number to 'sum'
    // Return sum
    
    let sum = 0;
    
    for (let i = 0; i <= n; i++) {
      sum += i**3;
    }
    
    return sum;
}