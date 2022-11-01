// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// **Solution**

function stringTransformer(str) {
    // Split str into individual chars
    // Iterate through each string and check their cases
    // If it is lowerCase, change to upperCase and vice versa
    // Join the array
    // Split it again by spaces, then reverse, and join by spaces
    
    str = str.split('');
    
    const oppositeCase = str.map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join('');
    
    return oppositeCase.split(' ').reverse().join(' ');
}