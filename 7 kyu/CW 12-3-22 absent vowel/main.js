// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

// **Solution**

function absentVowel(x){
    // Make an array of vowels
    // Lowercase x
    // Iterate through the vowels array, and check if the current vowel is in x
    // If the current vowel is missing, return the index
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    x = x.toLowerCase();
    
    for (let i = 0; i < vowels.length; i++) {
      if (!x.includes(vowels[i])) {
        return i;
      }
    }
}