// What's in a name?
// ...Or rather, what's a name in? For us, a particular string is where we are looking for a name.

// Task
// Write a function, taking two strings in parameter, that tests whether or not the first string contains all of the letters of the second string, in order.

// The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.

// Examples
//     "Across the rivers", "chris" --> true
//       ^      ^  ^^   ^
//       c      h  ri   s
                
//     Contains all of the letters in "chris", in order.
// ----------------------------------------------------------
//     "Next to a lake", "chris" --> false

//     Contains none of the letters in "chris".
// --------------------------------------------------------------------
//     "Under a sea", "chris" --> false
//          ^   ^
//          r   s

//     Contains only some of the letters in "chris".
// --------------------------------------------------------------------
//     "A crew that boards the ship", "chris" --> false
//        cr    h              s i
//        cr                h  s i  
//        c     h      r       s i
//                  ...
          
//     Contains all of the letters in "chris", but not in order.
// --------------------------------------------------------------------
//     "A live son", "Allison" --> false
//      ^ ^^   ^^^
//      A li   son
            
//     Contains all of the correct letters in "Allison", in order, but not enough of all of them (missing an 'l').

// **Solution**

function nameInStr(str, name){
    // Lowercase str and name
    // Loop through name
    // Find the index of name[i] in str
    // If the index is -1, return false
    // If the index is >= 0, slice str from that index
    // At the end of the loop, return true
  
    str = str.toLowerCase();
    name = name.toLowerCase();
  
    for (let i = 0; i < name.length; i++) {
      if (str.indexOf(name[i]) === -1) {
        return false;
      } else {
        str = str.slice(str.indexOf(name[i]) + 1)
      }
    }
  
    return true;
}