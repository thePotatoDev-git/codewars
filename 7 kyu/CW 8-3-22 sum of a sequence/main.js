// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// **Solution**

const sequenceSum = (begin, end, step) => {
    // Create a sum variable with the value as 0
    // Use a for loop with begin as initialization, end as the condition, and step as final expression
    // Add i to the sum variable for each loop
    // Return the sum
    let sum = 0;
    
    for (let i = begin; i <= end; i += step) {
      sum += i;
    }
    return sum;
};