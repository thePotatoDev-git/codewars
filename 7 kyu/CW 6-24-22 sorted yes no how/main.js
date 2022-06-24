// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// **Solution**

function isSortedAndHow(array) {
    const ascending = [...array].sort((a, b) => a - b);
    const descending = [...array].sort((a, b) => b - a);
    
    if (JSON.stringify(array) === JSON.stringify(ascending)) {
      return 'yes, ascending';
    } else if (JSON.stringify(array) === JSON.stringify(descending)) {
      return 'yes, descending';
    } else {
      return 'no';
    }
  }