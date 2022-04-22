function goodVsEvil(good, evil){
    good = good.split(' ').map(num => Number(num))
    evil = evil.split(' ').map(num => Number(num))
  
    let goodWorth = good[0] + (good[1] * 2) + (good[2] * 3) + (good[3] * 3) + (good[4] * 4) + (good[5] * 10);
    
    let evilWorth = evil[0] + (evil[1] * 2) + (evil[2] * 2) + (evil[3] * 2) + (evil[4] * 3) + (evil[5] * 5) + (evil[6] * 10);
  
    if (goodWorth > evilWorth) {
      return 'Battle Result: Good triumphs over Evil';
    } else if (goodWorth < evilWorth) {
      return 'Battle Result: Evil eradicates all trace of Good';
    } else {
      return 'Battle Result: No victor on this battle field';
    }
  }