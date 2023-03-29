// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// **Solution**

var countBits = function(n) {
    // Make an empty variable 'bits'
    // Make an 'result' variable = n
    // Make a loop that divides 'result' by 2, but rounded down
    // If the remainder is 1, add 1 to bits
    // Return bits
  
    let bits = 0;
    let result = n;
  
    while (result !== 0) {
      if (result % 2 === 1) {
        bits++;
      }
      result = Math.floor(result / 2);
    }
  
    return bits;
  };