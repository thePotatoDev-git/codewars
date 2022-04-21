function accum(s) {
    s = s.split('');
    const mumble = s.map((letter, i) => letter.toUpperCase() + letter.repeat(i).toLowerCase())
    return mumble.join('-');
  }