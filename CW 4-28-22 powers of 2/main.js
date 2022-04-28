function powersOfTwo(n){
    const powers = [];
    for (i = 0; i <= n; i++) {
      powers.push(2**i);
    }
    return powers;
  }