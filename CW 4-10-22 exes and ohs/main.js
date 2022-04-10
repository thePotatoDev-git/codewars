function XO(str) {
    const split = str.toLowerCase().split('');
    const x = split.filter(letter => letter == 'x');
    const o = split.filter(letter => letter == 'o');
    return x.length == o.length ? true : false;
  }