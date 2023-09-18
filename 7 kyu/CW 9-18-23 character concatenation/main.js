// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

// If the string's length is odd drop the central element.

// For example:

// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result

// **Solution**

function charConcat(string){
    // Make a counter variable starting at 1
    // Make an empty string variable
    // Make a loop with the length of string/2 - 1
    // Each loop, add the first letter, the last letter, and counter
    // Return the result
    
    let counter = 1;
    let result = '';
    let lastChar = string.length - 1;
    const halfLen = Math.floor(string.length / 2);
    
    for (let i = 0; i < halfLen; i++) {
      result += string[i] + string[lastChar] + counter;
      counter++;
      lastChar--;
    }
    
    return result;
}