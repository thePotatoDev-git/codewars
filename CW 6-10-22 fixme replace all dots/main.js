// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// var replaceDots = function(str) {
//     return str.replace(/./, '-');
//   }

// Notes
// String str will never be null.

// **Solution**

var replaceDots = function(str) {
    return str.replace(/[.]/g, '-');
}