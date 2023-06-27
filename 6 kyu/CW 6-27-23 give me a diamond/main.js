// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

// **Solution**

function diamond(n){
    // If n is even or <= 0, return null
    // Make an empty "diamond" variable
    // Make "spaces" variable starting with the floor of n/2
    // If n is odd, start a loop with i = 5 and i+= 2
    // At each repetition, add a space repeated by "spaces and * repeated by i
    // Make another i descending loop to do the opposite
  
    if (n % 2 === 0 || n <= 0) {
      return null;
    }
  
    let diamond = '';
    let spaces = Math.floor(n / 2);
  
    for (let i = 1; i <= n; i += 2) {
      diamond += ' '.repeat(spaces);
      spaces -= 1;
      diamond += '*'.repeat(i) + '\n'
    }
  
    spaces += 1;
    
    for (let i = n - 2; i >= 1; i -= 2) {
      spaces += 1;
      diamond += ' '.repeat(spaces);
      diamond += '*'.repeat(i) + '\n';
    }
  
    return diamond;
}