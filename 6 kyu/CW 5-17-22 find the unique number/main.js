// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// **Solution**

function findUniq(arr) {
    const filtered = arr.filter(num => num != arr[0])
    return filtered.length == 1 ? filtered[0] : arr[0];
  }