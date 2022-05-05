// Description
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// Input:
// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

// **Solution**

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