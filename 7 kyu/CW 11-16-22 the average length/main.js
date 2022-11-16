// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

// **Solution**

function averageLength(arr) { 
    // Find the lengths of all elements in the array
    // Find the average of all the elements, rounded
    // Map a new array to repeat the first character by the average number
    
    const lengthsSum = arr.map(el => el.length).reduce((total, num) => total+= num, 0)
    const average = Math.round(lengthsSum / arr.length)
    
    return arr.map(el => el[0].repeat(average));
}