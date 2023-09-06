// This Kata is intended as a small challenge for my students

// Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

// Example (Input --> Output)

// "drake" --> "drk"
// "aeiou" --> ""
// remove_vowels("drake") // => "drk"
// remove_vowels("aeiou") // => ""

// **Solution**

var removeVowels = function(str){
    // Make a variable of vowels
    // Make an empty variable "result"
    // Loop through str
    // If str[i] isn't a vowel, add str[i] to "result"
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        result += str[i];
      }
    }
    
    return result;
}