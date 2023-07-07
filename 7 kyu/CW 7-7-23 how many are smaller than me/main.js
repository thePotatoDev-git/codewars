// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// **Solution**

function smaller(nums) {
    // Make an empty array variable "smaller"
    // Make an empty variable "numsSmaller"
    // Make a nested for loop
    // The second loop should start at i+1
    // Check if nums[i] is greater than nums[j]. If it is, add 1 to numsSmaller
    // At the end of the loop, push numsSmaller to "smaller" and reset the counter
    
    const smaller = [];
    let numsSmaller = 0;
    
    for (let i = 0; i < nums.length; i++) {
      
      for (let j = i+1; j < nums.length; j++) {
        if (nums[i] > nums[j]) {
          numsSmaller++;
        }
      }
      smaller.push(numsSmaller);
      numsSmaller = 0;
    }
    return smaller;
}