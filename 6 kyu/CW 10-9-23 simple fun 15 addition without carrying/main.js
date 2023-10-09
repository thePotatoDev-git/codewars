// Task
// A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

// Given two integers, find the result which the little boy will get.

// Example
// For param1 = 456 and param2 = 1734, the output should be 1180

//     456
//    1734
// + ____
//    1180
// The little boy goes from right to left:

// 6 + 4 = 10 but the little boy forgets about 1 and just writes down 0 in the last column

// 5 + 3 = 8

// 4 + 7 = 11 but the little boy forgets about the leading 1 and just writes down 1 under 4 and 7.

// There is no digit in the first number corresponding to the leading digit of the second one, so the little boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1.

// Input/Output
// [input] integer a

// A non-negative integer.

// Constraints: 0 ≤ a ≤ 99999.

// [input] integer b

// A non-negative integer.

// Constraints: 0 ≤ b ≤ 59999.

// [output] an integer

// The result that the little boy will get.

// **Solution**

function additionWithoutCarrying(a,b) {
    // Make an empty string variable "total"
    // Convert a and b to strings
    // Loop through a starting at the last digit
    // Turn a[i] and b[i] into numbers and add them. If the sum is > 9, turn the number into a string and add that number "total"
    // If there are still numbers left from a or b, add the remaning numbers to "total"
  
    if (a === 0 || b === 0) {
      return Math.max(a, b);
    }
  
    let total = '';
    const aStr = a.toString();
    const bStr = b.toString();
    let shortestNum = 0;
  
    if (aStr.length > bStr.length) {
      shortestNum = bStr.length;
    } else {
      shortestNum = aStr.length;
    }
  
    for (let i = 1; i <= shortestNum; i++) {
      const currentAddition = Number(aStr[aStr.length-i]) + Number(bStr[bStr.length-i]);
  
      if (currentAddition > 9) {
        total = String(currentAddition)[1] + total;
      } else {
        total = String(currentAddition) + total;
      }
    }
  
    if (aStr.length > shortestNum) {
      total = aStr.slice(0, aStr.length-shortestNum) + total;
    } else if (bStr.length > shortestNum) {
      total = bStr.slice(0, bStr.length-shortestNum) + total;
    }
  
    return Number(total);
}