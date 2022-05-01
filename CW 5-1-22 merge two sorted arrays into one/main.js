function mergeArrays(arr1, arr2) {
    const arr1Filtered = arr1.filter(num => !arr2.includes(num));
    return arr1Filtered.concat(arr2).sort((a, b) => a - b);
  }