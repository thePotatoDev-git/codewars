function sumArray(array) {
    if (array == null || array.length <= 1) {
      return 0;
    } else {
      return array.reduce((sum, num) => sum + num, 0) - Math.max(...array) - Math.min(...array);
    }
  }