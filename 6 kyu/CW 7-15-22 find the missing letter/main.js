// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// **Solution**

function findMissingLetter(array) {
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    // Make copy of array
    const arrayCopy = [...array].map(letter => letter.toLowerCase());
    // Find indexOf to match with abc variable
    const index = abc.indexOf(arrayCopy[0]);
    // Get abc array to compare with original array
    const abcArray = abc.splice(index, array.length + 1);
    // Filter array to get missing letter
    const missingLetter = abcArray.filter(letter => !arrayCopy.includes(letter));
  
    return array[0] === arrayCopy[0] ? missingLetter[0] : missingLetter[0].toUpperCase();
}