// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// **Solution**

function expandedForm(num) {
  // Make an empty array variable
  // Turn num into a string
  // Loop through num
  // If num[i] is > 0, add num[i] + 0.repeat(num.length - i - 1) to "arr"
  // Make string variable "expanded" with the first element in "arr"
  // Loop through "arr" and add each element to "expanded"

  const arr = [];
  const numStr = num.toString();

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] > 0) {
      arr.push(numStr[i] + '0'.repeat(numStr.length - i - 1));
    }
  }

  return arr.join(' + ');
}