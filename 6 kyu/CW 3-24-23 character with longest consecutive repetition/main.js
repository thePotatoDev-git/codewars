// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// Happy coding! :)

// **Solution**

function longestRepetition(s) {
    // If s is empty, return ['', 0]
    // Make a variable count = 1
    // Make an empty variable 'longestConsecutive' = []
    // Make a for loop. If the current char === the next char, add 1 to count
    // If the current char !== the next char, change longestConsecutive to [s[i], count]
    // Return count

    if (s === '') {
      return ['', 0];
    }
  
    let count = 1;
    let longestConsecutive = ['', 0];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i+1]) {
        count++;
      } else if (s[i] !== s[i+1] && count > longestConsecutive[1]) {
        longestConsecutive = [s[i], count];
        count = 1;
      } else if (s[i] !== s[i+1]) {
        count = 1;
      }
    }
  
    return longestConsecutive;
  }