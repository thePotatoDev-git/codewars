// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

// **Solution**

function sumNoDuplicates(numList) {
    // Hashmap numList
    // Filter out any numbers that occur more than once
    // Get the sum of the remaining numbers
    
    if (numList.length === 0) {
      return 0;
    }
    
    const numCounts = {};
  
    for (const num of numList) {
      numCounts[num] = numCounts[num] ? numCounts[num] + 1 : 1;
    }
  
    const noDupeNumList = numList.filter(num => numCounts[num] === 1);
  
    return noDupeNumList.length === 0 ? 0 : noDupeNumList.reduce((num, total) => total += num);
}