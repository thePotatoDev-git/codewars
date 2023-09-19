// Write a function that given an array of numbers >= 0, will arrange them such that they form the biggest number.

// For example:

// [1, 2, 3] --> "321" (3-2-1)
// [3, 30, 34, 5, 9] --> "9534330" (9-5-34-3-30)
// The results will be large so make sure to return a string.

// **Solution**

function biggest(nums) {
    // Turn all nums into a string type
    // Sort the strings
    // Make a variable for a + b and a variable for b + a
    // If a + b > b + a, return -1. If a + b < b + a, return -1. If equal, return 0.
    // Return the final array joined
    
    if (nums.every(num => num === 0)) {
      return '0';
    }
    
    const numsStr = nums.map(num => String(num));
  
    const numsSorted = numsStr.sort((a, b) => {
      const order1 = a + b;
      const order2 = b + a;
  
      if (order1 > order2) {
        return -1;
      } else if (order1 < order2) {
        return 1;
      } else {
        return 0;
      }
    });
  
    return numsSorted.join('');
};