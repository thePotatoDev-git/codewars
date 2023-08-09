// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.
// Example:
// your text: "BORN IN 2015!", shift 1

// 1 + 2 + 3 -> "CPSO JO 7984!"

// 4 "CpSo jO 7984!"

// 5 "!4897 Oj oSpC"

// With longer passphrases it's better to have a small and easy program. Would you write it?

// **Solution**

function playPass(s, n) {
    // Make an alphabet array
    // Loop through s
    // If s[i] is a letter, find the letter in the abc array and shift it n times
    // If s[i] is a number, subtract that number from 9
    // If i is odd, lowercase the letter
    // Reverse the result
    console.log(s, n)
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const result = [];
  
    for (let i = 0; i < s.length; i++) {
      let abcIndex = abc.indexOf(s[i]);
    
      if (abcIndex >= 0 && abcIndex + n >= 26) {
        result.push(abc[(abcIndex + n) - 26]);
      } else if (abcIndex >= 0) {
        result.push(abc[abcIndex + n]);
      } else if (nums.includes(s[i])) {
        result.push('9' - s[i]);
      } else {
        result.push(s[i]);
      }
    }
  
    for (let i = 0; i < result.length; i++) {
      if (i % 2 !== 0 && abc.includes(result[i])) {
        result[i] = result[i].toLowerCase();
      }
    }
  
    return result.reverse().join('');
}