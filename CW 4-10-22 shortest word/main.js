function findShort(s){
    const arr = s.split(' ');
    const sorted = arr.sort((a, b) => a.length - b.length);
    return sorted[0].length;
  }