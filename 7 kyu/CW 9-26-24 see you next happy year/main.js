// Scenario
// You're saying good-bye your best friend , See you next happy year .

// Happy Year is the year with only distinct digits , (e.g) 2018

// Task
// Given a year, Find The next happy year or The closest year You'll see your best friend!alt!alt

// Notes
// Year Of Course always Positive .
// Have no fear , It is guaranteed that the answer exists .
// It's not necessary that the year passed to the function is Happy one .
// Input Year with in range (1000  ≤  y  ≤  9000)
// Input >> Output Examples:
// nextHappyYear (7712) ==> return (7801)
// Explanation:
// As the Next closest year with only distinct digits is 7801 .

// **Solution**

function nextHappyYear(year){
    // Make a for loop starting from year + 1 until 9012
    // Convert the year to a string and split it
    // Get rid of duplicates in the string
    // If the length of the result is 4, return that number
    
    for (let i = year+1; i <= 9012; i++) {
      const yearStr = i.toString().split('');
      const uniqueNums = [...new Set(yearStr)];
      if (uniqueNums.length === 4) {
        return Number(uniqueNums.join(''));
      }
    }
}