// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// **Solution**

function solution (roman) {
    // Make an object with roman numerals and their values
    // Make an empty variable 'result'
    // Loop through roman
    // If roman[i+1] is undefined, add roman[i]
    // If roman[i] is >= roman[i+1], add roman[i] to result
    // If roman[i] is < roman[i+1], subtract roman[i] from result
  
    const rNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    }
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      if (roman[i+1] === undefined || rNumerals[roman[i]] >= rNumerals[roman[i+1]]) {
        result += rNumerals[roman[i]];
      } else {
        result -= rNumerals[roman[i]];
      }
    }
  
    return result;
}