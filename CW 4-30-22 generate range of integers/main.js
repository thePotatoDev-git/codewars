function generateRange(min, max, step){
    const rangeOfIntegers = [];
    for (i = min; i <= max; i+= step) {
      rangeOfIntegers.push(i);
    }
    return rangeOfIntegers;
  }