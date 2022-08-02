// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

// **Solution**

function wordsToMarks(string){
    // Create a variable of a the alphabet and each letter as an element in an array
    // Create a variable of 0 for the sum
    // Split the string into individual characters
    // For each element, find the index of each letter in the alphabet array
    // Add one to each index number and add to the sum variable
    
    const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let sum = 0;
    
    string = string.split('');
    string.forEach(letter => {
      sum += abc.indexOf(letter) + 1;
    })
    return sum;
}