// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether

// Eg:
// Code wars -> C, w -> C W -> CW

// **Solution**

function toAcronym(inp){
    // Split the string with (' ')
    // Map the array just taking the first letter of each word
    // Combine the letters and uppercase them
    
    inp = inp.split(' ');
    const firstLetters = inp.map(word => word[0].toUpperCase());
    
    return firstLetters.join('');
}