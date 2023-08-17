// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// **Solution**

function encode(string) {
    // Make an object with vowels and their values
    // Make an empty string variable "encoded"
    // Loop through string
    // If string[i] is a vowel, add the vowel's value to "encoded"
    // If string[i] isn't a vowel, add that letter to "encoded"
    
      const vowels = {
        'a': '1',
        'e': '2',
        'i': '3',
        'o': '4',
        'u': '5',
      };
    let encoded = '';
    
    for (let i = 0; i < string.length; i++) {
      if (vowels[string[i]] === undefined) {
        encoded += string[i];
      } else {
        encoded += vowels[string[i]];
      }
    }
    
    return encoded;
  }
  
  function decode(string) {
    const nums = {
      '1': 'a',
      '2': 'e',
      '3': 'i',
      '4': 'o',
      '5': 'u',
    };
    let decoded = '';
  
    for (let i = 0; i < string.length; i++) {
      if (nums[string[i]] === undefined) {
        decoded += string[i];
      } else {
        decoded += nums[string[i]];
      }
    }
  
    return decoded;
}