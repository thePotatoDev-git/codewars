// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

// **Solution**

function spEng(sentence){
    // Lowercase setence parameter using toLowerCase()
    // Use .includes to see if 'english' is in the sentence
    sentence = sentence.toLowerCase();
    return sentence.includes('english');
}