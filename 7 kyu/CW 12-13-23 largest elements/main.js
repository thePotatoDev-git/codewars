// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// **Solution**

function largest(n, array) {
    // Sort the array from highest to lowest value
    // Grab the first n numbers from the array
    // Reverse that array to make it in ascending order
    
    const largestToLowest = array.sort((a, b) => b - a);
    
    return largestToLowest.slice(0, n).reverse();
}