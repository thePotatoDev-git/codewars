// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

// **Solution**

function isPowerOfTwo(n){
    // Make a variable `result` equaling `n`
    // Make a while loop while `result !== 2`
    // In the loop, divide `result` by 2
    // If the result is not a whole number, return false
    // At the end of the while loop, return true
    
    if (n === 1) {
      return true;
    } else if (n === 0) {
      return false;
    }
    
    let result = n;
    
    while (result !== 2) {
      result = result / 2;
      
      if (result % 1 !== 0) {
        return false
      }
    }
    
    return true;
}