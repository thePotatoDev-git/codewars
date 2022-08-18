// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// **Solution**

function getLengthOfMissingArray(arrayOfArrays) {
    // Find the length of each array in arrayOfArrays
    // Sort the lengths in ascending order
    // Make a count variable with the value of the smallest length
    // Compare each length with the variable count
    // If they are equal, add 1 to count variable
    // If they are not equal, return count
    
    if (arrayOfArrays === null) {
      return 0;
    } else if (arrayOfArrays.includes(null)) {
      return 0;
    } else if (arrayOfArrays.length === 0) {
      return 0;
    } else if (arrayOfArrays.includes([])) {
      return 0;
    }
  
    const lengthsAndSorted = arrayOfArrays.map(arr => arr.length)
                              .sort((a, b) => a - b);
    let count = lengthsAndSorted[0];
    if (lengthsAndSorted.includes(0)) {
      return 0;
    }
    
    for (let i = 0; i <= lengthsAndSorted.length; i++) {
      while (lengthsAndSorted[i] === count) {
        count++;
      }
    }
      return count;
}