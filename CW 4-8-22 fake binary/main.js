function fakeBin(x){
    x = x.split('');
    const fakeBinary = x.map(num => num < 5 ? 0 : 1)
    return fakeBinary.join('');
  }