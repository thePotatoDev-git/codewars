// Work out what number day of the year it is.

// toDayOfYear([1, 1, 2000]) => 1
// The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

// Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

// The year can be evenly divided by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.

// **Solution**

function toDayOfYear(arr) {
    // Make an object with the months and how many days they have as their values
    // Make a loop with i starting at 0 and ending at arr[1] - 1
    // For each loop, add the month's days to variable "day"
    // Then add arr[0] to "day"
    // If the year is a leap year and it's past February, add 1 to "day"
    
    let day = 0;
    const months = {
      1: 31,
      2: 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    };
    
    for (let i = 1; i < arr[1]; i++) {
      day += months[i];
    }
    
    day += arr[0];
    
    if ((arr[2] % 4 === 0 && arr[2] % 100 !== 0 || (arr[2] % 400 === 0)) && arr[1] > 2) {
        day += 1;
    }
    
    return day;
}