function arrayPlusArray(arr1, arr2) {
    const arrConcat = arr1.concat(arr2);
    return arrConcat.reduce((total, num) => total += num);
  }