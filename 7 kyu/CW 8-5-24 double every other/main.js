// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]

function doubleEveryOther(a) {
    // Loop through `a` using .map
    // For every odd index, double the value
    // Return the array
    
    return a.map((el, i) => i % 2 !== 0 ? el * 2 : el);
}