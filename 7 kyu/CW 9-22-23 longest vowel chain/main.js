// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// **Solution**

function solve(s){
    // Make a variable of vowels
    // Loop through s
    // If s[i] is a vowel, check if the next char is a vowel
    // Add those vowels to a count
    // If the next char isn't a vowel, reset the count and continue the loop
  
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let highestCount = 0;
    let currentCount = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
        currentCount++;
        if (currentCount > highestCount) {
          highestCount = currentCount;
        }
      } else {
        currentCount = 0;
      }
    }
  
    return highestCount;
  }