function sumTwoSmallestNumbers(numbers) {  
    const lowToHigh = numbers.sort((a, b) => a - b);
    return lowToHigh[0] + lowToHigh[1];
  }