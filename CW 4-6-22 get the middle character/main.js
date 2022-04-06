function getMiddle(str) {
    if (str.length % 2 == 0) {
      return str[(str.length / 2) - 1] + str[str.length / 2];
    } else {
      return str[(str.length / 2) - .5];
    }
  }