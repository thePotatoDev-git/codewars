// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// **Solution**

var orderedCount = function (text) {
    // Make an empty array
    // Split text into array of individual characters
    // Count duplicates in an object using for-of
    // Push the character and its amount of instances in an array
    
    const countOfChars = [];
    const counts = {};
    text = text.split('');
    
    for (const num of text) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    
    // Create a new array with unique chars from `text`
    const uniqueSet = [...new Set(text)];
    
    // Loop through unique set and push the letters in order with their counts
    for (let i = 0; i < uniqueSet.length; i++) {
      countOfChars.push([uniqueSet[i], counts[uniqueSet[i]]]);
    }
    
    return countOfChars;
}