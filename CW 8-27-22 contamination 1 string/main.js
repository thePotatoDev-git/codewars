// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// **Solution**

function contamination(text, char){
    // If text or char is empty, return an empty string
    // Find the length of text
    // Repeat char by the length amount of times
    
    return char.repeat(text.length);
}