// If you're not familiar with the fantastic culinary delights of the British Isles you may not know about the bread sandwich.

// The idea is very simple - if you have a slice of bread between two other slices of bread, then it's a bread sandwich. Additionally, if you have a bread sandwich between two other slices of bread, you get a bread sandwich sandwich, and so on.

// In this kata, we will define the following terms like so:

// Sandwich - Two slices of bread which may or may not have a filling
// Bread Sandwich - Two slices of bread which contains one slice of bread in the middle as a filling
// You will need to build two functions:

// Given the number of slices of bread, return the phrase used to refer to the sandwich
//  2 - 'sandwich'
//  5 - 'bread sandwich sandwich'
// The reverse function - given the name of the sandwich, return how many slices of bread there are in the sandwich
// 'bread sandwich' - 3
// 'sandwich sandwich' - 4
// You should return None/null if there is no input / the input is invalid / there is no sandwich
// Maximum 100 slices of bread

// **Solution**

function slicesToName(n) {
    // If n is not a number type or =< 1, return null
    // If n is even, return 'sandwich' n/2 times
    // If n is odd, return 'bread' and 'sandwich' n-1 / 2 times
    
    if (typeof n !== 'number' || n <= 1) {
      return null;
    }
    
    if (n % 2 === 0) {
      return 'sandwich '.repeat(n/2).trim();
    } else {
      return 'bread ' + 'sandwich '.repeat((n-1) / 2).trim();
    }
  }
  
  function nameToSlices(name) {
    // If name is not a string or name doesn't contain 'sandwich' or if bread isn't the 0 index or -1, return null
    // Split name by spaces
    // Loop through the array
    // If arr[i] is 'bread', add 1 to result. If 'sandwich', add 2
    console.log(name)
    
    if (typeof name !== 'string' || !name.includes('sandwich')) {
      return null;
    }
    
    const splitName = name.split(' ');
    let result = 0;
    
    if (splitName.lastIndexOf('bread') > 0) {
      return null;
    }
  
    if (splitName.indexOf('bread') === 0 || splitName.indexOf('bread') === -1) {
      for (let i = 0; i < splitName.length; i++) {
        if (splitName[i] === 'bread') {
          result++;
        } else if (splitName[i] === 'sandwich') {
          result += 2;
        }
      }
    }
    
    return result;
}  