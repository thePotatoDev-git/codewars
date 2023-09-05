// Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

// Examples:

// 1212 returns:

// "12
// 12"
// Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

// 123123123 returns:

// "123
// 123
// 123"
// Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.

// **Solution**

function squareIt(int) {
	// Turn into into a String type
  // Get the square root of the length and check if it is a whole number
  // If it isn't a whole number, return 'Not a perfect square!'
  // If it is a whole number, make a loop
  // Start i at sqrt, and add i + sqrt at the end
  // Add \n to int.slice(i, i+sqrt)
  
  const strInt = int.toString();
  const sqrt = Math.sqrt(strInt.length);

  if (Number.isInteger(sqrt) === false) {
    return 'Not a perfect square!';
  }

  let result = strInt.slice(0, sqrt);

  for (let i = sqrt; i < strInt.length; i+= sqrt) {
    result += '\n' + strInt.slice(i, i+sqrt);
  }

  return result;
}