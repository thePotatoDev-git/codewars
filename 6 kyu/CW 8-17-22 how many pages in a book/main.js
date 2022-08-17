// Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

// Task: Given the summary, find the number of pages n the book has.

// Example
// If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

// Be aware that you'll get enormous books having up to 100.000 pages.

// All inputs will be valid.

// **Solution**

function amountOfPages(summary){
    // Make a variable with an empty string
    // Make a num variable with starting value of 0
    // Add consecutive numbers in String form to the empty variable and add 1 to num variable with each loop
    // When the length of the string reaches the summary, stop the loop
    // Return the last number that was added
    
    let stringNums = '';
    let num = 0;
    
    while (stringNums.length < summary) {
      num++;
      stringNums += String(num);
    }
    return num;
}