// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// **Solution**

function duplicateEncode(word){
    // Lowercase word to make it case insensitive
    // Split the word into individual elements, forming an array
    // Iterate through the array and check if the index is the same as the last index
    // If an element shares the same index, turn it into a '('
    // If an element doesn't have the same index and lastIndex, turn it into a ')'
    // Return the joined array
    word = word.toLowerCase();
    const splitWord = word.toLowerCase().split('');
    
    const encoded = splitWord.map(char => {
      if (word.indexOf(char) === word.lastIndexOf(char)) {
        return '(';
      } else {
        return ')';
      }
    })
    
    return encoded.join('');
}