function getAverage(marks){
    let average = marks.reduce((total, num) => total += num);
    average = average / marks.length;
    return Math.floor(average);
  }