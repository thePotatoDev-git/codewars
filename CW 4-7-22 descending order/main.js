function descendingOrder(n){
    n = n.toString().split('');
    const sorted = n.sort((a, b) => b - a);
    return Number(sorted.join(''));
  }