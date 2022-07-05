// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

// **Solution**

function alternate(n, firstValue, secondValue){
    const arr = [];
    
    for (let i = 1; i <= n; i++) {
      if (arr[arr.length - 1] === firstValue) {
        arr.push(secondValue);
      } else {
        arr.push(firstValue);
      }
    }
    return arr;
}