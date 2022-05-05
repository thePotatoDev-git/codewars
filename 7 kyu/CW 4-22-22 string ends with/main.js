// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// **Solution**

function solution(str, ending){
    const endsWith = str.substring(str.length - ending.length);
    return endsWith == ending ? true : false;
  }