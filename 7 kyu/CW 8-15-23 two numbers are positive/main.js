// Task:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false

// **Solution**

function twoArePositive(a, b, c) {
    // Filter arguments for elements > 0
    // Check if the length === 2
    
    const positiveNums = [...arguments].filter(num => num > 0).length;

    return positiveNums === 2;
}