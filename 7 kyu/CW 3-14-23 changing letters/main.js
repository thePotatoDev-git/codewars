// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// **Solution**

function swap (string) {
    // Make an array of all vowels
    // Make an empty variable capitalVowels
    // Loop through each character in the string
    // If the character is a vowel, capitalize it and add it to capitalVowels
    // Else add the original string to capitalVowels
    // Return the final transformed string
    
    const vowels = 'aeiou';
    let capitalVowels = '';
  
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        capitalVowels += string[i].toUpperCase();
      } else {
        capitalVowels += string[i];
      }
    }
    
    return capitalVowels;
}