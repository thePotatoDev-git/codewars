// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// **Solution**

function getCount(str) {
    const splitStr = str.split('');
     const vowelCount = splitStr.filter(element => element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u');
     return vowelCount.length;
   }