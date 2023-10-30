// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.

// **Solution**

function mostFrequentItemCount(collection) {
    // Make an empty number variable "highestCount"
    // Make a map of collection
    // Iterate through the map. If it's higher than "highestCount", replace it
    
    let highestCount = 0;
    const counts = {};
    
    for (const num of collection) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    
    for (const num in counts) {
      if (counts[num] > highestCount) {
        highestCount = counts[num];
      }
    }
    
    return highestCount;
}