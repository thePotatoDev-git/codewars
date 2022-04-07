function reverseSeq(n) {
    const sequence = [];
    for (i = 1; i <= n; i++) {
      sequence.push(i);
    }
    return sequence.reverse();
  }