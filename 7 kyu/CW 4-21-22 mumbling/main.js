// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// **Solution**

function accum(s) {
    s = s.split('');
    const mumble = s.map((letter, i) => letter.toUpperCase() + letter.repeat(i).toLowerCase())
    return mumble.join('-');
  }