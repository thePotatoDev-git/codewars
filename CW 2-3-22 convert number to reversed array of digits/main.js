// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// **Solution**

let reverseArray = [];
function digitize(n) {
    let numString = n.toString();
    reverseArray = numString.split('');
    reverseArray.reverse();
    
    numReverseArray = reverseArray.map(Number);
    return numReverseArray;
  }