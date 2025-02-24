// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// **SOLUTION**

function correctPolishLetters (string) {
    // Make an object for the Polish letters, `polishLetters`
    // Create an empty string, `result`
    // Iterate through `string`
    // If a letter in `string` exists in `polishLetters`, add it to `result`
    // Else add the current letter
    // Return `result`
  
    const polishLetters = {
      'ą': 'a',
      'ć': 'c',
      'ę': 'e',
      'ł': 'l',
      'ń': 'n',
      'ó': 'o',
      'ś': 's',
      'ź': 'z',
      'ż': 'z',
    };
  
    let result = '';
  
    for (let i = 0; i < string.length; i++) {
      if (polishLetters[string[i]]) {
        result += polishLetters[string[i]];
      } else {
        result += string[i];
      }
    }
  
    return result;
}