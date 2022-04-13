function betterThanAverage(classPoints, yourPoints) {
    const total = classPoints.reduce((total, score) => total += score);
    if (total / classPoints.length < yourPoints) {
        return true;
    } else {
        return false;
    }
  }
  