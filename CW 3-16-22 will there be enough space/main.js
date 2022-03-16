function enough(cap, on, wait) {
    let totalPassengers = on + wait;
    return cap > totalPassengers ? 0 : totalPassengers - cap;
  }