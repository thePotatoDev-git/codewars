function bonusTime(salary, bonus) {
    return bonus ? `£${String(salary * 10)}` : `£${salary}`
  }