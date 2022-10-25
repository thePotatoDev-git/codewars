// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!

// **Solution**

function solve(arr) {
    // Remove duplicate numbers in each sub array
    // Count the length of each sub array
    // Multiply the lengths of each sub array

    const removeDupes = arr.map(subArr => [...new Set(subArr)].length);

    return removeDupes.reduce((total, num) => total *= num);
};