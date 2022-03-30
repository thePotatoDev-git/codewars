function highAndLow(numbers){
    let splitNums = numbers.split(' ');
    const numArray = splitNums.map(num => Number(num));
    let maxAndMin = Math.max(...numArray) + ' ' + Math.min(...numArray);
    return maxAndMin;
  }