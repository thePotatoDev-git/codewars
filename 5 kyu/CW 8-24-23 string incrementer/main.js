// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// **Solution**

function incrementString (strng) {
    // Make an array of all digits 0-9
    // If the last char of strng isn't a digit, return strng + '1'
    // If the last char is < 9, increment that digit
    // If the last char is 9, change the char to 0 and continue to loop backwards
    // If loop is still going and current char is NaN, add '1' to that char
  
    const nums = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']
    
    if (!nums.includes(strng[strng.length - 1])) {
      return strng + '1';
    }
    
    strng = strng.split('');
  
    if (strng[strng.length - 1] < 9) {
      strng[strng.length - 1] = Number(strng[strng.length - 1]) + 1;
      return strng.join('');
    }
  
    for (let i = strng.length - 1; i >= 0; i--) {
      if (strng[i] === '9') {
        strng[i] = '0';
      } else if (nums.includes(strng[i])) {
        strng[i] = Number(strng[i]) + 1;
        break;
      } else {
        strng[i] = strng[i] + '1';
        break;
      }
    }
  
    return strng.join('');
}

console.log(incrementString('foo')); // 'foo1'
console.log(incrementString('foo2')); // 'foo3'
console.log(incrementString('foo199')); // 'foo200'
console.log(incrementString('foo0099')); // 'foo0100'