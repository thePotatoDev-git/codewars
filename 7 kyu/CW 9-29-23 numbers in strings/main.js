// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

// **Solution**

function solve(s) {
    // Make a variable of an array of numbers 0-9
    // Loop through s. If s[i] isn't a number, replace s[i] with an empty space
    // Split the result by spaces, then filter out the spaces
    // Map the remaining numbers and turn them into number types
    // Return the highest number
  
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
    for (let i = 0; i < s.length; i++) {
      if (!nums.includes(s[i])) {
        s = s.replace(s[i], ' ');
      }
    }
  
    const filteredAndNumbered = s.split(' ').filter(el => el !== '').map(num => Number(num));
  
    return Math.max(...filteredAndNumbered);
};