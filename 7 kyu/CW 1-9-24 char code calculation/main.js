// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// **Solution**

function calc(x){
    // Loop through x
    // Find the char code for each character and add it to "total1"
    // Loop through "total1"
    // If the current character is a 7, add 1 to "total2." Else add the current character to "total2"
    // Sum the digits of total1 and total2
    // Find the difference between the sums of total1 and total2
    
    let total1 = '';
    let total2 = '';
    
    for (let i = 0; i < x.length; i++) {
      total1 += x.charCodeAt(i);
    }
    
    for (let i = 0; i < total1.length; i++) {
      if (total1[i] === '7') {
        total2 += '1';
      } else {
        total2 += total1[i];
      }
    }
    
    total1 = total1.split('').reduce((total, num) => total += Number(num), 0);
    total2 = total2.split('').reduce((total, num) => total += Number(num), 0);
    
    return total1 - total2;
}