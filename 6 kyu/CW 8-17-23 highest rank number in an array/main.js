// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// **Solution**

function highestRank(arr){
    // Make a "arrMap" object variable to map out arr
    // Make an empty number variable "currentHighestRank"
    // Make an empty number variable "currentHighestFrequency"
    // Loop through arrMap
    // If the current number's frequency is higher than "currentHighestNum", replace currentHighestNum with that value and "highestFreq" to the number
    // If the current frequency is equal but the value is higher, replace the currentHighestRank with that number
    
    const arrMap = {};
    let currentHighestRank = 0;
    let currentHighestFrequency = 0;
    
    // Map out arr
    for (const num of arr) {
      arrMap[num] = arrMap[num] ? arrMap[num] + 1 : 1;
    }
  
    // Loop through arrMap
    for (const num in arrMap) {
      if (arrMap[num] > currentHighestFrequency) {
        currentHighestRank = num;
        currentHighestFrequency = arrMap[num];
      } else if (arrMap[num] === currentHighestFrequency && num > currentHighestRank) {
        currentHighestRank = num;
      }
    }
  
    return Number(currentHighestRank);
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); // 3