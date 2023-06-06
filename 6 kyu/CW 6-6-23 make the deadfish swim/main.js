// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// **Solution**

function parse(data) {
    // Make an empty variable "num"
    // Make an empty variable array "arr"
    // Loop through "data"
    // For each character, do the corresponding command in i, d, s, o
    
    let num = 0;
    const arr = [];
    
    for (let i = 0; i < data.length; i++) {
      if (data[i] === 'i') {
        num++;
      } else if (data[i] === 'd') {
        num--;
      } else if (data[i] === 's') {
        num = num**2;
      } else if (data[i] === 'o') {
        arr.push(num);
      }
    }
    
    return arr;
}