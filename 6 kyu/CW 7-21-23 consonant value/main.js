// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// **Solution**

function solve(s) {
  // Make a variable of the alphabet
  // Make a variable with vowels
  // Split s by vowels
  // Loop through the consonant array
  // Find the value of each array and push it to "consonantValues"
  // Return the highest number in "consonantValues"
  
  const abc = ' abcdefghijklmnopqrstuvwxyz';
  const vowels = /[aeiou]/gi;
  const consonantValues = [];
  
  const consonants = s.split(vowels).filter(el => el !== '');
  
  for (let i = 0; i < consonants.length; i++) {
    let value = 0;
    for (let j = 0; j < consonants[i].length; j++) {
      value += abc.indexOf(consonants[i][j]);
    }
    consonantValues.push(value);
  }
  
  return Math.max(...consonantValues);
};