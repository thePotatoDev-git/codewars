// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// **Solution**

function largestPairSum (numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    return sorted[sorted.length - 1] + sorted[sorted.length - 2];
}