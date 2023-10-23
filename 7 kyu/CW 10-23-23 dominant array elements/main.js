// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All numbers will be greater than 0.
// More examples in the test cases.

// Good luck!

// **Solution**

function solve(arr) {
    // Make a nested loop
    // The second loop should start at i+1
    // If arr[i] is larger than all of arr[j], push  that to a new array
    // Add the last number of arr to the array
    // Return the array
    
    const result = [];
    let allLesser = true;
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
        if (arr[j] >= arr[i]) {
          allLesser = false;
          break;
        }
      }
      if (allLesser === true) {
        result.push(arr[i]);
      } else {
        allLesser = true;
      }
    }
    
    return result;
}