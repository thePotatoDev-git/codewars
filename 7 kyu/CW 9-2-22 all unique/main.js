// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// **Solution**

function hasUniqueChars(str){
    // Split the str to make an array
    // Make a variable uniqueChars to make an array of only unique characters
    // Compare str with uniqueChars
  
    str = str.split('');
    
    const uniqueChars = [...new Set(str)];
    
    return JSON.stringify(str) === JSON.stringify(uniqueChars);
}