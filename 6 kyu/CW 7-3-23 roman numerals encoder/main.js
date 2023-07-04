// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// **Solution**

function solution(num){
    // Make an empty string variable "roman"
  // Make an empty number variable "remainder"
  // Get the floor of num / 1000. Add 'M' with that number to "roman"
  // Find the remainder of num with modulus 1000
  // If the remainder is >= 900, add CM to "roman"
  // If < 900, find the floor of the remainder / 500. Add 'D' with that number to "roman"
  // Find the remainder with modulus 500
  // If the remainder is >= 400, add CD to "roman"
  // If < 400, find the floor of the remainder / 100 and add 'C' to "roman"
  // Repeat until end
  // >90 = XC
  // >40 = XL
  // 9 = IX
  // 4 = IV

  let roman = '';
  let remainder = 0;

  let floor = Math.floor(num / 1000);
  roman += 'M'.repeat(floor);
  remainder = num % 1000;
  
  if (remainder >= 900) {
    roman += 'CM';
    remainder = remainder - 900;
  } else if (remainder < 900) {
    floor = Math.floor(remainder / 500);
    roman += 'D'.repeat(floor);
    remainder = remainder % 500;
  }

  if (remainder >= 400) {
    roman += 'CD';
    remainder = remainder - 400;
  } else if (remainder < 400) {
    floor = Math.floor(remainder / 100);
    roman += 'C'.repeat(floor);
    remainder = remainder % 100;
  }

  if (remainder >= 90) {
    roman += 'XC';
    remainder = remainder - 90;
  } else if (remainder < 90) {
    floor = Math.floor(remainder / 50);
    roman += 'L'.repeat(floor);
    remainder = remainder % 50;
  }

  if (remainder >= 40) {
    roman += 'XL';
    remainder = remainder - 40;
  } else if (remainder < 40) {
    floor = Math.floor(remainder / 10);
    roman += 'X'.repeat(floor);
    remainder = remainder % 10;
  }

  if (remainder >= 9) {
    roman += 'IX';
    remainder = remainder - 9;
  } else if (remainder < 9) {
    floor = Math.floor(remainder / 5)
    roman += 'V'.repeat(floor);
    remainder = remainder % 5;
  }

  if (remainder >= 4) {
    roman += 'IV';
    remainder = remainder - 4;
  } else if (remainder < 4) {
    roman += 'I'.repeat(remainder);
  }

  return roman;

}