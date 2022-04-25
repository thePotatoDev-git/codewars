function doubleChar(str) {
    str = str.split('');
    const doubled = str.map(char => char.repeat(2));
    return doubled.join('');
  }