// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// **Solution**

function anagrams(word, words) {
    // Make an empty array variable, anagram
    // Sort the word
    // Compare the word with each word in the array, but sorted
    // If they are equal, push the word into a new array
    
    const anagram = [];
    word = word.split('').sort().join('');
    
    words.forEach(el => {
      if (el.split('').sort().join('') === word) {
        anagram.push(el);
      }
    })
    return anagram;
}