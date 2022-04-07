function solution(num) {
    const multiplesOf3Or5 = [];
    
    for (i = 1; i < num; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        multiplesOf3Or5.push(i);
      }
    }
    return multiplesOf3Or5.reduce((total, num) => {
      return total + num
    }, 0);
  }