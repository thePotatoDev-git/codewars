//1. You are to write an function that takes a string as it's first paramter. This string will be a string of words.

//2. You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

//3. Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string",3,5) 
// Should return

// "string-string-string-string-string"

// Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

// Simple. Good luck.

// **Solution**

function modifyMultiply (str,loc,num) {
    // Split the string into individual words
    // Find the string in the loc position
    // Make an empty array to hold the strings
    // Push that string into the empty array num amount of times
    // Join the array with -
    
    str = str.split(' ');
    const stringAmount = [];
    
    for (let i = 0; i < num; i++) {
      stringAmount.push(str[loc])
    }
    return stringAmount.join('-');
} 