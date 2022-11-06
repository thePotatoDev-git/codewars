// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

// **Solution**

function squares(x, n) {
    // If n is 0 or negative, return an empty array
    // While the array's length is less than n, push the current number squared
    
    const squaredArr = [x];
    
    if (n <= 0) {
      return [];
    } else {
      while (squaredArr.length < n) {
        squaredArr.push(Math.pow(squaredArr.slice(-1), 2))
      }
    }
    return squaredArr;
}