// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// **Solution**

function cleanString(s) {
    // Make an empty str variable
    // Loop through s
    // If s[i] is '#', remove the last char in str
    // If s[i] is a character, add that character to str
  
    let str = '';
  
    for (let i = 0; i < s.length; i++) {
      s[i] === '#' ? str = str.slice(0, -1) : str += s[i];
    }
  
    return str;
}