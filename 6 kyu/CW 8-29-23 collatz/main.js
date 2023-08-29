// Preface
// A collatz sequence, starting with a positive integern, is found by repeatedly applying the following function to n until n == 1 :

// f(n) = n/2, if n is even
// f(n) = 3n + 1, if n is odd
 

// A more detailed description of the collatz conjecture may be found on Wikipedia.

// The Problem
// Create a function collatz that returns a collatz sequence string starting with the positive integer argument passed into the function, in the following form:

// "X0->X1->...->XN"

// Where Xi is each iteration of the sequence and N is the length of the sequence.

// Sample Input
// Input: 4
// Output: "4->2->1"

// Input: 3
// Output: "3->10->5->16->8->4->2->1"
// Don't worry about invalid input. Arguments passed into the function are guaranteed to be valid integers >= 1.

// **Solution**

function collatz(n){
    // Make a variable "result" with n as the initial value
    // Make a loop that runs while n !== 1
    // If n is even, run n/2
    // If n is odd, run 3n + 1
    // After each loop, add '->n' to "result"
    // Return the end result
  
    let result = n.toString();
  
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n/2;
        result += `->${n}`;
      } else {
        n = (3*n) + 1;
        result += `->${n}`;
      }
    }
  
    return result;
}