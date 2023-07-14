// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// **Solution**

function SeriesSum(n) {
    // If n is 0, return 0
    // Make a variable "increment" starting at 4
    // Make a variable "result" with the value 1
    // Make a loop with the condition i < n
    // At each loop, add 1 / increment to "result" and add 3 to "increment"
    // Return "result" as a string
    
    if (n === 0) {
      return n.toFixed(2);
    }
    
    let increment = 4;
    let result = 1;
    
    for (let i = 1; i < n; i++) {
      result += 1 / increment;
      increment += 3;
    }
    
    return result.toFixed(2);
}