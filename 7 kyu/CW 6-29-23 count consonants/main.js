// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// **Solution**

function consonantCount(str) {
    // Make an array of consonants
    // Splt str into individual letters
    // Filter out str that aren't consanants
    // Return the length
    
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    
    const strSplit = str.split('');
    
    return strSplit.filter(letter => consonants.includes(letter)).length;
}