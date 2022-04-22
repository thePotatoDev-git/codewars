function sumMix(x){
    return x.map(num => Number(num)).reduce((total, num) => total += num);
  }