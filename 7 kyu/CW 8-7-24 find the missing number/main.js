// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

// **Solution**

function missingNo(nums) {
    // If `nums` doesn't contain 0, return 0
    // Sort nums in order
    // Loop through the sorted nums
    // If nums[i] isn't equal the previous num + 1
    
    if (!nums.includes(0)) {
      return 0;
    }
    
    const sortedNums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      if (sortedNums[i+1] !== sortedNums[i] + 1) {
        return sortedNums[i] + 1;
      }
    }
}