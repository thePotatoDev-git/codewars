function countBy(x, n) {
    const multiple = x * n;
    const arr = [];
    
    for (i = x; i <= multiple; i = i + x) {
      arr.push(i);
    }
    return arr;
  }