// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

// **Solution**

function isItLetter(character) {
    // Make a variable with all letters
    // Check if `character` is in the variable
    // If yes, return true
    // Else return no
    
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    return letters.includes(character);
}