// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// **Solution**

function divCon(x){
    // Make empty 0 variables "strNums" and "intNums"
    // Loop through x
    // If x[i] is a number type, add it to "intNum"
    // If x[i] is a string type, convert it to a number and add it to "strNums"
    // Subtract strNums from intNums
    
    let strNums = 0;
    let intNums = 0;
    
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === 'number') {
        intNums += x[i];
      } else {
        strNums += Number(x[i]);
      }
    }
    
    return intNums - strNums;
}