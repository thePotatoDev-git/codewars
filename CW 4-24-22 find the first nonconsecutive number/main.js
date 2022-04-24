function firstNonConsecutive (arr) {
    const nonConsecutive = []
    arr.forEach((num, i) => {
        if (num != arr[i -1] + 1) {
            nonConsecutive.push(num);
        }
    })
    if (nonConsecutive.length == 1) {
        return null;
    } else {
        return nonConsecutive[1];
    }
  }