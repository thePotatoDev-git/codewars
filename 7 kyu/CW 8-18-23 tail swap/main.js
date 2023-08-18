// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

// **Solution**

function tailSwap(arr) {
    // For each string, find the index of ":" 
    // Add the chars in the first string before the colon and the chars in the second string after the colon. Push that into "swappedArr"
    // Add the chars in the second string before the colon and the chars in the first string after the colon. Push that into "swappedArr"
    // Return the new strings in an array
  
    const firstColon = arr[0].indexOf(':'); // Finds index of ':' in first string
    const secondColon = arr[1].indexOf(':'); // Finds index of ':' in second string
  
    const firstStr = arr[0].slice(0, firstColon) + arr[1].slice(secondColon); // Adds chars in first string before the colon and chars in second string after the colon
    const secondStr = arr[1].slice(0, secondColon) + arr[0].slice(firstColon); // Adds chars in second string before the colon and chars in first string after the colon
  
    return [firstStr, secondStr];
}