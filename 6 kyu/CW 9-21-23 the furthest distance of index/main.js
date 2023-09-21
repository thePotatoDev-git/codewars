// Description:
// Give you an array arr that contains some numbers(arr.length>=2), and give you a positive integer k. Find such two numbers m,n: m and n at least a difference of k, and their index is the most distant.

// Returns their distance of index. If no such number found, return -1.

// Some Examples
// furthestDistance([8,7,1,9],5) === 2

// The difference of 8 and 1, 1 and 9 is more than 5;
// The index distance of (8,1) is 2;
// The index distance of (1,9) is 1;
// So 2 is the furthest distance of index.

// furthestDistance([8,7,1,9],100) === -1
// furthestDistance([1,2,3,4],1) === 3 (1 and 4)
// furthestDistance([3,4,1,2],2) === 2 (3 and 1 or 4 and 2)

// **Solution**

function furthestDistance(arr,k){
    // Make a variable 'furthestIndex' starting at -1
    // Make a nested loop with i starting at 0, and j starting at i+1
    // If the difference between arr[i] and arr[j] is >= k, and the difference between i and j is > furthestIndex, put that value into furthestIndex
    // If the difference between i and j is > furthestIndex, put that value into furthestIndex
    // If no two numbers are >= to k, return -1
    
    let furthestIndex = -1;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
        if ((Math.abs(arr[i] - arr[j]) >= k) && (Math.abs(i - j) > furthestIndex)) {
          furthestIndex = Math.abs(i - j);
        }
      }
    }
  
    return furthestIndex;
}