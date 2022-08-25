// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// **Solution**

var greet = function(name) {
    // Capitalize the first letter of the name
    // Lower case the rest of the name
    // Return `Hello ${name}!`
    
    const formattedName = name[0].toUpperCase() + name.substring(1).toLowerCase();
    
    return `Hello ${formattedName}!`
};