// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

// **Solution**

function remove (string) {
    // Split string by individual characters
    // Filter out '!'
    // Join ('')
    // Add an exclamation character at the end
    
    string = string.split('').filter(char => char !== '!');
    string = string.join('');
    return `${string}!`;
}