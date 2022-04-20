function countPositivesSumNegatives(input) {
    let positiveCount = 0;
    let sumOfNegatives = 0;
    const arr = []
    
    if (input == null) {
      return [];
    }
  
    input.forEach(num => {
      if (num > 0) {
        positiveCount += 1;
      } else if (num < 0) {
        sumOfNegatives += num;
      }
    })
    if (positiveCount > 0 || sumOfNegatives < 0) {
      arr.push(positiveCount);
      arr.push(sumOfNegatives);
    }
    return arr;
  }