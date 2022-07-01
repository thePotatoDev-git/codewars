// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// **Solution**

function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    const position = alphabet.indexOf(letter) + 1;
    return `Position of alphabet: ${position}`;
}