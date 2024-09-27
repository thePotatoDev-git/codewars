// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

// **Solution**

function capitalize(s,arr){
    // Split `s` into an array called `sArr`
    // Loop though arr
    // If exists, reassign sArr[arr[i]] to the capitalized letter
    // Return the joined `sArr` result
    
    const sArr = s.split('');
    
    for (let i = 0; i < arr.length; i++) {
      if (sArr[arr[i]]) {
        sArr[arr[i]] = sArr[arr[i]].toUpperCase();
      }
    }
    
    return sArr.join('');
};