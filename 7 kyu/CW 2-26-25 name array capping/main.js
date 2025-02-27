// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ['jo', 'nelson', 'jurie'] -->  ['Jo', 'Nelson', 'Jurie']
// ['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']

// **Solution**

function capMe(names) {
    // Iterate through names (using map)
    // Uppercase the first letter then concat the rest of the name in lowercase
    
    return names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());
}