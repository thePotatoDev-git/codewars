function findMultiples(integer, limit) {
    const multiples = []
    for (i = integer; i <= limit; i++) {
      if (i % integer == 0) {
        multiples.push(i);
      }
    }
    return multiples;
  }