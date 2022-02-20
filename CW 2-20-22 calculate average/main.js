function find_average(array) {
    if (array.length == 0) {
      return 0;
    } else {
    const average = array.reduce((total, num) => total += num);
      return average / array.length;
    }
  }