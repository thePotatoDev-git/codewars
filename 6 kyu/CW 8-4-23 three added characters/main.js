// Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),

// Write a function that returns the added character

// E.g
// string1 = "hello"
// string2 = "aaahello"

// // => 'a'
// The above is just an example; the characters could be anywhere in the string and string2 is actually shuffled.

// Another example
// string1 = "abcde"
// string2 = "2db2a2ec"

// // => '2'
// Note that the added character could also exist in the original string

// string1 = "aabbcc"
// string2 = "aacccbbcc"

// // => 'c'
// You can assume that string2 will aways be larger than string1, and there will always be three added characters in string2.

// Write the function addedChar() that takes two strings and return the added character as described above.

// **Solution**

function addedChar(s1, s2){
    const counts = {};
  
    // Map out s2
    for (const char of s2) {
      counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
  
    // Iterate through s1 and if counts[char] exists in counts, subtract 1 from counts[char]
    for (const char of s1) {
      if (counts[char]) {
        counts[char]--;
      }
    }
  
    // Iterate through counts. If a char === 3, return that char
    for (const char in counts) {
      if (counts[char] === 3) {
        return char;
      }
    }
}