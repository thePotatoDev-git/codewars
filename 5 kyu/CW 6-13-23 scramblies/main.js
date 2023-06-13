// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// **Solution**

function scramble(str1, str2) {
    // Map out amount of individual chars in str1 and str2
    // Loop through str2 chars, and if a str2 char has more occurrences than in str1, return false
    // Return true at the end if all str1 chars have more than str2
  
    const charCount1 = {};
    const charCount2 = {};
  
    for (const char of str1.split('')) {
      charCount1[char] = charCount1[char] ? charCount1[char] + 1 : 1;
    }
  
    for (const char of str2.split('')) {
      charCount2[char] = charCount2[char] ? charCount2[char] + 1 : 1;
    }
  
    for (char in charCount2) {
      if (charCount2[char] > charCount1[char] || charCount1[char] === undefined) {
        return false;
      }
    }
  
    return true;
}