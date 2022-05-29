// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// **Solution**

function noBoringZeros(n) {
    let splitNum = String(n).split('');
    while (splitNum[splitNum.length - 1] === '0') {
      splitNum.pop();
    }
    return Number(splitNum.join(''));
  }