// You need count how many valleys you will pass.

// Start is always from zero level.

// Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

// One passed valley is equal one entry and one exit of a valley.

// s='FUFFDDFDUDFUFUF'
// U=UP
// F=FORWARD
// D=DOWN
// To represent string above

// (level 1)  __
// (level 0)_/  \         _(exit we are again on level 0)
// (entry-1)     \_     _/
// (level-2)       \/\_/
// So here we passed one valley

// **Solution**

function countingValleys(s) {
    // Make a variable level with the value of 0
    // Make a variable valley an empty array
    // Make a variable totalValleys with the value of 0
    // Make a loop that has 'F' add 0, 'U' adds 1, and 'D' subtracts 1 from level and push the value to valleys
    // Check if the level is less than 0, and the next loop brings the level to 0, then add 1 to valley
    // Make another loop to check if the previous valley is less than 0 and the current value is 0, then add 1 to totalValleys
    // Return totalValleys
    
    let level = 0;
    let valleys = [];
    let totalValleys = 0;
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === 'F') {
        level += 0;
      } else if (s[i] === 'U') {
        level++;
      } else if (s[i] === 'D') {
        level--;
      }
      valleys.push(level);
    }
    
    for (let i = 1; i < valleys.length; i++) {
      if (valleys[i - 1] < 0 && valleys[i] === 0) {
        totalValleys++;
      }   
    }
    return totalValleys;
}