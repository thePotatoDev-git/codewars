// Task
// You are given N ropes, where the length of each rope is a positive integer. At each step, you have to reduce all the ropes by the length of the smallest rope.

// The step will be repeated until no ropes are left. Given the length of N ropes, print the number of ropes that are left before each step.

// Example
// For a = [3, 3, 2, 9, 7], the result should be [5, 4, 2, 1]

// You have 5 ropes:       

//                  3 3 2 9 7   ( 5 left)
                  
// step 1:          1 1 0 7 5   ( 4 left)

// step 2:          0 0 0 6 4   ( 2 left)

// step 3:          0 0 0 0 2   ( 1 left)

// step 4:          0 0 0 0 0    

// Hence the result is [5, 4, 2, 1]
// Input/Output
// [input] integer array a
// length of each rope.

// 3 <= a.length <= 2000

// 1 <= a[i] <= 100

// [output] an integer array
// number of ropes before each step.

// **Solution**

function cutTheRopes(a) {
    // Make an empty variable array "result"
    // Make a loop that loops while there are still nums > 0
    // In each loop, push the array length to "result",
    // Map each num to subtract the lowest num from each num,
    // Filter out 0s from the array
    // Keep doing this until there are no ropes/nums left
  
    const result = [];
    let zerosFilteredOut = a;
  
    while (zerosFilteredOut.length > 0) {
      result.push(zerosFilteredOut.length);
      const min = Math.min(...zerosFilteredOut);
      zerosFilteredOut = zerosFilteredOut.map(num => num - min).filter(num => num > 0);
    }
  
    return result;
}