// It's Friday the 13th, and Jason is ready for his first killing spree!

// Create a function, killcount, that accepts two arguments: an array of array pairs (the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intellegence.

// Ruby, Python, Crystal:

// counselors = [["Chad", 2], ["Tommy", 9]]
// jason = 7
// JavaScript:

// var counselors = [["Chad", 2], ["Tommy", 9]];
// var jason = 7;
// PHP:

// $counselors = [["Chad", 2], ["Tommy", 9]];
// $jason = 7;
// Your function must return an array of the names of all the counselors who can be outsmarted and killed by Jason.

// Happy Friday the 13th!

// **Solution**

function killcount(counselors, jason){
    // Make an empty array variable "victims"
    // Loop through counselors
    // If counselors[i][1] is < jason, push the counselor name to "victims"
    // Return victims
    
    const victims = [];
    
    for (let i = 0; i < counselors.length; i++) {
      if (counselors[i][1] < jason) {
        victims.push(counselors[i][0]);
      }
    }
    
    return victims;
}