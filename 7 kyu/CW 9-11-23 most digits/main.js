// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// **Solution**

function findLongest(array){
    // Map array to make each number a string
    // Loop through the array and find find the lengths
    // If array[i] length is > than the current longest, replace the current one
    
    const toStr = array.map(num => String(num));
    
    let currLength = toStr[0].length;
    let currHigh = toStr[0];
    
    for (let i = 1; i < toStr.length; i++) {
      if (toStr[i].length > currLength) {
        currLength = toStr[i].length;
        currHigh = toStr[i];
      }
    }
    
    return Number(currHigh);
}