// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// **Solution**

function capitalize(s){
    // Split the string into separate letters
    // Make a variable mapping the array to capitalize each letter with an even number index and join into a string
    // Make another variable mapping the array to capitalize each letter with an odd number index and join into a string
    // Return an array with both variables
    
    s = s.split('');
    const evenIndex = s.map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter).join('');
    const oddIndex = s.map((letter, i) => i % 2 !== 0 ? letter.toUpperCase() : letter).join('');
    
    return [evenIndex, oddIndex];
};