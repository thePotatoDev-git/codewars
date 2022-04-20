function rentalCarCost(d) {
    let rentalCost = d * 40
    if (d >= 7) {
      return rentalCost - 50;
    } else if (d >= 3) {
      return rentalCost - 20;
    } else {
      return rentalCost;
    }
  }